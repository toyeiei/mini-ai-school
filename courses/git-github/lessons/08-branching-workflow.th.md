# Branching Workflow

Workflow กำหนดวิธีที่ทีมใช้ branches อย่างสม่ำเสมอ

## GitHub Flow

เรียบง่ายและเป็นที่นิยม:

1. สร้าง branch จาก `main`
2. ทำ commits
3. เปิด pull request
4. ตรวจสอบและอภิปราย
5. Merge เข้า `main`
6. ลบ branch

## Feature Branches

```
# Start fresh from main
git checkout main
git pull
git checkout -b feature-search

# Work and commit
git add .
git commit -m "Add search functionality"

# Push and create PR
git push -u origin feature-search
```

## Hotfix Branches

สำหรับการแก้ไขเร่งด่วน:

```
# Create hotfix from main
git checkout -b hotfix-critical-bug

# Fix and commit
git commit -m "Fix critical security issue"

# Merge to main immediately
git checkout main
git merge hotfix-critical-bug
git push

# Delete hotfix branch
git branch -d hotfix-critical-bug
```

## การตั้งชื่อ Branch

```
# Good names
feature/user-authentication
bugfix/login-crash
hotfix/security-patch
release/v1.0.0

# Bad names
fix
temp
asdf
```

## ปกป้อง main

บน GitHub:
- Settings → Branches → Add rule
- กำหนดให้ต้องมี pull request reviews
- กำหนดให้ต้องผ่าน status checks ก่อน merge
- ไม่อนุญาตให้ force push ไป main

## สรุป

- GitHub Flow: branch → commit → PR → merge
- ใช้ feature branches สำหรับงานใหม่
- ใช้ hotfix branches สำหรับการแก้ไขเร่งด่วน
- ปกป้อง main ด้วย PR requirements
