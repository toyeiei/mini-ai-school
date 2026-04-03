# HTML Elements

HTML elements are the building blocks of web pages. Each element has an opening tag, content, and usually a closing tag.

## Common Elements

```html
<!-- Headings -->
<h1>Main Title</h1>
<h2>Subtitle</h2>

<!-- Paragraph -->
<p>This is a paragraph of text.</p>

<!-- Bold and Italic -->
<p><strong>Important</strong> text here.</p>
<p><em>Emphasized</em> text here.</p>

<!-- Lists -->
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>
```

## Block vs Inline

| Block | Inline |
|-------|--------|
| Starts on new line | Same line |
| Takes full width | Only needed width |
| `<p>`, `<h1>`, `<div>` | `<span>`, `<a>`, `<strong>` |

## Nesting Elements

```html
<div>
    <h2>Title</h2>
    <p>Paragraph with <strong>bold</strong> text.</p>
</div>
```

## Semantic Elements

```html
<header>Site header</header>
<nav>Navigation links</nav>
<main>Main content</main>
<footer>Site footer</footer>
```

Semantic elements describe their meaning, helping accessibility and SEO.

## Summary

- Elements have opening and closing tags
- Block elements start new lines
- Inline elements stay in flow
- Use semantic elements for clarity
