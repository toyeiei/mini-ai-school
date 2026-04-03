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
# Start a new repository
git init

# Clone an existing repository
git clone https://github.com/user/repo.git

# Check repository status
git status

# Add files to staging
git add file.txt        # Single file
git add .               # All changes

# Create a commit
git commit -m "Add login feature"

# View commit history
git log --oneline

# Create a branch
git branch feature-login

# Switch branches
git checkout feature-login
git switch feature-login   # Modern syntax

# Merge a branch
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
# Good commit message
git commit -m "feat: add user authentication with JWT

- Add login/logout endpoints
- Implement token refresh
- Add password hashing with bcrypt
- Closes #123"

# Bad commit messages
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "asdfgh"
```

## Workflows ที่ใช้บ่อย

### บันทึกงานที่ยังไม่เสร็จ

```bash
git stash           # Save changes temporarily
git stash pop       # Restore stashed changes
git stash list      # View stashes
```

### ยกเลิกการเปลี่ยนแปลง

```
# Discard local changes to a file
git checkout -- file.txt
git restore file.txt   # Modern

# Undo the last commit (keep changes)
git reset --soft HEAD~1

# Undo the last commit (discard changes)
git reset --hard HEAD~1
```

## การทำงานร่วมกันด้วย GitHub

```
# Fork a repository, then clone your fork
git clone https://github.com/your-username/repo.git

# Add upstream remote
git remote add upstream https://github.com/original/repo.git

# Sync with upstream
git fetch upstream
git merge upstream/main

# Push your changes
git push origin main
```

## แนวปฏิบัติที่ดี

- Commit บ่อยๆ พร้อมข้อความที่ชัดเจน
- ใช้ branches สำหรับทุกฟีเจอร์หรือการแก้ไข
- Pull ก่อน push เพื่อหลีกเลี่ยง conflict
- รีวิวการเปลี่ยนแปลงก่อน commit
- เขียน commit messages ที่มีความหมาย
- อย่า commit secrets หรือ credentials
