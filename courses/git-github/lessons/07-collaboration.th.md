# การทำงานร่วมกัน

GitHub ช่วยให้หลายคนทำงานบนโปรเจกต์เดียวกันได้

## Fork และ Clone

สำหรับ open source projects:

```
# Fork on GitHub (button on website)
# Then clone YOUR fork
git clone https://github.com/you/repo.git
```

## อัปเดต Fork

```
# Add original as upstream
git remote add upstream https://github.com/original/repo.git

# Update from original
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

```
# 1. Create feature branch
git checkout -b fix-typo

# 2. Make changes
echo "fix" > file.txt
git add .
git commit -m "Fix typo in header"

# 3. Push to your fork
git push origin fix-typo

# 4. Create PR on GitHub
```

## Branches สำหรับทีม

```
main        - production code
develop     - integration branch
feature-x   - new features
bugfix-y    - bug fixes
```

## สรุป

- Fork เพื่อทำงานบนโปรเจกต์ของคนอื่น
- Pull requests ส่งการเปลี่ยนแปลงเพื่อตรวจสอบ
- อัปเดต fork ให้ตรงกับ upstream
- Branches ช่วยให้การทำงานเป็นระบบ
