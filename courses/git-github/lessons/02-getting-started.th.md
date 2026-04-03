# เริ่มต้นใช้งาน

มาตั้งค่า Git บนคอมพิวเตอร์ของคุณกัน

## การติดตั้ง

**macOS**: Git มักจะติดตั้งมาพร้อมแล้ว ทดสอบได้เลย:
```bash
git --version
```

**Windows**: ดาวน์โหลดจาก [git-scm.com](https://git-scm.com)

## ตั้งค่า Git

บอก Git ว่าคุณคือใคร (ทำครั้งเดียว):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## สร้าง Repository

```bash
# สร้างโฟลเดอร์ใหม่
mkdir my-project
cd my-project

# เริ่มต้น Git
git init
```

คำสั่งนี้จะสร้างโฟลเดอร์ `.git` - Git กำลังติดตามโปรเจกต์ของคุณอยู่

## ตรวจสอบสถานะ

```bash
git status
```

แสดง:
- ไฟล์ไหนถูกติดตาม
- ไฟล์ไหนมีการเปลี่ยนแปลง
- ไฟล์ไหนอยู่ใน staging

## ขั้นตอนการทำงานพื้นฐาน

```
แก้ไขไฟล์ → Stage → Commit
```

1. **แก้ไข**: ทำการเปลี่ยนแปลงไฟล์ของคุณ
2. **Stage**: ทำเครื่องหมายการเปลี่ยนแปลงเพื่อ commit
3. **Commit**: บันทึก snapshot

## สรุป

- ตั้งค่า Git ด้วยชื่อและอีเมลของคุณ
- `git init` เริ่มติดตามโปรเจกต์
- `git status` แสดงสถานะปัจจุบัน
- ขั้นตอน: แก้ไข → Stage → Commit
