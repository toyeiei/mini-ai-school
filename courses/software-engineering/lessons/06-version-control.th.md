# Version Control

Version control ติดตามการเปลี่ยนแปลงของโค้ดตามเวลา ช่วยให้สามารถทำงานร่วมกันและทดลองอย่างปลอดภัย

## พื้นฐาน Git

### แนวคิดหลัก

- **Repository** - โฟลเดอร์โครงการที่ Git ติดตาม
- **Commit** - ภาพรวมของการเปลี่ยนแปลง
- **Branch** - เวอร์ชันคู่ขนานของโค้ด
- **Merge** - การรวม branches

### คำสั่งที่จำเป็น

```
# เริ่ม repository ใหม่
git init

# Clone repository ที่มีอยู่แล้ว
git clone https://github.com/user/repo.git

# ตรวจสอบสถานะ repository
git status

# เพิ่มไฟล์เข้า staging
git add file.txt        # ไฟล์เดียว
git add .               # ทุกการเปลี่ยนแปลง

# สร้าง commit
git commit -m "Add login feature"

# ดูประวัติ commits
git log --oneline

# สร้าง branch
git branch feature-login

# สลับ branches
git checkout feature-login
git switch feature-login   # ไวยากรณ์ใหม่

# Merge branch
git checkout main
git merge feature-login
```

## Branching Strategies

### Simple Strategy

- `main` - โค้ด production
- `develop` - branch รวม (ไม่จำเป็น)
- Feature branches - สำหรับแต่ละฟีเจอร์

### GitHub Flow

1. สร้าง branch จาก `main`
2. ทำ commits
3. เปิด pull request
4. รีวิวและอภิปราย
5. Merge เข้า `main`

## เขียน Commit Messages ที่ดี

```
# Commit message ที่ดี
git commit -m "feat: add user authentication with JWT

- Add login/logout endpoints
- Implement token refresh
- Add password hashing with bcrypt
- Closes #123"

# Commit message ที่ไม่ดี
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "asdfgh"
```

## Workflows ที่ใช้บ่อย

### บันทึกงานที่ยังไม่เสร็จ

```bash
git stash           # บันทึกการเปลี่ยนแปลงชั่วคราว
git stash pop       # กู้คืนการเปลี่ยนแปลงที่บันทึกไว้
git stash list      # ดูรายการ stashes
```

### ยกเลิกการเปลี่ยนแปลง

```
# ยกเลิกการเปลี่ยนแปลงในไฟล์
git checkout -- file.txt
git restore file.txt   # แบบใหม่

# ยกเลิก commit ล่าสุด (เก็บการเปลี่ยนแปลงไว้)
git reset --soft HEAD~1

# ยกเลิก commit ล่าสุด (ทิ้งการเปลี่ยนแปลง)
git reset --hard HEAD~1
```

## การทำงานร่วมกันด้วย GitHub

```
# Fork repository แล้ว clone fork ของคุณ
git clone https://github.com/your-username/repo.git

# เพิ่ม upstream remote
git remote add upstream https://github.com/original/repo.git

# Sync กับ upstream
git fetch upstream
git merge upstream/main

# Push การเปลี่ยนแปลงของคุณ
git push origin main
```

## แนวปฏิบัติที่ดี

- Commit บ่อยๆ พร้อมข้อความที่ชัดเจน
- ใช้ branches สำหรับทุกฟีเจอร์หรือการแก้ไข
- Pull ก่อน push เพื่อหลีกเลี่ยง conflict
- รีวิวการเปลี่ยนแปลงก่อน commit
- เขียน commit messages ที่มีความหมาย
- อย่า commit secrets หรือ credentials
