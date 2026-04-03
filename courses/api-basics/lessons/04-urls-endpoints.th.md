# URLs และ Endpoints

Endpoints คือ URLs ที่ APIs สามารถเข้าถึงได้

## โครงสร้างของ API URL

```
https://api.example.com/users/123?sort=name&order=asc
\____/  \________/ \__/ \__/ \_______________/
  |        |       |    |         |
 scheme authority  path  ID    query params
```

## รูปแบบ Endpoints ที่พบบ่อย

```bash
# Collection endpoints
GET    /users          # แสดงรายการผู้ใช้ทั้งหมด
POST   /users          # สร้างผู้ใช้ใหม่

# Single resource endpoints
GET    /users/123      # ดูผู้ใช้ 123
PUT    /users/123      # แทนที่ผู้ใช้ 123
PATCH  /users/123      # อัปเดตผู้ใช้ 123
DELETE /users/123      # ลบผู้ใช้ 123

# Nested resources
GET    /users/123/posts    # โพสต์ของผู้ใช้ 123
GET    /posts/456/comments # ความคิดเห็นของโพสต์ 456
```

## Query Parameters

กรอง, เรียงลำดับ, และแบ่งหน้า:

```bash
# กรอง
GET /users?country=thailand

# เรียงลำดับ
GET /users?sort=name&order=asc

# แบ่งหน้า
GET /users?page=2&limit=10

# รวมกัน
GET /users?country=thailand&sort=name&page=1
```

## Path vs Query Parameters

| ประเภท | ตัวอย่าง | ใช้สำหรับ |
|--------|---------|-----------|
| Path | `/users/123` | ID ของ resource เฉพาะ |
| Query | `/users?sort=name` | การกรอง, เรียงลำดับ, แบ่งหน้า |

## ตัวอย่างจริง

```bash
# GitHub API
GET /repos/{owner}/{repo}
GET /users/{username}/repos

# Twitter API
GET /2/users/:id/tweets
GET /2/tweets/search/recent
```

## สรุป

- Endpoints คือ URLs สำหรับเข้าถึง API
- Path parameters ใช้ระบุ resource เฉพาะ
- Query parameters ใช้กรองและแบ่งหน้า
- การตั้งชื่อที่สม่ำเสมอทำให้ API ใช้งานง่าย
