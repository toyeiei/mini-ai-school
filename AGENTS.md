# Repository Guidelines

## Project Overview

A lightweight, vanilla-stack online school for text-based programming lessons. Zero npm dependencies — marked.js (markdown parser) is the only runtime dependency, loaded via CDN. No build step, no bundler, no transpiler.

## Project Structure

```
school/
├── index.html              # Main entry point
├── css/
│   └── style.css           # All styles (CSS custom properties, flexbox layout)
├── js/
│   ├── app.js              # Core app logic (lesson loading, navigation)
│   └── tests/
│       ├── app.test.js     # Test suite (21 tests, all app functionality)
│       ├── mocks.js        # DOM/fetch/marked mocks for Node.js
│       └── test-runner.js  # Minimal test framework (describe/it/assert)
└── lessons/
    ├── 01-intro.md         # Lessons are plain markdown files
    ├── 02-basics.md        # Naming: NN-kebab-case.md
    └── ...                 # Two-digit sequential numbering
```

## Development Commands

```bash
# Run all tests
node js/tests/app.test.js

# Serve locally (any static file server)
python3 -m http.server 8000 --directory school
```

No `npm install` is required. Tests run with raw Node.js.

## Adding a New Lesson

1. Create `lessons/NN-name.md` with `# Title` as the first line
2. Add a sidebar entry in `index.html`:
   ```html
   <li><a href="#" data-lesson="NN-name">NN. Display Name</a></li>
   ```
3. Keep two-digit numbering sequential

## Coding Style

- **Indentation**: 4 spaces everywhere (JS, CSS, HTML)
- **Quotes**: Single quotes for strings; backticks for template literals
- **Semicolons**: Always
- **Variables**: `const` by default; `let` only when reassignment is needed
- **Functions**: camelCase (`loadLesson`, `setActiveLink`)
- **CSS classes/properties**: kebab-case (`--sidebar-bg`, `lesson-list`)
- **No module system**: Global scope; `app.js` wraps everything in a `DOMContentLoaded` listener

## Testing

- **Framework**: Custom minimal runner (`TestRunner.describe/it`)
- **Assertions**: `assert`, `assertEqual`, `assertIncludes`
- **Mocks**: Full DOM mock in `js/tests/mocks.js` — stubs `document`, `fetch`, `marked`
- **Async tests**: Use `await new Promise(r => setTimeout(r, 10))` to flush microtasks
- **Run**: `node js/tests/app.test.js` — exits 0 on pass, 1 on failure
- **Coverage requirement**: 85%+ — currently at 100% (21/21 tests)

## Test Naming

```
TestRunner.describe('Feature area', () => {
    TestRunner.it('should do expected behavior', () => { ... });
});
```

Describe blocks group by feature. Test names start with `should`.

## Commit Messages

No commit history exists yet. Use conventional style:

```
feat: add new lesson on closures
fix: handle missing markdown files gracefully
test: add edge case tests for loadLesson
```

## Architecture Notes

- **SPA-like**: Sidebar navigation + content panel; no routing library
- **Content loading**: `fetch()` loads `.md` files, `marked.parse()` renders to HTML
- **Active state**: Toggling `.active` class on sidebar links
- **Responsive**: Flexbox layout; sidebar stacks above content below 768px
- **Font**: JetBrains Mono (Google Fonts CDN)
