# แก้ไขความผิดพลาด

Git ทำให้การยกเลิกการเปลี่ยนแปลงและกู้คืนจากความผิดพลาดเป็นเรื่องง่าย

## ยกเลิกการเปลี่ยนแปลงใน Working Directory

ทิ้งการเปลี่ยนแปลงของไฟล์:

```bash
# ทิ้งการเปลี่ยนแปลงของไฟล์เดียว
git checkout -- filename.txt

# syntax ที่ทันสมัยกว่า
git restore filename.txt
```

## Unstage ไฟล์

ลบออกจาก staging แต่ไม่ลบ:

```bash
git reset HEAD filename.txt
# หรือ
git restore --staged filename.txt
```

## ยกเลิก Last Commit (เก็บการเปลี่ยนแปลงไว้)

```bash
git reset --soft HEAD~1
```

การเปลี่ยนแปลงยังอยู่ใน staging

## ยกเลิก Last Commit (เก็บ Working Directory)

```bash
git reset --mixed HEAD~1
# หรือ
git reset HEAD~1
```

การเปลี่ยนแปลงอยู่นอก staging แต่ยังเก็บไว้

## ยกเลิก Last Commit (ทิ้งการเปลี่ยนแปลง)

```bash
git reset --hard HEAD~1
```

⚠️ คำสั่งนี้ลบ commit และการเปลี่ยนแปลงทั้งหมด!

## Revert Commit ที่ Push แล้ว

สำหรับ commits ที่ push ไปแล้ว:

```bash
git revert abc1234
```

สร้าง commit ใหม่ที่ยกเลิกการเปลี่ยนแปลง

## หา Commits ที่หายไป

Reset โดยไม่ตั้งใจ? หาได้:

```bash
git reflog
```

แสดงการเคลื่อนไหว HEAD ทั้งหมด ใช้ `git checkout abc1234` เพื่อกู้คืน

## สรุป

- `git restore` ยกเลิกการเปลี่ยนแปลงใน working directory
- `git reset` uncommit และ unstage
- `git revert` ยกเลิก commits ที่ publish ได้อย่างปลอดภัย
- `git reflog` หา commits ที่หายไป
