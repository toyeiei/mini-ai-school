# CSS Basics

CSS (Cascading Style Sheets) styles your HTML. It controls colors, fonts, spacing, and layout.

## Adding CSS

```html
<!-- External CSS (recommended) -->
<link rel="stylesheet" href="style.css">

<!-- Internal CSS -->
<style>
    p { color: blue; }
</style>

<!-- Inline CSS -->
<p style="color: blue;">Text</p>
```

## CSS Syntax

```css
selector {
    property: value;
}
```

Example:
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

## Common Properties

```css
/* Colors */
color: blue;
background-color: #f0f0f0;

/* Text */
font-size: 16px;
font-family: Arial, sans-serif;
text-align: center;

/* Spacing */
margin: 10px;
padding: 20px;
```

## Selectors

```css
h1 { }           /* Element selector */
.title { }       /* Class selector */
#header { }      /* ID selector */
```

```html
<h1 class="title">Hello</h1>
<div id="header">Header</div>
```

## Class vs ID

| | Class | ID |
|--|-------|-----|
| Syntax | `.name` | `#name` |
| Use | Many elements | One element |
| Reuse | Yes | Unique |

## Summary

- CSS styles HTML elements
- `selector { property: value; }`
- Classes can be reused, IDs are unique
- External CSS files are best practice
