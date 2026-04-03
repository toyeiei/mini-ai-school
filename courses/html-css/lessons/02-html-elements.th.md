# HTML Elements

HTML elements คือส่วนประกอบของหน้าเว็บ แต่ละ element มี opening tag, เนื้อหา, และ usually closing tag

## Elements ที่ใช้บ่อย

```html
<!-- หัวข้อ -->
<h1>หัวข้อหลัก</h1>
<h2>หัวข้อรอง</h2>

<!-- ย่อหน้า -->
<p>นี่คือย่อหน้าข้อความ</p>

<!-- ตัวหนาและตัวเอียง -->
<p><strong>สำคัญ</strong> ข้อความตรงนี้</p>
<p><em>เน้น</em> ข้อความตรงนี้</p>

<!-- รายการ -->
<ul>
    <li>รายการแรก</li>
    <li>รายการที่สอง</li>
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
    <h2>หัวข้อ</h2>
    <p>ย่อหน้าที่มี <strong>ตัวหนา</strong></p>
</div>
```

## Semantic Elements

```html
<header>ส่วนหัวเว็บ</header>
<nav>ลิงก์นำทาง</nav>
<main>เนื้อหาหลัก</main>
<footer>ส่วนท้ายเว็บ</footer>
```

Semantic elements อธิบายความหมาย ช่วย accessibility และ SEO

## สรุป

- Elements มี opening และ closing tags
- Block elements ขึ้นบรรทัดใหม่
- Inline elements อยู่ใน flow
- ใช้ semantic elements เพื่อความชัดเจน
