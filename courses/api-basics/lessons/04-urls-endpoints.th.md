# URLs และ Endpoints

Endpoints คือ URLs ที่ APIs สามารถเข้าถึงได้

## โครงสร้างของ API URL

```bash
https://api.example.com/users/123?sort=name&order=asc
\____/  \________/ \__/ \__/ \_______________/
  |        |       |    |         |
 scheme authority  path  ID    query params
```

## รูปแบบ Endpoints ที่พบบ่อย

```
# Collection endpoints
GET    /users          # List all users
POST   /users          # Create user

# Single resource endpoints
GET    /users/123      # Get user 123
PUT    /users/123      # Replace user 123
PATCH  /users/123      # Update user 123
DELETE /users/123      # Delete user 123

# Nested resources
GET    /users/123/posts    # Posts by user 123
GET    /posts/456/comments # Comments on post 456
```

## Query Parameters

กรอง, เรียงลำดับ, และแบ่งหน้า:

```
# Filter
GET /users?country=thailand

# Sort
GET /users?sort=name&order=asc

# Paginate
GET /users?page=2&limit=10

# Combined
GET /users?country=thailand&sort=name&page=1
```

## Path vs Query Parameters

| ประเภท | ตัวอย่าง | ใช้สำหรับ |
|--------|---------|-----------|
| Path | `/users/123` | ID ของ resource เฉพาะ |
| Query | `/users?sort=name` | การกรอง, เรียงลำดับ, แบ่งหน้า |

## ตัวอย่างจริง

```
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
