# HTML Elements

HTML elements คือส่วนประกอบของหน้าเว็บ แต่ละ element มี opening tag, เนื้อหา, และ usually closing tag

## Elements ที่ใช้บ่อย

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
| ขึ้นบรรทัดใหม่ | อยู่บรรทัดเดียวกัน |
| ใช้ความกว้างทั้งหมด | ใช้ความกว้างเท่าที่ต้องการ |
| `<p>`, `<h1>`, `<div>` | `<span>`, `<a>`, `<strong>` |

## การซ้อน Elements

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

Semantic elements อธิบายความหมาย ช่วย accessibility และ SEO

## สรุป

- Elements มี opening และ closing tags
- Block elements ขึ้นบรรทัดใหม่
- Inline elements อยู่ใน flow
- ใช้ semantic elements เพื่อความชัดเจน
