# Merging

Merging รวมการเปลี่ยนแปลงจาก branch หนึ่งเข้ากับอีก branch หนึ่ง

## Merge Branch

```
# สลับไป branch เป้าหมาย
git checkout main

# Merge feature branch
git merge feature-login
```

## Fast-Forward Merge

ถ้า `main` ไม่ได้เปลี่ยนแปลง Git จะแค่ย้าย pointer:

```bash
Before:    main → A
                ↑
          feature-login

After:     main → A → B (feature-login)
```

Git จะ fast-forward โดยอัตโนมัติ

## Merge Conflicts

เมื่อบรรทัดเดียวกันเปลี่ยนในทั้งสอง branches:

```bash
<<<<<<< HEAD
Hello World
=======
Hello Universe
>>>>>>> feature-login
```

## แก้ไข Conflicts

1. แก้ไขไฟล์เพื่อเลือกสิ่งที่คุณต้องการ
2. ลบ conflict markers
3. บันทึกและ commit

```
# หลังจากแก้ไข
git add resolved-file.txt
git commit -m "Resolve merge conflict"
```

## ลบ Branch หลัง Merge

```bash
git branch -d feature-login
```

## สรุป

- `git merge` รวมการเปลี่ยนแปลงจาก branches
- Fast-forward เมื่อไม่มี conflicts
- Conflicts ต้องแก้ไขด้วยมือ
- ลบ branches ที่ merge แล้วเพื่อให้ organized
