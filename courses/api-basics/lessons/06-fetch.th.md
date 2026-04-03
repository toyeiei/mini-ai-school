# JavaScript fetch

`fetch` API ทำให้สามารถส่ง HTTP requests จาก JavaScript ได้

## Basic GET Request

```javascript
fetch('https://api.example.com/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## ไวยากรณ์ Async/Await

JavaScript สมัยใหม่ใช้ async/await:

```javascript
async function getUser() {
    try {
        const response = await fetch('https://api.example.com/users/1');

        if (!response.ok) {
            throw new Error('User not found');
        }

        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error('Error:', error);
    }
}

getUser();
```

## POST Request ด้วย fetch

```javascript
async function createUser() {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Alice',
            email: 'alice@example.com'
        })
    });

    const newUser = await response.json();
    console.log('Created:', newUser);
}
```

## รูปแบบที่พบบ่อย

```javascript
// ตั้งค่า authorization header
headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
}

// จัดการ status codes ที่แตกต่างกัน
if (response.status === 404) {
    // จัดการไม่พบ
} else if (response.status === 401) {
    // จัดการไม่ได้รับอนุญาต
}
```

## สรุป

- `fetch()` คืนค่าเป็น Promise
- ใช้ `response.json()` เพื่อแปลง JSON
- ใช้ `await` สำหรับโค้ด async ที่อ่านง่ายขึ้น
- จัดการข้อผิดพลาดด้วย try/catch เสมอ
