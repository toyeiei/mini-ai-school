// Run: node js/tests/app.test.js

const { TestRunner, assert, assertEqual, assertIncludes } = require('./test-runner');
const {
    setupMocks, fireDOMContentLoaded, getLinkByLesson, getContentArea, getMainArea,
    getMockDOM, getFetchCalls, getFetchOptions, getAbortCalls,
    setFetchResponse, setFetchError
} = require('./mocks');

const { initApp } = require('../app');

const TEST_CONFIG = {
    _courseId: 'test-course',
    title: 'Test Course',
    lessons: [
        { id: '01-intro', title: 'Introduction' },
        { id: '02-basics', title: 'Basics' },
        { id: '03-advanced', title: 'Advanced' }
    ]
};

function init() {
    setupMocks();
    global.COURSE_CONFIG = TEST_CONFIG;
    initApp();
    fireDOMContentLoaded();
}

function initWithResponse(response) {
    setupMocks();
    global.COURSE_CONFIG = TEST_CONFIG;
    setFetchResponse(response);
    initApp();
    fireDOMContentLoaded();
}

function initWithError(error) {
    setupMocks();
    global.COURSE_CONFIG = TEST_CONFIG;
    setFetchError(error);
    initApp();
    fireDOMContentLoaded();
}

async function wait(ms) {
    return new Promise(r => setTimeout(r, ms || 20));
}

// --- TESTS ---

TestRunner.describe('App initialization', () => {
    TestRunner.it('should render sidebar from config', () => {
        init();
        assertIncludes(getMockDOM().sidebar.innerHTML, 'Test Course');
    });

    TestRunner.it('should render all lesson links from config', () => {
        init();
        // Lesson links are <a> elements with data-lesson attribute
        const lessonLinks = getMockDOM().lessonLinks.filter(l => l.getAttribute('data-lesson'));
        assertEqual(lessonLinks.length, 3);
    });

    TestRunner.it('should set first lesson link as active', () => {
        init();
        assert(getLinkByLesson('01-intro').classList.contains('active'));
    });

    TestRunner.it('should set aria-current="page" on active link', () => {
        init();
        assertEqual(getLinkByLesson('01-intro').getAttribute('aria-current'), 'page');
    });

    TestRunner.it('should show error when COURSE_CONFIG is undefined', () => {
        setupMocks();
        global.COURSE_CONFIG = undefined;
        initApp();
        fireDOMContentLoaded();
        assertIncludes(getMockDOM().sidebar.innerHTML, 'Course not found');
    });

    TestRunner.it('should show error when COURSE_CONFIG has no lessons', () => {
        setupMocks();
        global.COURSE_CONFIG = { title: 'Empty', lessons: [] };
        initApp();
        fireDOMContentLoaded();
        assertIncludes(getMockDOM().sidebar.innerHTML, 'Course not found');
    });

    TestRunner.it('should use hash-based hrefs from config', () => {
        init();
        assertEqual(getLinkByLesson('02-basics').getAttribute('href'), '#02-basics');
    });

    TestRunner.it('should set data-lesson attribute from config', () => {
        init();
        assertEqual(getLinkByLesson('03-advanced').getAttribute('data-lesson'), '03-advanced');
    });
});

TestRunner.describe('loadLesson - success', () => {
    TestRunner.it('should auto-load first lesson on startup', async () => {
        initWithResponse({ ok: true, text: async () => '# Intro' });
        await wait();
        assert(getFetchCalls().some(url => url.includes('courses/test-course/lessons/01-intro.md')));
    });

    TestRunner.it('should show loading indicator before fetch', () => {
        init();
        assertIncludes(getContentArea().innerHTML, 'Loading...');
    });

    TestRunner.it('should render markdown content', async () => {
        initWithResponse({ ok: true, text: async () => '# Hello World\n\nContent here' });
        await wait();
        assertIncludes(getContentArea().innerHTML, 'Hello World');
    });

    TestRunner.it('should pass AbortController signal to fetch', async () => {
        initWithResponse({ ok: true, text: async () => '# Test' });
        await wait();
        assert(getFetchOptions().some(opts => opts.signal !== undefined));
    });

    TestRunner.it('should sanitize script tags', async () => {
        initWithResponse({ ok: true, text: async () => '# Title <script>alert(1)</script>' });
        await wait();
        assert(!getContentArea().innerHTML.includes('<script>'));
    });

    TestRunner.it('should reset scroll position after loading', async () => {
        initWithResponse({ ok: true, text: async () => '# Test' });
        await wait();
        assertEqual(getMainArea().scrollTop, 0);
    });

    TestRunner.it('should fetch clicked lesson by filename', async () => {
        initWithResponse({ ok: true, text: async () => '# Lesson 2' });
        await wait();
        getLinkByLesson('02-basics').dispatchEvent({ type: 'click', preventDefault() {} });
        await wait();
        assert(getFetchCalls().some(url => url.includes('02-basics.md')));
    });
});

TestRunner.describe('loadLesson - error handling', () => {
    TestRunner.it('should handle non-ok HTTP response', async () => {
        initWithResponse({ ok: false, text: async () => '' });
        await wait();
        assertIncludes(getContentArea().innerHTML, 'Failed to load lesson');
    });

    TestRunner.it('should handle network error', async () => {
        initWithError(new TypeError('Network error'));
        await wait();
        assertIncludes(getContentArea().innerHTML, 'Network error');
    });

    TestRunner.it('should use textContent for errors (no XSS)', async () => {
        initWithError(new Error('<img src=x onerror="alert(1)">'));
        await wait();
        const content = getContentArea();
        assertIncludes(content.textContent, '<img');
        assertIncludes(content.textContent, 'Failed to load lesson');
    });

    TestRunner.it('should handle marked.js not available', async () => {
        setupMocks();
        global.COURSE_CONFIG = TEST_CONFIG;
        setFetchResponse({ ok: true, text: async () => '# Test' });
        global.marked = undefined;
        initApp();
        fireDOMContentLoaded();
        await wait();
        assertIncludes(getContentArea().innerHTML, 'Markdown parser not available');
    });

    TestRunner.it('should handle response.text() throwing', async () => {
        initWithResponse({ ok: true, text: async () => { throw new Error('Stream error'); } });
        await wait();
        assertIncludes(getContentArea().innerHTML, 'Failed to load lesson');
    });
});

TestRunner.describe('AbortController', () => {
    TestRunner.it('should create AbortController on each loadLesson', async () => {
        initWithResponse({ ok: true, text: async () => '# Test' });
        await wait();
        assert(getAbortCalls().length >= 1);
    });

    TestRunner.it('should abort previous fetch on new click', async () => {
        initWithResponse({ ok: true, text: async () => '# Slow' });
        await wait();
        const first = getAbortCalls()[0];
        setFetchResponse({ ok: true, text: async () => '# Fast' });
        getLinkByLesson('02-basics').dispatchEvent({ type: 'click', preventDefault() {} });
        await wait();
        assert(first.signal.aborted);
    });
});

TestRunner.describe('setActiveLink', () => {
    TestRunner.it('should remove active from previous and add to clicked', async () => {
        initWithResponse({ ok: true, text: async () => '# Test' });
        getLinkByLesson('02-basics').dispatchEvent({ type: 'click', preventDefault() {} });
        await wait();
        assert(!getLinkByLesson('01-intro').classList.contains('active'));
        assert(getLinkByLesson('02-basics').classList.contains('active'));
    });

    TestRunner.it('should manage aria-current correctly', async () => {
        initWithResponse({ ok: true, text: async () => '# Test' });
        getLinkByLesson('03-advanced').dispatchEvent({ type: 'click', preventDefault() {} });
        await wait();
        assert(!getLinkByLesson('01-intro').hasAttribute('aria-current'));
        assertEqual(getLinkByLesson('03-advanced').getAttribute('aria-current'), 'page');
    });

    TestRunner.it('should only have one active at a time', async () => {
        initWithResponse({ ok: true, text: async () => '# Test' });
        getLinkByLesson('02-basics').dispatchEvent({ type: 'click', preventDefault() {} });
        await wait();
        getLinkByLesson('03-advanced').dispatchEvent({ type: 'click', preventDefault() {} });
        await wait();
        const activeCount = getMockDOM().lessonLinks.filter(l => l.classList.contains('active')).length;
        assertEqual(activeCount, 1);
    });
});

TestRunner.describe('click handlers', () => {
    TestRunner.it('should prevent default anchor behavior', () => {
        initWithResponse({ ok: true, text: async () => '# Test' });
        let prevented = false;
        getLinkByLesson('02-basics').dispatchEvent({ type: 'click', preventDefault() { prevented = true; } });
        assert(prevented);
    });

    TestRunner.it('should update content on click', async () => {
        initWithResponse({ ok: true, text: async () => '# First' });
        await wait();
        const c1 = getContentArea().innerHTML;
        setFetchResponse({ ok: true, text: async () => '# Second' });
        getLinkByLesson('02-basics').dispatchEvent({ type: 'click', preventDefault() {} });
        await wait();
        assert(c1 !== getContentArea().innerHTML);
    });
});

TestRunner.describe('edge cases', () => {
    TestRunner.it('should handle empty markdown', async () => {
        initWithResponse({ ok: true, text: async () => '' });
        await wait();
        assert(!getContentArea().innerHTML.includes('Failed'));
    });

    TestRunner.it('should handle code blocks', async () => {
        initWithResponse({ ok: true, text: async () => '```js\nconsole.log("hi");\n```' });
        await wait();
        assertIncludes(getContentArea().innerHTML, '<parsed>');
    });
});

TestRunner.describe('removeEventListener', () => {
    TestRunner.it('should properly remove event listeners', () => {
        init();
        const link = getLinkByLesson('01-intro');
        const handler = () => {};
        link.addEventListener('test', handler);
        link.removeEventListener('test', handler);
        assertEqual((link._eventListeners['test'] || []).length, 0);
    });
});

TestRunner.runAll().then(success => {
    process.exit(success ? 0 : 1);
});
