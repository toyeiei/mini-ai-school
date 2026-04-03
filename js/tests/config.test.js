// Run: node js/tests/config.test.js

const { TestRunner, assert, assertEqual, assertIncludes } = require('./test-runner');
const { loadCourseConfig, buildSidebarHTML, getLessonPath, validateConfig } = require('../course-config');

async function wait(ms) {
    return new Promise(r => setTimeout(r, ms || 10));
}

// --- Config loading tests ---

TestRunner.describe('loadCourseConfig', () => {
    TestRunner.it('should load a valid course config', () => {
        const config = loadCourseConfig('javascript');
        assert(config !== null, 'Config should not be null');
        assertEqual(config.title, 'JavaScript Fundamentals');
    });

    TestRunner.it('should load lesson list from config', () => {
        const config = loadCourseConfig('javascript');
        assert(Array.isArray(config.lessons), 'Lessons should be an array');
        assert(config.lessons.length >= 1, 'Should have at least one lesson');
    });

    TestRunner.it('should load lesson id and title from each lesson', () => {
        const config = loadCourseConfig('javascript');
        const first = config.lessons[0];
        assert(first.id !== undefined, 'Lesson should have id');
        assert(first.title !== undefined, 'Lesson should have title');
    });

    TestRunner.it('should return null for non-existent course', () => {
        const config = loadCourseConfig('nonexistent');
        assertEqual(config, null);
    });

    TestRunner.it('should load software-engineering course', () => {
        const config = loadCourseConfig('software-engineering');
        assert(config !== null, 'Config should not be null');
        assertEqual(config.title, 'Basic Software Engineering');
    });

    TestRunner.it('should load vibe-coding course', () => {
        const config = loadCourseConfig('vibe-coding');
        assert(config !== null, 'Config should not be null');
        assertEqual(config.title, 'Basic Vibe Coding');
    });
});

TestRunner.describe('validateConfig', () => {
    TestRunner.it('should pass for valid config', () => {
        const config = {
            title: 'Test Course',
            lessons: [{ id: '01-test', title: 'Test Lesson' }]
        };
        const result = validateConfig(config);
        assertEqual(result.valid, true);
    });

    TestRunner.it('should fail if title is missing', () => {
        const config = { lessons: [{ id: '01', title: 'Test' }] };
        const result = validateConfig(config);
        assertEqual(result.valid, false);
        assertIncludes(result.errors[0], 'title');
    });

    TestRunner.it('should fail if lessons is empty', () => {
        const config = { title: 'Test', lessons: [] };
        const result = validateConfig(config);
        assertEqual(result.valid, false);
        assertIncludes(result.errors[0], 'lessons');
    });

    TestRunner.it('should fail if lesson id is missing', () => {
        const config = { title: 'Test', lessons: [{ title: 'No ID' }] };
        const result = validateConfig(config);
        assertEqual(result.valid, false);
        assertIncludes(result.errors[0], 'id');
    });

    TestRunner.it('should fail if lesson title is missing', () => {
        const config = { title: 'Test', lessons: [{ id: '01' }] };
        const result = validateConfig(config);
        assertEqual(result.valid, false);
        assertIncludes(result.errors[0], 'title');
    });
});

TestRunner.describe('buildSidebarHTML', () => {
    TestRunner.it('should generate correct number of list items', () => {
        const config = {
            title: 'Test',
            lessons: [
                { id: '01-a', title: 'First' },
                { id: '02-b', title: 'Second' },
                { id: '03-c', title: 'Third' }
            ]
        };
        const html = buildSidebarHTML(config);
        assertIncludes(html, '01. First');
        assertIncludes(html, '02. Second');
        assertIncludes(html, '03. Third');
    });

    TestRunner.it('should set first link as active', () => {
        const config = {
            title: 'Test',
            lessons: [{ id: '01-a', title: 'First' }]
        };
        const html = buildSidebarHTML(config);
        assertIncludes(html, 'class="active"');
        assertIncludes(html, 'aria-current="page"');
    });

    TestRunner.it('should use hash-based hrefs', () => {
        const config = {
            title: 'Test',
            lessons: [{ id: '01-intro', title: 'Intro' }]
        };
        const html = buildSidebarHTML(config);
        assertIncludes(html, 'href="#01-intro"');
    });

    TestRunner.it('should set data-lesson attribute', () => {
        const config = {
            title: 'Test',
            lessons: [{ id: '01-intro', title: 'Intro' }]
        };
        const html = buildSidebarHTML(config);
        assertIncludes(html, 'data-lesson="01-intro"');
    });

    TestRunner.it('should include course title in header', () => {
        const config = {
            title: 'My Course',
            lessons: [{ id: '01-a', title: 'First' }]
        };
        const html = buildSidebarHTML(config);
        assertIncludes(html, 'My Course');
    });
});

TestRunner.describe('getLessonPath', () => {
    TestRunner.it('should return correct path for a lesson', () => {
        assertEqual(getLessonPath('javascript', '01-intro'), 'courses/javascript/lessons/01-intro.md');
    });

    TestRunner.it('should return correct path for different courses', () => {
        assertEqual(getLessonPath('vibe-coding', '03-prompts'), 'courses/vibe-coding/lessons/03-prompts.md');
    });

    TestRunner.it('should handle lesson ids with hyphens', () => {
        assertEqual(getLessonPath('se', '10-best-practices'), 'courses/se/lessons/10-best-practices.md');
    });
});

TestRunner.describe('course configs - all courses valid', () => {
    TestRunner.it('javascript course should be valid', () => {
        const config = loadCourseConfig('javascript');
        const result = validateConfig(config);
        assertEqual(result.valid, true);
    });

    TestRunner.it('software-engineering course should have 10 lessons', () => {
        const config = loadCourseConfig('software-engineering');
        assertEqual(config.lessons.length, 10);
    });

    TestRunner.it('vibe-coding course should have 10 lessons', () => {
        const config = loadCourseConfig('vibe-coding');
        assertEqual(config.lessons.length, 10);
    });

    TestRunner.it('javascript course should have 10 lessons', () => {
        const config = loadCourseConfig('javascript');
        assertEqual(config.lessons.length, 10);
    });
});

TestRunner.runAll().then(success => {
    process.exit(success ? 0 : 1);
});
