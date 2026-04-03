// Mock environment for browser APIs (Node.js compatible)

let mockDOM;
let mockFetchResponse;
let mockFetchError;
let mockFetchCalls = [];
let mockFetchOptions = [];
let pendingDOMContentLoaded = null;
let mockAbortControllerCalls = [];

function createElement(tag, attrs = {}) {
    const el = {
        tagName: tag.toUpperCase(),
        children: [],
        attributes: { ...attrs },
        classList: {
            _classes: new Set(attrs.class ? attrs.class.split(' ') : []),
            add(c) { this._classes.add(c); },
            remove(c) { this._classes.delete(c); },
            contains(c) { return this._classes.has(c); },
            get value() { return [...this._classes]; }
        },
        innerHTML: '',
        textContent: '',
        scrollTop: 0,
        style: {},
        _eventListeners: {},
        addEventListener(event, handler) {
            if (!this._eventListeners[event]) this._eventListeners[event] = [];
            this._eventListeners[event].push(handler);
        },
        removeEventListener(event, handler) {
            if (this._eventListeners[event]) {
                this._eventListeners[event] = this._eventListeners[event].filter(h => h !== handler);
            }
        },
        dispatchEvent(event) {
            const handlers = this._eventListeners[event.type] || [];
            handlers.forEach(h => h(event));
            return handlers.length > 0;
        },
        focus() {},
        getAttribute(name) { return this.attributes[name] || null; },
        setAttribute(name, value) { this.attributes[name] = value; },
        hasAttribute(name) { return name in this.attributes; },
        removeAttribute(name) { delete this.attributes[name]; },
        appendChild(child) {
            this.children.push(child);
            child.parentNode = this;
            this._innerHTML = (this._innerHTML || '') + (child.textContent || '');
            this.textContent = (this.textContent || '') + (child.textContent || '');
            return child;
        },

        removeChild(child) {
            const index = this.children.indexOf(child);
            if (index !== -1) {
                this.children.splice(index, 1);
                child.parentNode = null;
            }
            return child;
        },

        get innerHTML() { return this._innerHTML || ''; },
        set innerHTML(val) {
            this._innerHTML = val;
            this.textContent = val;
            this.children = [];
        },
        querySelector(selector) {
            for (const child of this.children) {
                if (matchesSelector(child, selector)) return child;
                const found = child.querySelector(selector);
                if (found) return found;
            }
            return null;
        },
        querySelectorAll(selector) {
            const results = [];
            const collect = (parent) => {
                for (const child of parent.children) {
                    if (matchesSelector(child, selector)) results.push(child);
                    collect(child);
                }
            };
            collect(this);
            return results;
        }
    };
    const domProps = ['href', 'className', 'id', 'src', 'alt', 'type', 'name', 'value', 'placeholder'];
    domProps.forEach(prop => {
        Object.defineProperty(el, prop, {
            get() { return el.attributes[prop] || ''; },
            set(val) { el.attributes[prop] = val; },
            configurable: true
        });
    });
    return el;
}

function matchesSelector(el, selector) {
    const trimmed = selector.trim();

    if (trimmed.startsWith('#')) {
        const id = trimmed.slice(1).split(' ')[0];
        return el.attributes.id === id;
    }

    if (trimmed.includes(' ')) {
        const parts = trimmed.split(/\s+/);
        const target = parts[parts.length - 1];
        if (target.startsWith('#')) {
            return el.attributes.id === target.slice(1);
        }
        if (target.startsWith('.')) {
            return el.classList.contains(target.slice(1));
        }
        const tagMap = { 'a': 'A', 'li': 'LI', 'ul': 'UL', 'nav': 'NAV', 'main': 'MAIN', 'article': 'ARTICLE', 'aside': 'ASIDE', 'header': 'HEADER', 'div': 'DIV', 'body': 'BODY', 'h1': 'H1', 'p': 'P' };
        const dotIdx = target.indexOf('.');
        if (dotIdx !== -1) {
            const tag = target.slice(0, dotIdx);
            const cls = target.slice(dotIdx + 1);
            return (tagMap[tag] || tag.toUpperCase()) === el.tagName && el.classList.contains(cls);
        }
        if (tagMap[target]) return el.tagName === tagMap[target];
        return false;
    }

    if (trimmed.startsWith('.')) {
        return el.classList.contains(trimmed.slice(1));
    }

    const tagMap = { 'a': 'A', 'li': 'LI', 'ul': 'UL', 'nav': 'NAV', 'main': 'MAIN', 'article': 'ARTICLE', 'aside': 'ASIDE', 'header': 'HEADER', 'div': 'DIV', 'body': 'BODY', 'h1': 'H1', 'p': 'P' };
    const dotIdx = trimmed.indexOf('.');
    if (dotIdx !== -1) {
        const tag = trimmed.slice(0, dotIdx);
        const cls = trimmed.slice(dotIdx + 1);
        return (tagMap[tag] || tag.toUpperCase()) === el.tagName && el.classList.contains(cls);
    }
    if (tagMap[trimmed]) return el.tagName === tagMap[trimmed];
    return false;
}

function buildDOM() {
    const body = createElement('BODY');
    const container = createElement('DIV', { class: 'container' });
    const sidebar = createElement('ASIDE', { class: 'sidebar' });
    const main = createElement('MAIN', { class: 'content' });
    const article = createElement('ARTICLE', { id: 'lesson-content' });
    article.innerHTML = '<p class="loading">Loading...</p>';
    main.children.push(article);

    container.children.push(sidebar, main);
    body.children.push(container);

    return {
        body,
        article,
        main,
        sidebar,
        get lessonLinks() { return body.querySelectorAll('.lesson-list a'); }
    };
}

function setupMocks() {
    mockDOM = buildDOM();
    mockFetchCalls = [];
    mockFetchOptions = [];
    mockFetchResponse = null;
    mockFetchError = null;
    pendingDOMContentLoaded = null;
    mockAbortControllerCalls = [];

    global.window = { location: { search: '' } };

    global.document = {
        querySelector(selector) { return mockDOM.body.querySelector(selector); },
        querySelectorAll(selector) { return mockDOM.body.querySelectorAll(selector); },
        getElementById(id) { return mockDOM.body.querySelector('#' + id); },
        createElement(tag) { return createElement(tag); },
        addEventListener(event, handler) {
            if (event === 'DOMContentLoaded') pendingDOMContentLoaded = handler;
        }
    };

    global.URLSearchParams = class {
        constructor(search) {
            this._params = {};
            if (search) {
                const kv = search.replace('?', '').split('&');
                kv.forEach(pair => {
                    const [k, v] = pair.split('=');
                    if (k) this._params[k] = v;
                });
            }
        }
        get(key) { return this._params[key] || null; }
    };

    global.AbortController = class {
        constructor() {
            mockAbortControllerCalls.push(this);
            this.signal = { aborted: false };
        }
        abort() { this.signal.aborted = true; }
    };

    global.fetch = async (url, options) => {
        mockFetchCalls.push(url);
        mockFetchOptions.push(options || {});
        if (mockFetchError) throw mockFetchError;
        if (!mockFetchResponse) throw new Error('No mock response set');
        return mockFetchResponse;
    };

    global.marked = {
        parse(text) {
            return '<parsed>' + text.replace(/<script[\s\S]*?<\/script>/gi, '[SANITIZED]').replace(/on\w+\s*=/gi, '[SANITIZED]') + '</parsed>';
        }
    };

    global.DOMPurify = {
        sanitize(html) {
            return html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/on\w+\s*=/gi, '');
        }
    };
}

function fireDOMContentLoaded() {
    if (pendingDOMContentLoaded) {
        const handler = pendingDOMContentLoaded;
        pendingDOMContentLoaded = null;
        handler();
    }
}

function getLinkByLesson(lessonId) {
    return mockDOM.lessonLinks.find(l => l.getAttribute('data-lesson') === lessonId);
}

function getContentArea() {
    return mockDOM.article;
}

function getMainArea() {
    return mockDOM.main;
}

module.exports = {
    setupMocks,
    fireDOMContentLoaded,
    getLinkByLesson,
    getContentArea,
    getMainArea,
    getMockDOM: () => mockDOM,
    getFetchCalls: () => mockFetchCalls,
    getFetchOptions: () => mockFetchOptions,
    getAbortCalls: () => mockAbortControllerCalls,
    setFetchResponse: (v) => { mockFetchResponse = v; },
    setFetchError: (v) => { mockFetchError = v; }
};
