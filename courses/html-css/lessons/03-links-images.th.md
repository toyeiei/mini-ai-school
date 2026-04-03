# Links & Images

Links เชื่อมต่อหน้าเว็บ Images เพิ่มเนื้อหาภาพ

## Links (Anchor Tags)

```html
<!-- Link to another page -->
<a href="about.html">About Us</a>

<!-- Link to external site -->
<a href="https://google.com">Google</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank">Google</a>
```

## Images

```html
<img src="photo.jpg" alt="Description of photo">
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

```html
my-site/
├── index.html
├── about.html
└── images/
    └── photo.jpg
```

```html
<a href="about.html">About</a>
<img src="images/photo.jpg" alt="Photo">
```

## Alt Text

เขียน alt text ที่อธิบายชัดเจน:

```html
<!-- Good -->
<img src="cat.jpg" alt="Orange cat sleeping on a couch">

<!-- Bad -->
<img src="cat.jpg" alt="cat">
```

## สรุป

- `<a>` สร้างลิงก์, `href` ระบุปลายทาง
- `<img>` แสดงรูป, ต้องมี `alt`
- ใช้ relative paths สำหรับไฟล์ในเครื่อง
- Alt text ช่วย accessibility
