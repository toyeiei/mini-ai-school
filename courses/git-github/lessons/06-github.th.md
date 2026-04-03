# พื้นฐาน GitHub

GitHub เป็นแพลตฟอร์มสำหรับเก็บ Git repositories ไว้ออนไลน์ ช่วยให้ทำงานร่วมกันได้และมีการสำรองข้อมูล

## สร้างบัญชี GitHub

ไปที่ [github.com](https://github.com) และสมัครสมาชิก

## สร้าง Repository บน GitHub

1. คลิก "New repository"
2. ตั้งชื่อ (เช่น "my-project")
3. เลือก public หรือ private
4. ไม่ต้องสร้าง README (เรามีโค้ดในเครื่องอยู่แล้ว)

## เชื่อมต่อเครื่องกับ GitHub

```
# เพิ่ม remote (ตั้งค่าครั้งเดียว)
git remote add origin https://github.com/you/my-project.git

# Push โค้ดของคุณ
git push -u origin main
```

## Push และ Pull

```
# อัปโหลด commits ไป GitHub
git push

# ดาวน์โหลด commits จาก GitHub
git pull
```

## Clone Repository

```
# ได้โปรเจกต์ของคนอื่นมา
git clone https://github.com/user/repo.git
```

## Sync Fork (สำหรับการทำงานร่วมกัน)

```
# เพิ่ม upstream remote
git remote add upstream https://github.com/original/repo.git

# ดึงการเปลี่ยนแปลงล่าสุด
git fetch upstream

# Merge เข้า branch ของคุณ
git merge upstream/main
```

## GitHub Flow

1. Push โค้ด → GitHub
2. สร้าง pull request
3. ตรวจสอบการเปลี่ยนแปลง
4. Merge เข้า main

## สรุป

- GitHub เก็บ repositories ไว้บนคลาวด์
- `git remote` เชื่อมเครื่องกับ GitHub
- `git push` อัปโหลด, `git pull` ดาวน์โหลด
- `git clone` คัดลอก repository
