# Links & Images

Links เชื่อมต่อหน้าเว็บ Images เพิ่มเนื้อหาภาพ

## Links (Anchor Tags)

```html
<!-- Link ไปหน้าอื่น -->
<a href="about.html">เกี่ยวกับเรา</a>

<!-- Link ไปเว็บภายนอก -->
<a href="https://google.com">Google</a>

<!-- เปิด Tab ใหม่ -->
<a href="https://google.com" target="_blank">Google</a>
```

## Images

```html
<img src="photo.jpg" alt="คำอธิบายรูป">
```

Attributes:
- `src` - ที่อยู่ไฟล์รูป
- `alt` - คำอธิบายสำหรับ accessibility

## รูปแบบรูปภาพ

| รูปแบบ | ใช้เมื่อ |
|--------|----------|
| JPEG | รูปถ่าย (ไฟล์เล็ก) |
| PNG | กราฟิก, transparency |
| SVG | ไอคอน, โลโก้ (ขยายได้) |
| GIF | Animation ง่ายๆ |

## โครงสร้างโฟลเดอร์

```
my-site/
├── index.html
├── about.html
└── images/
    └── photo.jpg
```

```html
<a href="about.html">เกี่ยวกับ</a>
<img src="images/photo.jpg" alt="รูป">
```

## Alt Text

เขียน alt text ที่อธิบายชัดเจน:

```html
<!-- ดี -->
<img src="cat.jpg" alt="แมวส้มนอนบนโซฟา">

<!-- ไม่ดี -->
<img src="cat.jpg" alt="แมว">
```

## สรุป

- `<a>` สร้างลิงก์, `href` ระบุปลายทาง
- `<img>` แสดงรูป, ต้องมี `alt`
- ใช้ relative paths สำหรับไฟล์ในเครื่อง
- Alt text ช่วย accessibility
