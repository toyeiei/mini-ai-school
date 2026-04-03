# MiniMax AI School

A lightweight, text-based learning platform for programming fundamentals. No build tools, no frameworks, no complexity. Just you, code, and lessons.

---

## Philosophy

### Why This Exists

We believe learning programming should feel like reading a well-written book, not wrestling with a complicated development environment.

Many online schools optimize for engagement metrics, gamification, and flashy features. We optimize for **clarity** and **focus**.

### What We Believe

**1. Text is Timeless**

Video tutorials go outdated. Interactive playgrounds break. But well-written text with clear code examples remains useful for years. Markdown files will render in any browser, any future editor, any tool.

**2. Simplicity Scales**

A school built on 50MB of JavaScript frameworks needs constant maintenance. A school built on plain HTML, CSS, and vanilla JS needs almost none. The best code is the code you don't need to write.

**3. The IDE is Your Editor**

When you learn on our platform, you're reading code that looks like real code in real editors. No sandboxed mini-editors with limited features. The code you see here is code you can copy and run anywhere.

**4. Friction is a Feature**

We don't have auto-complete hints, interactive quizzes that click for you, or progress bars that reward completion without understanding. Learning requires mental effort. We make that effort focused and achievable.

**5. The Terminal Aesthetic**

There's something honest about a dark sidebar and monospace text. It says: "This is for people who write code." We're not trying to make programming look like a mobile game. Programming is a craft, and we treat it as one.

---

## What We Built

### Features

**Landing Page**
- Clean overview of all available courses
- Course cards with descriptions and lesson counts
- Direct links to each course

**Course Pages**
- Dark sidebar (25%) with lesson navigation
- Light content area (75%) for lesson text
- Auto-generated sidebar from course configuration
- Click-to-load markdown lessons
- Syntax-highlighted code blocks (Prism.js)
- Responsive layout (desktop sidebar, mobile stacked)

**Lesson System**
- Pure markdown files with `#` headings and code blocks
- No database, no API, no backend
- Lessons fetched via `fetch()` and rendered with `marked.js`
- Graceful error handling for missing lessons
- AbortController prevents race conditions on fast navigation

**Accessibility**
- Skip-to-content link
- ARIA labels on navigation
- `aria-current="page"` for active lesson
- Focus management after lesson load
- Keyboard navigation support
- `prefers-reduced-motion` respected

**Testing**
- 53 tests covering configuration loading and app behavior
- Full DOM mock environment
- Async test support
- 100% pass rate maintained

### The Three Courses

**JavaScript Fundamentals** — Core language concepts from variables to modules

**Basic Software Engineering** — Problem-solving, algorithms, data structures, testing, DevOps

**Basic Vibe Coding** — Working with AI assistants, prompting strategies, debugging AI output

---

## Tech Stack

### Runtime Dependencies (CDN)

| Library | Purpose |
|---------|---------|
| marked.js | Markdown to HTML parsing |
| Prism.js | Syntax highlighting for code blocks |
| JetBrains Mono | Typography (Google Fonts) |

That's it. No npm packages, no build step, no transpilation.

### How It Works

```
Browser Request
       │
       ▼
HTML File (course index.html)
       │
       ├── Loads: CSS, Prism theme
       ├── Loads: marked.js, Prism.js (CDN)
       ├── Loads: app.js
       │
       ▼
app.js Reads COURSE_CONFIG (embedded JSON)
       │
       ▼
Renders Sidebar from Config
       │
       ▼
User Clicks Lesson
       │
       ▼
fetch() loads /courses/[course]/lessons/[id].md
       │
       ▼
marked.parse() converts Markdown → HTML
       │
       ▼
Prism.highlight() adds syntax colors
       │
       ▼
Content displayed in lesson area
```

### File Structure

```
school/
├── landing/
│   └── index.html              # Landing page with course cards
│
├── courses/
│   ├── javascript/
│   │   ├── index.html          # Course entry point
│   │   ├── course-config.js   # Lesson list and metadata
│   │   └── lessons/
│   │       ├── 01-intro.md
│   │       ├── 02-basics.md
│   │       └── ...             # 10 lessons total
│   │
│   ├── software-engineering/   # Same structure
│   └── vibe-coding/            # Same structure
│
├── css/
│   └── style.css               # All styles, CSS custom properties
│
├── js/
│   ├── app.js                  # Core engine (~150 lines)
│   └── tests/
│       ├── app.test.js         # 30 app tests
│       ├── config.test.js      # 23 config tests
│       ├── mocks.js            # Full DOM/fetch/marked mock
│       └── test-runner.js      # Minimal test framework
│
└── index.html                  # Legacy entry (redirects to landing)
```

---

## How We Build

### Architecture Decisions

**1. No Build Step**

Every dependency is loaded from CDN. Edit a file, refresh the browser. No webpack, no vite, no parcel. This makes the platform easy to:
- Host anywhere (static file hosting)
- Fork and modify
- Understand completely

**2. No Framework**

We use vanilla JavaScript because:
- Frameworks add abstraction that hides how things work
- Vanilla JS is universally portable
- The codebase is small enough to hold in your head
- Future developers won't need framework knowledge

**3. Course Config Pattern**

Each course has a `course-config.js` that exports the lesson list:

```javascript
var COURSE_CONFIG = {
    _courseId: "javascript",
    title: "JavaScript Fundamentals",
    lessons: [
        { id: "01-intro", title: "Introduction" },
        { id: "02-basics", title: "Basics" }
        // ...
    ]
};
```

This keeps HTML minimal while making lesson management programmatic.

**4. Markdown Lessons**

Lessons are plain `.md` files because:
- Anyone can edit them without technical knowledge
- They version-control well
- They separate content from presentation
- They work offline

**5. Security: Sanitization**

All markdown is sanitized before rendering. We strip `<script>` tags and inline event handlers. User content in markdown can't execute code.

### Development Workflow

```bash
# Start local server
cd school
python3 -m http.server 3000

# Visit
http://localhost:3000/landing/index.html

# Run tests
node js/tests/config.test.js   # 23 tests
node js/tests/app.test.js       # 30 tests
```

### Adding a New Lesson

1. Create `courses/[course]/lessons/XX-name.md`
2. Add entry to `course-config.js` lesson list
3. Refresh the page

### Adding a New Course

1. Create `courses/[new-course]/`
2. Copy `index.html` from existing course
3. Update `COURSE_CONFIG` in the copied HTML
4. Create `lessons/` directory with `.md` files
5. Add link to `landing/index.html`

---

## Design Language

### Color Palette

```css
:root {
    --bg: #fafafa;              /* Page background (light) */
    --sidebar-bg: #1a1a1a;     /* Sidebar (dark) */
    --text: #333;              /* Body text */
    --accent: #6c5ce7;         /* Links, active states (purple) */
    --accent-hover: #5a4bd1;   /* Hover state */
}
```

### Typography

- **Font**: JetBrains Mono — designed for code readability
- **Headings**: Bold, clean hierarchy
- **Body**: 1.6 line-height for comfortable reading
- **Code**: Dark background with colored tokens

### Layout

- **Desktop**: 280px sidebar + fluid content
- **Tablet**: 240px sidebar + fluid content
- **Mobile**: Stacked (sidebar above content, max 35vh)

### Interactions

- Links: Background transition on hover/focus
- Cards: Subtle lift (translateY) and shadow
- Code blocks: Horizontal scroll for overflow
- Focus states: Visible purple inset indicator

---

## Testing Philosophy

We test because:

1. **Confidence** — Know the core works before adding features
2. **Documentation** — Tests describe expected behavior
3. **Regression** — Catch bugs before they reach users

We keep tests in the same repo because:
- They're easy to run
- They evolve with the code
- They document the architecture

The test runner is ~100 lines of JavaScript. No external test framework. If it breaks, you can fix it.

---

## Why Vanilla JS?

When we started this project, we asked: "What's the minimum we need to build a useful school?"

The answer: HTML, CSS, one markdown parser, and vanilla JavaScript.

Frameworks solve problems at scale. This project doesn't need to scale. It needs to work, be understandable, and be maintainable by one person or a small team.

Vanilla JS:
- Loads fast (no framework bootstrap)
- Debug directly in browser DevTools
- No dependency on framework longevity
- Teaches how the web actually works

---

## The Future

We may add:

- Lesson progress persistence (localStorage)
- Dark/light mode toggle
- Search across lessons
- Course completion certificates
- Mobile-optimized sidebar collapse

But we'll only add what serves learning. No features for the sake of features. No gamification that rewards clicking over understanding.

---

## Contribute

This is an open learning platform. If you find an error in a lesson, fix it. If you want to add a course, create a new directory following the existing pattern.

The code is simple enough to understand completely. That's intentional.

---

*Last updated: 2026-04-03*
