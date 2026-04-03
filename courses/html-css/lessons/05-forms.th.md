# Forms

Forms เก็บข้อมูลจากผู้ใช้ ทุก login, search, signup ใช้มัน

## Form พื้นฐาน

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Submit</button>
</form>
```

## Input Types

```html
<input type="text">       <!-- Text -->
<input type="email">      <!-- Email -->
<input type="password">    <!-- Hidden text -->
<input type="number">     <!-- Numbers -->
<input type="date">       <!-- Date picker -->
<input type="checkbox">   <!-- Yes/No -->
<input type="radio">      <!-- Choose one -->
```

## Text Areas & Select

```html
<textarea rows="4" cols="50">
Enter your message here...
</textarea>

<select name="country">
    <option value="th">Thailand</option>
    <option value="us">United States</option>
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
