# Branching

Branches ช่วยให้คุณทำงานบน feature ได้โดยไม่กระทบโค้ดหลัก

## Branch คืออะไร?

คิดว่า branches เป็นเวอร์ชันคู่ขนานของโปรเจกต์ของคุณ:

```
main
├── feature-login
└── feature-search
```

## แสดงรายการ Branches

```bash
# ดู branches ทั้งหมด
git branch

# Branch ปัจจุบันจะมีเครื่องหมายดอกจัน
* main
```

## สร้าง Branch

```bash
git branch feature-login
```

คำสั่งนี้สร้าง branch ใหม่แต่ไม่ได้เปลี่ยนไปใช้

## สลับ Branch

```bash
git checkout feature-login
# หรือ (syntax ที่ทันสมัยกว่า)
git switch feature-login
```

## สร้างและสลับพร้อมกัน

```bash
git checkout -b feature-login
# หรือ
git switch -c feature-login
```

## ทำงานบน Branch ของคุณ

```bash
# สลับไป branch ใหม่
git switch -c feature-login

# ทำการเปลี่ยนแปลง
echo "login page" > login.html
git add .
git commit -m "Add login page"
```

การเปลี่ยนแปลงมีอยู่เฉพาะบน `feature-login` ไม่ใช่บน `main`

## ลบ Branch

```bash
# ลบเมื่อ merge แล้ว
git branch -d feature-login

# บังคับลบ (แม้ยังไม่ได้ merge)
git branch -D feature-login
```

## สรุป

- Branches คือเวอร์ชันคู่ขนานของโค้ด
- `git branch` แสดงรายการ branches
- `git checkout -b` สร้างและสลับ
- การเปลี่ยนแปลงบน branch ไม่กระทบ branches อื่น
