# Branching

Branches ช่วยให้คุณทำงานบน feature ได้โดยไม่กระทบโค้ดหลัก

## Branch คืออะไร?

คิดว่า branches เป็นเวอร์ชันคู่ขนานของโปรเจกต์ของคุณ:

```bash
main
├── feature-login
└── feature-search
```

## แสดงรายการ Branches

```
# See all branches
git branch

# Current branch has an asterisk
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
# OR (modern syntax)
git switch feature-login
```

## สร้างและสลับพร้อมกัน

```bash
git checkout -b feature-login
# OR
git switch -c feature-login
```

## ทำงานบน Branch ของคุณ

```
# Switch to new branch
git switch -c feature-login

# Make changes
echo "login page" > login.html
git add .
git commit -m "Add login page"
```

การเปลี่ยนแปลงมีอยู่เฉพาะบน `feature-login` ไม่ใช่บน `main`

## ลบ Branch

```
# Delete when merged
git branch -d feature-login

# Force delete (even if not merged)
git branch -D feature-login
```

## สรุป

- Branches คือเวอร์ชันคู่ขนานของโค้ด
- `git branch` แสดงรายการ branches
- `git checkout -b` สร้างและสลับ
- การเปลี่ยนแปลงบน branch ไม่กระทบ branches อื่น
