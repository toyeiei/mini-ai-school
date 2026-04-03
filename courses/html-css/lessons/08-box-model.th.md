# Box Model

ทุก HTML element คือกล่อง Box model ควบคุมขนาดและระยะห่าง

## สี่ส่วนประกอบ

```
┌─────────────────────────────┐
│          MARGIN              │  <- ช่องว่างด้านนอก
├─────────────────────────────┤
│          BORDER             │
├─────────────────────────────┤
│         PADDING             │  <- ช่องว่างด้านใน
├─────────────────────────────┤
│                             │
│          CONTENT            │  <- ข้อความ, รูป
│                             │
└─────────────────────────────┘
```

## CSS Properties

```css
.box {
    /* ขนาดเนื้อหา */
    width: 200px;
    height: 100px;

    /* ช่องว่างด้านใน */
    padding: 20px;

    /* เส้นขอบ */
    border: 1px solid black;

    /* ช่องว่างด้านนอก */
    margin: 10px;
}
```

## Shorthand

```css
/* ทุกด้าน */
padding: 20px;

/* บน/ล่าง ซ้าย/ขวา */
padding: 10px 20px;

/* บน ขวา ล่าง ซ้าย */
padding: 10px 20px 10px 20px;
```

## Box Sizing

```css
* {
    box-sizing: border-box;
}
```

`border-box` ทำให้ `width` รวม padding และ border สบายใจกว่า!

## Display Property

```css
.block { display: block; }    /* กว้างเต็ม */
.inline { display: inline; }  /* อยู่บรรทัดเดียวกัน */
.inline-block { display: inline-block; } /* ผสม */
```

## สรุป

- Margin: ช่องว่างด้านนอก
- Border: ขอบกล่อง
- Padding: ช่องว่างด้านใน
- Content: element จริงๆ
- ใช้ `box-sizing: border-box` เพื่อความสบายใจ
