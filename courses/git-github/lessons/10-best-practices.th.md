# แนวปฏิบัติที่ดีที่สุด

ปฏิบัติตามนิสัยเหล่านี้เพื่อให้ version control สะอาดและดูแลง่าย

## Commit บ่อยๆ

```
# ดี: commits เล็กๆ ที่เน้นหนึ่งอย่าง
git commit -m "Add user login form"
git commit -m "Style login form"
git commit -m "Add login validation"
```

## เขียนข้อความที่ดี

```bash
หัวข้อ (ไม่เกิน 50 ตัวอักษร)

ย่อหน้าอธิบาย WHY และ WHAT
ไม่ใช่ HOW
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
# ก่อน merge อัปเดตจาก main ก่อน
git checkout main
git pull
git checkout feature-branch
git merge main

# ลบ branches ที่ merge แล้ว
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
git push  # อัปโหลด commits
git pull  # ดาวน์โหลดการเปลี่ยนแปลง
```

อย่าให้ commits สะสมในเครื่อง

## สรุป

- Commit การเปลี่ยนแปลงเล็กๆ ที่เน้นหนึ่งอย่าง
- เขียนข้อความ commit ที่ชัดเจน
- ใช้ branches สำหรับทุกอย่าง
- อัปเดต .gitignore ให้ตรง
- Push สม่ำเสมอเพื่อไม่ให้สูญเสียงาน
