# สร้างหน้าเว็บ

มาสร้างหน้าโปรไฟล์ง่ายๆ ด้วยกัน

## แผน

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Profile</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>My Profile</h1>
    </header>

    <main>
        <section class="profile">
            <img src="avatar.jpg" alt="My photo" class="avatar">
            <h2>John Doe</h2>
            <p>Web Developer</p>
        </section>

        <section class="about">
            <h3>About Me</h3>
            <p>I love building websites and learning new technologies.</p>
        </section>

        <section class="skills">
            <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>

        <section class="contact">
            <h3>Contact</h3>
            <p>Email: john@example.com</p>
        </section>
    </main>
</body>
</html>
```

## CSS

```css
body {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: #f5f5f5;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

.profile {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 8px;
}

section {
    background: white;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
}

ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
}

li {
    background: #e0e0e0;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}
```

## ลองทำดู

1. สร้าง `index.html` และ `style.css`
2. เพิ่มรูปชื่อ `avatar.jpg`
3. เปิดในเบราว์เซอร์
4. แก้ไขและทดลอง!

## สิ่งที่คุณเรียนรู้

- โครงสร้าง HTML กับ semantic elements
- CSS styling และ layout
- Flexbox สำหรับจัดวาง
- Box model สำหรับระยะห่าง

ยินดีด้วย! คุณสร้างหน้าเว็บจริงๆ แล้ว!
