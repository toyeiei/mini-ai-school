# CSS พื้นฐาน

CSS (Cascading Style Sheets) ตกแต่ง HTML ของคุณ ควบคุมสี, ฟอนต์, ระยะห่าง, และ layout

## การเพิ่ม CSS

```html
<!-- External CSS (แนะนำ) -->
<link rel="stylesheet" href="style.css">

<!-- Internal CSS -->
<style>
    p { color: blue; }
</style>

<!-- Inline CSS -->
<p style="color: blue;">ข้อความ</p>
```

## CSS Syntax

```css
selector {
    property: value;
}
```

ตัวอย่าง:
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

## Properties ที่ใช้บ่อย

```css
/* สี */
color: blue;
background-color: #f0f0f0;

/* ข้อความ */
font-size: 16px;
font-family: Arial, sans-serif;
text-align: center;

/* ระยะห่าง */
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
<h1 class="title">สวัสดี</h1>
<div id="header">ส่วนหัว</div>
```

## Class vs ID

| | Class | ID |
|--|-------|-----|
| Syntax | `.name` | `#name` |
| ใช้กับ | หลาย elements | หนึ่ง element |
| ใช้ซ้ำ | ได้ | ไม่ได้ |

## สรุป

- CSS ตกแต่ง HTML elements
- `selector { property: value; }`
- Classes ใช้ซ้ำได้, IDs ไม่ซ้ำ
- External CSS files ดีที่สุด
