# แนวปฏิบัติที่ดีที่สุด

ปฏิบัติตามนิสัยเหล่านี้เพื่อให้ version control สะอาดและดูแลง่าย

## Commit บ่อยๆ

```
# Good: small, focused commits
git commit -m "Add user login form"
git commit -m "Style login form"
git commit -m "Add login validation"
```

## เขียนข้อความที่ดี

```bash
Subject line (under 50 chars)

Body paragraph explaining WHY and WHAT.
Not HOW.
```

ตัวอย่าง:
```bash
git commit -m "Add user authentication

- Implement JWT tokens for session management
- Add password hashing with bcrypt
- Create login/logout endpoints
- Closes #123"
```

## ใช้ Branches

- ไม่ commit ลง main โดยตรง
- หนึ่ง feature ต่อ branch
- ลบ branches หลัง merge

## รักษาความสะอาด

```
# Before merging, sync with main
git checkout main
git pull
git checkout feature-branch
git merge main

# Delete merged branches
git branch -d old-feature
```

## เพิกเฉยไฟล์ที่ sensitive

สร้าง `.gitignore`:

```
# Dependencies
node_modules/

# Environment
.env

# Build outputs
dist/
build/

# IDE
.vscode/
*.swp
```

## Push สม่ำเสมอ

```bash
git push  # Upload commits
git pull  # Download changes
```

อย่าให้ commits สะสมในเครื่อง

## สรุป

- Commit การเปลี่ยนแปลงเล็กๆ ที่เน้นหนึ่งอย่าง
- เขียนข้อความ commit ที่ชัดเจน
- ใช้ branches สำหรับทุกอย่าง
- อัปเดต .gitignore ให้ตรง
- Push สม่ำเสมอเพื่อไม่ให้สูญเสียงาน
