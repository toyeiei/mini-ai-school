# การยืนยันตัวตน

APIs ต้องรู้ว่าคุณคือใคร การยืนยันตัวตนจะตรวจสอบตัวตนของคุณ

## ทำไมต้องมีการยืนยันตัวตน?

- ปกป้องข้อมูลผู้ใช้
- ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต
- จำกัดจำนวนคำขอต่อผู้ใช้
- ติดตามการกระทำของผู้ใช้

## API Keys

ง่ายแต่ความปลอดภัยน้อยกว่า:

```javascript
// ส่ง key ใน header
const response = await fetch('/api/data', {
    headers: {
        'X-API-Key': 'your-api-key-here'
    }
});
```

## Bearer Tokens (JWT)

วิธีที่พบได้บ่อยในปัจจุบัน:

```javascript
const response = await fetch('/api/users', {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...'
    }
});
```

## ขั้นตอนการ Login

```javascript
// 1. ส่งข้อมูลเข้าสู่ระบบ
const loginResponse = await fetch('/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'user@example.com',
        password: 'password123'
    })
});

const { token } = await loginResponse.json();

// 2. เก็บ token
localStorage.setItem('token', token);

// 3. ใช้ token สำหรับคำขอถัดไป
const response = await fetch('/api/profile', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
});
```

## แนวทางปฏิบัติด้านความปลอดภัยที่ดี

- ไม่เปิดเผย secrets ในโค้ด frontend
- ใช้ HTTPS เสมอ
- เก็บ tokens อย่างปลอดภัย
- ทำการ logout (ลบ token)
- ตั้งเวลาหมดอายุของ token

## เมื่อไหร่ต้องยืนยันตัวตน

| Endpoint | ต้องยืนยันตัวตน? |
|----------|------------------|
| `/api/public/news` | ไม่ |
| `/api/users/profile` | ใช่ |
| `/api/posts` | ใช่ |
| `/api/admin/*` | Admin เท่านั้น |

## สรุป

- API keys สำหรับการยืนยันตัวตนแบบง่าย
- Bearer tokens (JWT) สำหรับ user sessions
- ส่งการยืนยันตัวตนใน headers เสมอ
- ไม่เปิดเผย secrets ต่อสาธารณะ
