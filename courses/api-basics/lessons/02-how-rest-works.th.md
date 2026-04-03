# REST ทำงานอย่างไร

REST (Representational State Transfer) เป็นรูปแบบ API ที่พบได้บ่อยที่สุด

## หลักการของ REST

1. **Resources** - ทุกอย่างคือ resource (users, posts, products)
2. **URLs** - Resources มีที่อยู่เฉพาะตัว
3. **HTTP Methods** - ใช้ methods สำหรับการทำงาน
4. **Stateless** - แต่ละคำขอเป็นอิสระต่อกัน

## REST URLs

```
https://api.example.com/users
https://api.example.com/users/123
https://api.example.com/posts/456/comments
```

Resources เป็นคำนาม (users, posts) ไม่ใช่คำกริยา

## HTTP ใน REST

| Method | การทำงาน | ตัวอย่าง |
|--------|---------|---------|
| GET | อ่านข้อมูล | ดึงข้อมูลผู้ใช้ |
| POST | สร้างใหม่ | สร้างผู้ใช้ใหม่ |
| PUT | แทนที่ | แทนที่ข้อมูลผู้ใช้ |
| PATCH | แก้ไขบางส่วน | อัปเดตบางฟิลด์ |
| DELETE | ลบ | ลบผู้ใช้ |

## Request-Response Cycle

```
Client: GET /users/123
       ↓
Server: ประมวลผลคำขอ
       ↓
Server: ส่งข้อมูลกลับเป็น JSON
       ↓
Client: รับและใช้ข้อมูล
```

## HTTP Status Codes

| Code | ความหมาย |
|------|---------|
| 200 | สำเร็จ |
| 201 | สร้างแล้ว |
| 400 | คำขอไม่ถูกต้อง |
| 404 | ไม่พบ |
| 500 | Server ผิดพลาด |

## สรุป

- REST ใช้ URLs สำหรับ resources และ HTTP methods สำหรับการทำงาน
- GET, POST, PUT, PATCH, DELETE
- Server ตอบกลับด้วยข้อมูล (ส่วนใหญ่เป็น JSON)
- Status codes บอกว่าสำเร็จหรือล้มเหลว
