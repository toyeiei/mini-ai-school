# พื้นฐาน Commits

Commits คือ snapshot ของโปรเจกต์ของคุณ แต่ละ commit มีข้อความอธิบายว่าอะไรเปลี่ยนไป

## Staging ไฟล์

```bash
# Stage ไฟล์เฉพาะ
git add filename.txt

# Stage ไฟล์ที่เปลี่ยนทั้งหมด
git add .

# Stage ไฟล์ทั้งหมด
git add -A
```

## สร้าง Commits

```bash
git commit -m "Add login form"
```

ข้อความควรเป็น:
- สั้น (ไม่เกิน 50 ตัวอักษร)
- ชัดเจนว่าอะไรเปลี่ยน
- ใช้ปัจจุบันกาล ("Add" ไม่ใช่ "Added")

## ข้อความ Commit ที่ดี

```bash
# ดี
git commit -m "Fix navigation bug on mobile"

# ไม่ดี
git commit -m "fix"
git commit -m "WIP"
git commit -m "asdf"
```

## ดูประวัติ

```bash
# ดู commits ล่าสุด
git log

# ดู log แบบย่อ
git log --oneline
```

ผลลัพธ์:
```
a1b2c3d Fix navigation bug on mobile
e4f5g6h Add user profile page
i7j8k9l Initial commit
```

## แก้ไข Commit ล่าสุด

ทำผิดพลาด? แก้ได้:

```bash
git commit --amend -m "Corrected message"
```

## สรุป

- `git add` stages ไฟล์เพื่อ commit
- `git commit` บันทึก snapshot พร้อมข้อความ
- เขียนข้อความชัดเจน อธิบายได้
- `git log` แสดงประวัติ commits
