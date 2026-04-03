function initApp() {
    function init() {
        // Configure marked for Prism integration using renderer
        if (typeof marked !== 'undefined' && typeof Prism !== 'undefined') {
            const renderer = new marked.Renderer();
            renderer.code = function(code, language) {
                const lang = language || 'javascript';
                if (Prism.languages[lang]) {
                    const highlighted = Prism.highlight(code, Prism.languages[lang], lang);
                    return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + highlighted + '</code></pre>';
                }
                return '<pre><code>' + code + '</code></pre>';
            };
            marked.setOptions({ renderer: renderer });
        }

        const courseId = getCourseId();
        const sidebarEl = document.querySelector('.sidebar');

        let courseConfig;
        if (typeof COURSE_CONFIG !== 'undefined') {
            courseConfig = COURSE_CONFIG;
        }

        if (!courseConfig || !courseConfig.lessons || !courseConfig.lessons.length) {
            const errP = document.createElement('p');
            errP.className = 'loading';
            errP.textContent = 'Course not found';
            sidebarEl.appendChild(errP);
            return;
        }

        renderSidebar(sidebarEl, courseConfig);
        initLessonNavigation(courseConfig);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

function getCourseId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('course') || 'javascript';
}

function renderSidebar(sidebarEl, config) {
    sidebarEl.innerHTML = '';

    // Home button
    const homeLink = document.createElement('a');
    homeLink.href = '/landing/index.html';
    homeLink.className = 'sidebar-home';
    homeLink.setAttribute('aria-label', 'Back to course list');
    homeLink.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>';
    sidebarEl.appendChild(homeLink);

    const header = document.createElement('header');
    header.className = 'sidebar-header';
    const h1 = document.createElement('h1');
    h1.textContent = config.title;
    header.appendChild(h1);

    const nav = document.createElement('nav');
    nav.className = 'lesson-list';
    nav.setAttribute('aria-label', 'Lesson navigation');

    const ul = document.createElement('ul');
    config.lessons.forEach((lesson, i) => {
        const num = String(i + 1).padStart(2, '0');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + lesson.id;
        a.setAttribute('data-lesson', lesson.id);
        a.textContent = num + '. ' + lesson.title;
        if (i === 0) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
        }
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    sidebarEl.appendChild(header);
    sidebarEl.appendChild(nav);
}

function initLessonNavigation(config) {
    const lessonLinks = document.querySelectorAll('.lesson-list a');
    const contentArea = document.getElementById('lesson-content');
    const scrollContainer = document.querySelector('.content');
    let currentController = null;

    function getLessonPath(lessonId) {
        return '/courses/' + config._courseId + '/lessons/' + lessonId + '.md';
    }

    function sanitizeHTML(html) {
        if (typeof DOMPurify !== 'undefined') {
            return DOMPurify.sanitize(html);
        }
        return html
            .replace(/<script[\s\S]*?<\/script>/gi, '')
            .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
            .replace(/on\w+\s*=\s*'[^']*'/gi, '');
    }

    function renderError(message) {
        contentArea.innerHTML = '';
        const p = document.createElement('p');
        p.className = 'loading';
        p.textContent = 'Failed to load lesson: ' + message;
        contentArea.appendChild(p);
    }

    async function loadLesson(filename) {
        if (currentController) {
            currentController.abort();
        }
        currentController = new AbortController();

        try {
            contentArea.innerHTML = '<p class="loading">Loading...</p>';
            const response = await fetch(
                getLessonPath(filename),
                { signal: currentController.signal }
            );
            if (!response.ok) throw new Error('Lesson not found');
            const markdown = await response.text();

            if (typeof marked === 'undefined') {
                renderError('Markdown parser not available');
                return;
            }

            contentArea.innerHTML = sanitizeHTML(marked.parse(markdown));

            if (scrollContainer) {
                scrollContainer.scrollTop = 0;
            }

            const heading = contentArea.querySelector('h1');
            if (heading) heading.focus();
        } catch (error) {
            if (error.name === 'AbortError') return;
            renderError(error.message);
        }
    }

    function setActiveLink(clickedLink) {
        lessonLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
        clickedLink.classList.add('active');
        clickedLink.setAttribute('aria-current', 'page');
    }

    lessonLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lesson = link.getAttribute('data-lesson');
            setActiveLink(link);
            loadLesson(lesson);
        });
    });

    const firstLesson = document.querySelector('.lesson-list a.active');
    if (firstLesson) {
        setActiveLink(firstLesson);
        loadLesson(firstLesson.getAttribute('data-lesson'));
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initApp, getCourseId, renderSidebar, initLessonNavigation };
} else {
    initApp();
}
