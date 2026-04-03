# Repository Guidelines

## Project Overview

A lightweight, vanilla-stack online school for text-based programming lessons. Bilingual (English/Thai) with instant language switching. Zero npm dependencies — marked.js (markdown parser) is the only runtime dependency, loaded via CDN. No build step, no bundler, no transpiler.

## Project Structure

```
school/
├── index.html              # Landing page (EN/TH toggle, course cards)
├── css/
│   └── style.css           # All styles (CSS custom properties, flexbox layout)
├── js/
│   ├── app.js              # Core app logic (lesson loading, navigation, i18n)
│   ├── course-config.js    # Server-side course config utilities (tests only)
│   └── tests/
│       ├── app.test.js     # Test suite (30 tests, all app functionality)
│       ├── config.test.js  # Course config validation tests (23 tests)
│       ├── mocks.js        # DOM/fetch/marked/AbortController mocks for Node.js
│       └── test-runner.js  # Minimal test framework (describe/it/assert)
└── courses/
    ├── javascript/
    │   ├── index.html      # Course entry point (COURSE_CONFIG embedded)
    │   └── lessons/
    │       ├── 01-intro.md      # English lesson
    │       ├── 01-intro.th.md   # Thai translation
    │       └── ...               # 10 EN + 10 TH per course
    ├── html-css/
    ├── git-github/
    ├── api-basics/
    ├── software-engineering/
    ├── database/
    ├── vibe-coding/
    └── data-science/
```

All 8 courses follow the same structure. Each has 10 lessons in English (`.md`) and Thai (`.th.md`).

## Development Commands

```bash
# Run all tests (53 total: 30 app + 23 config)
node js/tests/app.test.js
node js/tests/config.test.js

# Serve locally (any static file server)
python3 -m http.server 8000 --directory school
```

No `npm install` is required. Tests run with raw Node.js.

## Adding a New Lesson

1. Create `courses/[course]/lessons/NN-name.md` with `# Title` as the first line
2. Create the Thai translation `courses/[course]/lessons/NN-name.th.md`
3. Add entry to `COURSE_CONFIG` in the course's `index.html`:
   ```javascript
   { id: "NN-name", title: "Display Name" }
   ```
4. Keep two-digit numbering sequential

## Adding a New Course

1. Create `courses/[new-course]/` directory
2. Copy `index.html` from an existing course (e.g. `javascript/index.html`)
3. Update `COURSE_CONFIG` in the copied HTML with `_courseId`, `title`, and `lessons` array
4. Create `lessons/` directory with `.md` (English) and `.th.md` (Thai) files
5. Add a course card link to the landing page `index.html`

## Bilingual System

### Landing Page (index.html)
- Uses `data-en` and `data-th` attributes on translatable elements
- Toggle swaps text instantly via DOM — zero network requests

### Course Pages (app.js)
- In-memory `lessonCache` stores fetched markdown for instant re-rendering
- `preloadAlternateLang()` fetches the other language in the background after each lesson load
- Language preference persisted in `localStorage` (`preferred_lang`)
- Falls back to English if Thai translation is missing (graceful degradation)

## Coding Style

- **Indentation**: 4 spaces everywhere (JS, CSS, HTML)
- **Quotes**: Single quotes for strings; backticks for template literals
- **Semicolons**: Always
- **Variables**: `const` by default; `let` only when reassignment is needed
- **Functions**: camelCase (`loadLessonById`, `setActiveLink`, `preloadAlternateLang`)
- **CSS classes/properties**: kebab-case (`--sidebar-bg`, `lesson-list`, `lang-toggle`)
- **No module system**: Global scope; `app.js` wraps core init in a `DOMContentLoaded` listener
- **Language files**: English `NN-name.md`, Thai `NN-name.th.md` — same directory, same name convention

## Testing

- **Framework**: Custom minimal runner (`TestRunner.describe/it`)
- **Assertions**: `assert`, `assertEqual`, `assertIncludes`
- **Mocks**: Full DOM mock in `js/tests/mocks.js` — stubs `document`, `fetch`, `marked`, `AbortController`, `localStorage`
- **Cache clearing**: `setupMocks()` calls `clearLessonCache()` between tests
- **Window proxy**: Mock `window` uses `Proxy` to forward `window.COURSE_CONFIG` to `global.COURSE_CONFIG`
- **Async tests**: Use `await new Promise(r => setTimeout(r, 10))` to flush microtasks
- **Run**: `node js/tests/app.test.js` — exits 0 on pass, 1 on failure
- **Coverage requirement**: 85%+ — currently at 100% (30/30 app tests, 23/23 config tests)

## Test Naming

```
TestRunner.describe('Feature area', () => {
    TestRunner.it('should do expected behavior', () => { ... });
});
```

Describe blocks group by feature. Test names start with `should`.

## Commit Messages

Use conventional style:

```
feat: add Thai translations for database course
fix: handle missing Thai lesson fallback gracefully
test: add cache clearing between tests
i18n: add instant EN/TH toggle to landing page
```

## Architecture Notes

- **SPA-like**: Sidebar navigation + content panel; no routing library
- **Content loading**: `fetch()` loads `.md` or `.th.md` files, `marked.parse()` renders to HTML
- **Caching**: In-memory `lessonCache` keyed by `lessonId:lang` for instant language switching
- **Preloading**: Alternate language fetched in background after each lesson load
- **Language toggle**: Sidebar EN/TH buttons + landing page toggle; persisted in `localStorage`
- **Active state**: Toggling `.active` class on sidebar links
- **Responsive**: Flexbox layout; sidebar stacks above content below 768px
- **Font**: JetBrains Mono (Google Fonts CDN)
- **Deployment**: Cloudflare Pages (static site, no server)
