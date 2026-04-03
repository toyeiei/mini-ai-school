# Box Model

ทุก HTML element คือกล่อง Box model ควบคุมขนาดและระยะห่าง

## สี่ส่วนประกอบ

```css
┌─────────────────────────────┐
│          MARGIN              │  <- Space outside
├─────────────────────────────┤
│          BORDER             │
├─────────────────────────────┤
│         PADDING             │  <- Space inside
├─────────────────────────────┤
│                             │
│          CONTENT            │  <- Text, images
│                             │
└─────────────────────────────┘
```

## CSS Properties

```css
.box {
    /* Content size */
    width: 200px;
    height: 100px;

    /* Inside spacing */
    padding: 20px;

    /* Border */
    border: 1px solid black;

    /* Outside spacing */
    margin: 10px;
}
```

## Shorthand

```css
/* All sides */
padding: 20px;

/* Top/bottom left/right */
padding: 10px 20px;

/* Top right bottom left */
padding: 10px 20px 10px 20px;
```

## Box Sizing

```
* {
    box-sizing: border-box;
}
```

`border-box` ทำให้ `width` รวม padding และ border สบายใจกว่า!

## Display Property

```css
.block { display: block; }    /* Full width */
.inline { display: inline; }  /* Same line */
.inline-block { display: inline-block; } /* Hybrid */
```

## สรุป

- Margin: ช่องว่างด้านนอก
- Border: ขอบกล่อง
- Padding: ช่องว่างด้านใน
- Content: element จริงๆ
- ใช้ `box-sizing: border-box` เพื่อความสบายใจ
