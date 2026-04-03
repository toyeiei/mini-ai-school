const path = require('path');

function loadCourseConfig(courseId) {
    try {
        const configPath = path.join(__dirname, '..', 'courses', courseId, 'course-config.js');
        delete require.cache[require.resolve(configPath)];
        return require(configPath);
    } catch (e) {
        return null;
    }
}

function validateConfig(config) {
    const errors = [];

    if (!config) {
        errors.push('Config is null or undefined');
        return { valid: false, errors };
    }

    if (!config.title || typeof config.title !== 'string') {
        errors.push('Missing or invalid "title"');
    }

    if (!Array.isArray(config.lessons) || config.lessons.length === 0) {
        errors.push('Missing or empty "lessons" array');
    } else {
        config.lessons.forEach((lesson, i) => {
            if (!lesson.id || typeof lesson.id !== 'string') {
                errors.push(`Lesson ${i}: missing or invalid "id"`);
            }
            if (!lesson.title || typeof lesson.title !== 'string') {
                errors.push(`Lesson ${i}: missing or invalid "title"`);
            }
        });
    }

    return { valid: errors.length === 0, errors };
}

function buildSidebarHTML(config) {
    if (!config || !config.lessons) return '';

    let items = config.lessons.map((lesson, i) => {
        const num = String(i + 1).padStart(2, '0');
        const isActive = i === 0 ? ' class="active" aria-current="page"' : '';
        return `                    <li><a href="#${lesson.id}" data-lesson="${lesson.id}"${isActive}>${num}. ${lesson.title}</a></li>`;
    }).join('\n');

    return `<header class="sidebar-header">
                <h1>${config.title}</h1>
            </header>
            <nav class="lesson-list" aria-label="Lesson navigation">
                <ul>
${items}
                </ul>
            </nav>`;
}

function getLessonPath(courseId, lessonId) {
    return `courses/${courseId}/lessons/${lessonId}.md`;
}

module.exports = { loadCourseConfig, validateConfig, buildSidebarHTML, getLessonPath };
