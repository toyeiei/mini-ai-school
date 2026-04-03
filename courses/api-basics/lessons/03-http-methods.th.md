# HTTP Methods

HTTP methods บอก API ว่าต้องการให้ทำอะไร

## GET - อ่านข้อมูล

```javascript
// Get all users
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data));

// Get single user
fetch('https://api.example.com/users/1')
    .then(response => response.json())
    .then(user => console.log(user));
```

GET requests ไม่มี body ข้อมูลอยู่ใน URL

## POST - สร้างข้อมูล

```javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Alice',
        email: 'alice@example.com'
    })
})
    .then(response => response.json())
    .then(user => console.log('Created:', user));
```

## PUT - แทนที่ข้อมูล

```javascript
// Replace entire user
fetch('https://api.example.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Alice Updated',
        email: 'new@example.com'
    })
});
```

## PATCH - แก้ไขข้อมูลบางส่วน

```javascript
// Update just the email
fetch('https://api.example.com/users/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'updated@example.com'
    })
});
```

## DELETE - ลบข้อมูล

```javascript
fetch('https://api.example.com/users/1', {
    method: 'DELETE'
});
```

## สรุป

- **GET** - อ่านข้อมูล (ไม่มี body)
- **POST** - สร้างใหม่
- **PUT** - แทนที่ทั้งหมด
- **PATCH** - แทนที่บางส่วน
- **DELETE** - ลบ
