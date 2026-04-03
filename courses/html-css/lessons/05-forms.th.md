# Forms

Forms เก็บข้อมูลจากผู้ใช้ ทุก login, search, signup ใช้มัน

## Form พื้นฐาน

```html
<form action="/submit" method="POST">
    <label for="name">ชื่อ:</label>
    <input type="text" id="name" name="name">

    <label for="email">อีเมล:</label>
    <input type="email" id="email" name="email">

    <button type="submit">ส่ง</button>
</form>
```

## Input Types

```html
<input type="text">       <!-- ข้อความ -->
<input type="email">      <!-- อีเมล -->
<input type="password">    <!-- ซ่อนข้อความ -->
<input type="number">     <!-- ตัวเลข -->
<input type="date">       <!-- เลือกวันที่ -->
<input type="checkbox">   <!-- ติ๊กเลือก -->
<input type="radio">      <!-- เลือกอันเดียว -->
```

## Text Areas & Select

```html
<textarea rows="4" cols="50">
พิมพ์ข้อความของคุณตรงนี้...
</textarea>

<select name="country">
    <option value="th">ไทย</option>
    <option value="us">สหรัฐอเมริกา</option>
</select>
```

## Form Attributes

| Attribute | หน้าที่ |
|-----------|---------|
| `action` | URL ที่ส่งข้อมูลไป |
| `method` | GET (ดู) หรือ POST (ส่ง) |
| `name` | ตัวระบุฟิลด์ |
| `required` | ต้องกรอก |

## สรุป

- `<form>` เก็บข้อมูลจากผู้ใช้
- `<input>` หลายประเภทฟิลด์
- Labels ช่วย accessibility
- `name` attribute ระบุตัวข้อมูล
