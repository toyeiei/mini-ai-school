# Layout

CSS layout ควบคุมตำแหน่ง elements บนหน้า

## Flexbox

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

## Flex Properties

```css
.flex-container {
    display: flex;
    flex-direction: row;      /* หรือ column */
    gap: 20px;                /* ช่องว่างระหว่าง items */
    justify-content: center;  /* แกนหลัก */
    align-items: center;      /* แกนขวาง */
}
```

## Flex Item Control

```css
.item {
    flex-grow: 1;   /* ขยายเติมพื้นที่ */
    flex-shrink: 0; /* ไม่ย่อ */
    flex-basis: 200px; /* ขนาดเริ่มต้น */
}
```

## การจัดกลางง่ายๆ

```css
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

## Patterns ที่ใช้บ่อย

### Navigation Bar

```css
nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
}
```

### Card Grid

```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px;
}
```

## สรุป

- `display: flex` สร้าง flex container
- `justify-content` ขยับ items แนวนอน
- `align-items` ขยับ items แนวตั้ง
- `gap` เพิ่มช่องว่างระหว่าง items
