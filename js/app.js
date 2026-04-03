// Language management
const LANG_STORAGE_KEY = 'preferred_lang';
const DEFAULT_LANG = 'en';

// In-memory cache for instant language switching
const lessonCache = {};

function clearLessonCache() {
    Object.keys(lessonCache).forEach(k => delete lessonCache[k]);
}

function getCurrentLang() {
    try {
        return localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
    } catch {
        return DEFAULT_LANG;
    }
}

function setCurrentLang(lang) {
    try {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
        // localStorage not available
    }
}

function toggleLang() {
    const current = getCurrentLang();
    const newLang = current === 'en' ? 'th' : 'en';
    setCurrentLang(newLang);
    return newLang;
}

// Get lesson path based on current language
function getLessonPath(lessonId, lang) {
    const courseId = window.COURSE_CONFIG?._courseId || getCourseId();
    if (lang === 'th') {
        return '/courses/' + courseId + '/lessons/' + lessonId + '.th.md';
    }
    return '/courses/' + courseId + '/lessons/' + lessonId + '.md';
}

// Preload the alternate language version in the background
function preloadAlternateLang(lessonId, currentLang) {
    const altLang = currentLang === 'en' ? 'th' : 'en';
    const cacheKey = lessonId + ':' + altLang;
    if (lessonCache[cacheKey]) return;

    const controller = new AbortController();
    fetch(getLessonPath(lessonId, altLang), { signal: controller.signal })
        .then(res => {
            if (res.ok) return res.text();
            throw new Error('Not found');
        })
        .then(md => { lessonCache[cacheKey] = md; })
        .catch(() => { /* alternate lang not available or aborted, that's ok */ });
}

function initApp() {
    function init() {
        // Configure marked for Prism integration (marked v15 API)
        if (typeof marked !== 'undefined' && typeof Prism !== 'undefined') {
            marked.use({
                renderer: {
                    code: function(token) {
                        const code = token.text || token;
                        const lang = token.lang || 'javascript';
                        let highlighted = code;
                        if (Prism.languages[lang]) {
                            highlighted = Prism.highlight(code, Prism.languages[lang], lang);
                        }
                        return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + highlighted + '</code></pre>';
                    }
                }
            });
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
    // Clear existing content
    while (sidebarEl.firstChild) {
        sidebarEl.removeChild(sidebarEl.firstChild);
    }

    // Home button
    const homeLink = document.createElement('a');
    homeLink.href = '/index.html';
    homeLink.className = 'sidebar-home';
    homeLink.setAttribute('aria-label', 'Back to course list');
    homeLink.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>';
    sidebarEl.appendChild(homeLink);

    // Language toggle (buttons rendered here, event listeners bound in initLessonNavigation)
    const langToggle = document.createElement('div');
    langToggle.className = 'lang-toggle';
    const currentLang = getCurrentLang();
    langToggle.innerHTML = `
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        <span class="lang-sep">|</span>
        <button class="lang-btn ${currentLang === 'th' ? 'active' : ''}" data-lang="th">TH</button>
    `;
    langToggle.id = 'lang-toggle';
    sidebarEl.appendChild(langToggle);

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
    let currentLang = getCurrentLang();

    // Lesson completion tracking
    function getStorageKey() {
        return 'completed_lessons_' + config._courseId;
    }

    function getCompletedLessons() {
        try {
            return JSON.parse(localStorage.getItem(getStorageKey()) || '[]');
        } catch {
            return [];
        }
    }

    function markLessonComplete(lessonId) {
        const completed = getCompletedLessons();
        if (!completed.includes(lessonId)) {
            completed.push(lessonId);
            localStorage.setItem(getStorageKey(), JSON.stringify(completed));
        }
        updateLessonCompletionUI();
        checkCourseCompletion();
    }

    function isLessonComplete(lessonId) {
        return getCompletedLessons().includes(lessonId);
    }

    function updateLessonCompletionUI() {
        const completed = getCompletedLessons();
        lessonLinks.forEach(link => {
            const lessonId = link.getAttribute('data-lesson');
            if (completed.includes(lessonId)) {
                link.classList.add('completed');
            }
        });
    }

    function checkCourseCompletion() {
        const totalLessons = config.lessons.length;
        const completed = getCompletedLessons().length;
        if (completed >= totalLessons) {
            showCertificateButton();
        }
    }

    function showCertificateButton() {
        const existingBtn = document.querySelector('.certificate-btn');
        if (existingBtn) return;

        const btn = document.createElement('button');
        btn.className = 'certificate-btn';
        btn.textContent = 'Get Certificate';
        btn.addEventListener('click', () => openCertificateModal(config));
        document.querySelector('.sidebar').appendChild(btn);
    }

    function openCertificateModal(config) {
        const modal = document.createElement('div');
        modal.className = 'certificate-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <button class="modal-close" aria-label="Close">&times;</button>
                <h2>Get Your Certificate</h2>
                <p>Enter your name to generate your certificate of completion.</p>
                <input type="text" class="name-input" placeholder="Your full name" maxlength="50" />
                <button class="generate-btn">Generate Certificate</button>
            </div>
        `;
        document.body.appendChild(modal);

        const backdrop = modal.querySelector('.modal-backdrop');
        const closeBtn = modal.querySelector('.modal-close');
        const nameInput = modal.querySelector('.name-input');
        const generateBtn = modal.querySelector('.generate-btn');

        function closeModal() {
            modal.remove();
        }

        backdrop.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);

        generateBtn.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if (name.length < 2) {
                nameInput.focus();
                return;
            }
            closeModal();
            generateCertificate(config, name);
        });

        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') generateBtn.click();
        });

        nameInput.focus();
    }

    function generateCertificate(config, studentName) {
        const safeName = studentName
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');

        const completionDate = new Date().toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });

        const certId = Math.random().toString(36).substring(2, 10).toUpperCase();

        const certHTML = `
            <div class="certificate-wrapper">
                <div id="confetti"></div>
                <div class="certificate" id="certificate">
                    <div class="cert-header">
                        <div class="cert-logo">Mini AI School</div>
                        <div class="cert-title">Certificate of Completion</div>
                    </div>
                    <div class="cert-body">
                        <p class="cert-presents">This certifies that</p>
                        <h1 class="cert-name">${safeName}</h1>
                        <p class="cert-completes">has successfully completed</p>
                        <h2 class="cert-course">${config.title}</h2>
                        <p class="cert-meta">${config.lessons.length} lessons &bull; ${completionDate}</p>
                        <p class="cert-id">Certificate ID: ${certId}</p>
                    </div>
                    <div class="cert-footer">
                        <div class="cert-marketing">Free knowledge. Real skills. No fluff.</div>
                        <div class="cert-school">Mini AI School</div>
                    </div>
                </div>
                <div class="cert-actions">
                    <button class="print-btn" onclick="window.print()">Print / Save PDF</button>
                    <button class="close-btn" onclick="document.querySelector('.cert-overlay').remove()">Close</button>
                </div>
            </div>
        `;

        const overlay = document.createElement('div');
        overlay.className = 'cert-overlay';
        overlay.innerHTML = certHTML;
        document.body.appendChild(overlay);

        setTimeout(() => launchConfetti(), 100);
    }

    function launchConfetti() {
        const confettiContainer = document.getElementById('confetti');
        if (!confettiContainer) return;

        const colors = ['#6c5ce7', '#f8f8f2', '#569cd6', '#ce9178', '#6a9955', '#dcdcaa'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
        }
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

    // Load lesson with language support, cache, and fallback
    async function loadLessonById(lessonId, lang) {
        if (currentController) {
            currentController.abort();
        }
        currentController = new AbortController();
        currentLang = lang || getCurrentLang();

        try {
            const cacheKey = lessonId + ':' + currentLang;

            // Check cache first for instant rendering
            if (lessonCache[cacheKey]) {
                renderMarkdown(lessonCache[cacheKey], lessonId);
                preloadAlternateLang(lessonId, currentLang);
                return;
            }

            contentArea.innerHTML = '<p class="loading">Loading...</p>';

            // Try requested language
            let path = getLessonPath(lessonId, currentLang);
            let response = await fetch(path, { signal: currentController.signal });

            // Fallback to English if Thai not found
            if (!response.ok && currentLang === 'th') {
                path = getLessonPath(lessonId, 'en');
                response = await fetch(path, { signal: currentController.signal });
            }

            if (!response.ok) throw new Error('Lesson not found');
            const markdown = await response.text();

            // Store in cache
            lessonCache[cacheKey] = markdown;

            renderMarkdown(markdown, lessonId);

            // Preload alternate language for instant toggle
            preloadAlternateLang(lessonId, currentLang);
        } catch (error) {
            if (error.name === 'AbortError') return;
            renderError(error.message);
        }
    }

    function renderMarkdown(markdown, lessonId) {
        if (typeof marked === 'undefined') {
            renderError('Markdown parser not available');
            return;
        }

        contentArea.innerHTML = sanitizeHTML(marked.parse(markdown));
        markLessonComplete(lessonId);

        if (scrollContainer) {
            scrollContainer.scrollTop = 0;
        }

        const heading = contentArea.querySelector('h1');
        if (heading) heading.focus();
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
            loadLessonById(lesson, getCurrentLang());
        });
    });

    // Bind language toggle event listeners (must be here to access loadLessonById)
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clickedBtn = e.target.closest('.lang-btn');
                if (!clickedBtn) return;
                const newLang = clickedBtn.dataset.lang;
                setCurrentLang(newLang);
                langToggle.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                clickedBtn.classList.add('active');
                const activeLink = document.querySelector('.lesson-list a.active');
                if (activeLink) {
                    const lessonId = activeLink.getAttribute('data-lesson');
                    loadLessonById(lessonId, newLang);
                }
            });
        });
    }

    // Initialize UI
    updateLessonCompletionUI();
    checkCourseCompletion();

    const firstLesson = document.querySelector('.lesson-list a.active');
    if (firstLesson) {
        setActiveLink(firstLesson);
        loadLessonById(firstLesson.getAttribute('data-lesson'), getCurrentLang());
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initApp, getCourseId, renderSidebar, initLessonNavigation, getCurrentLang, setCurrentLang, toggleLang, clearLessonCache };
} else {
    initApp();
}
