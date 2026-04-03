# การทำงานร่วมกัน

GitHub ช่วยให้หลายคนทำงานบนโปรเจกต์เดียวกันได้

## Fork และ Clone

สำหรับ open source projects:

```bash
# Fork บน GitHub (กดปุ่มบนเว็บ)
# จากนั้น clone YOUR fork
git clone https://github.com/you/repo.git
```

## อัปเดต Fork

```bash
# เพิ่ม original เป็น upstream
git remote add upstream https://github.com/original/repo.git

# อัปเดตจาก original
git fetch upstream
git merge upstream/main
```

## Pull Requests (PRs)

เมื่อคุณต้องการให้การเปลี่ยนแปลงถูกรวม:

1. Push ไปที่ fork ของคุณ
2. คลิก "New Pull Request" บน GitHub
3. อธิบายการเปลี่ยนแปลงของคุณ
4. ส่งเพื่อให้ตรวจสอบ

## Code Review

PRs ทำให้ตรวจสอบโค้ดได้:

- แสดงความคิดเห็นบนบรรทัดเฉพาะ
- ขอให้แก้ไข
- อนุมัติและ merge

## Workflow

```bash
# 1. สร้าง feature branch
git checkout -b fix-typo

# 2. ทำการเปลี่ยนแปลง
echo "fix" > file.txt
git add .
git commit -m "Fix typo in header"

# 3. Push ไปที่ fork ของคุณ
git push origin fix-typo

# 4. สร้าง PR บน GitHub
```

## Branches สำหรับทีม

```
main        - โค้ด production
develop     - integration branch
feature-x   - feature ใหม่
bugfix-y    - แก้บัก
```

## สรุป

- Fork เพื่อทำงานบนโปรเจกต์ของคนอื่น
- Pull requests ส่งการเปลี่ยนแปลงเพื่อตรวจสอบ
- อัปเดต fork ให้ตรงกับ upstream
- Branches ช่วยให้การทำงานเป็นระบบ
