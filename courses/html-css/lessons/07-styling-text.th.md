# การตกแต่งข้อความ

CSS ให้คุณควบคุม typography ได้อย่างละเอียด

## Font Properties

```css
.article {
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
}
```

## Text Properties

```css
.heading {
    color: #333;
    text-align: center;
    text-decoration: underline;
    line-height: 1.5;
    letter-spacing: 2px;
}
```

## Google Fonts

```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
```

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

## ค่าสี

```css
/* Named colors */
color: red;

/* Hex codes */
color: #ff0000;
color: #f00;  /* Short form */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);
```

## Text Shadow

```css
.title {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
```

## สรุป

- `font-family`, `font-size`, `font-weight` ควบคุมฟอนต์
- `text-align`, `text-decoration`, `line-height` สำหรับข้อความ
- สี: ชื่อ, hex, RGB
- Google Fonts ฟรีและใช้ง่าย
