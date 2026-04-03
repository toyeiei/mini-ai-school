# Common Pitfalls

Vibe coding มีอุปสรรคที่อาจทำให้คุณช้าลงหรือสร้างปัญหาได้ มาเรียนรู้วิธีหลีกเลี่ยงกัน

## Over-Relying on AI

### The Problem

ไว้วางใจผลลัพธ์จาก AI โดยไม่เข้าใจโค้ดนำไปสู่:
- Bug ใน production
- ช่องโหว่ด้านความปลอดภัย
- Technical debt
- เสียเวลา debug

### The Solution

ตรวจสอบและเข้าใจโค้ดก่อนใช้ทุกครั้ง

```javascript
// Don't blindly paste AI code
const result = await aiGenerate("secure authentication");

// Do verify first
// - Do I understand what this does?
// - Have I tested it thoroughly?
// - Are there security implications?
```

## Prompt Overload

### The Problem

ขอให้ AI สร้างทุกอย่างพร้อมกันทีเดียวทำให้:
- โค้ดไม่เป็นระบบ
- Requirements ถูกละเลย
- Debug ยากขึ้น
- ผลลัพธ์ดูแลรักษายาก

### The Solution

```javascript
// Bad prompt
"Build a complete e-commerce platform with user auth,
// payments, inventory, and email notifications"

// Better approach - iterative
"1. "Build user registration with email/password"
2. "Add login functionality"
3. "Add product catalog display"
4. "Add shopping cart"
5. "Add checkout flow"
```

## Ignoring Context

### The Problem

AI ไม่รู้บริบทเฉพาะของคุณ:
- Codebase ที่มีอยู่
- มาตรฐานของทีม
- ความต้องการด้าน performance
- ความต้องการของผู้ใช้

### The Solution

ให้บริบทในทุก prompt:

```
"Here's our user model:
{ id, email, createdAt }

Here's our database setup:
MySQL with Sequelize ORM

Write a function to find users by email.
Follow our existing patterns in user-service.js"
```

## Not Reading the Code

### The Problem

ใช้โค้ดที่ไม่เข้าใจทำให้เกิด:
- Bug ที่ซ่อนอยู่
- ปัญหาด้านความปลอดภัย
- ปัญหาการผสานรวม
- การ debug ที่ยาก

### The Solution

อ่านทุกบรรทัด ถ้าไม่เข้าใจ ให้ขอให้ AI อธิบายก่อนนำไปใช้

## Premature Optimization

### The Problem

AI สามารถสร้างโค้ดที่ซับซ้อนได้เร็ว ซึ่ง:
- อ่านยาก
- เพิ่มความซับซ้อนที่ไม่จำเป็น
- อาจไม่ได้แก้ปัญหาจริงๆ

### The Solution

เริ่มจากง่ายๆ:

```
"First: Make it work
"Then: Make it better
"Only then: Make it fast"
```

## Scope Creep in Prompts

### The Problem

คำขอที่คลุมเครือนำไปสู่ feature เยอะเกินไป

```
"Build a user profile page" 
→ AI adds: social media links, 
  activity feed, gamification, 
  admin panel, etc.
```

### The Solution

ระบุ scope ให้ชัดเจน:

```
"Build a user profile page showing:
- Avatar (uploaded or default)
- Name and bio (editable)
- Email (display only)

No social links, no activity feed, no admin features.
```

## Not Saving Progress

### The Problem

สูญเสียงานขณะที่ iterate กับ AI

### The Solution

```bash
# Commit after each working iteration
git add .
git commit -m "feat: basic profile page"
```

## Testing Too Late

### The Problem

สมมติว่าโค้ดจาก AI ทำงานได้โดยไม่ทดสอบ

### The Solution

ทดสอบทุก iteration ก่อนไปต่อ:

1. เขียน/ใช้ prompt สร้างโค้ด
2. ทดสอบด้วยมือ
3. เพิ่ม automated tests
4. จึงค่อยไปต่อ

## Key Takeaways

1. **ตรวจสอบทุกอย่าง** - ไว้วางใจแต่ต้องตรวจสอบ
2. **Iterate** - ทีละนิด รับ feedback ตลอด
3. **ให้บริบท** - ช่วยให้ AI ช่วยคุณได้
4. **อ่านโค้ด** - คุณเป็นผู้รับผิดชอบ
5. **ทดสอบอย่างละเอียด** - AI ทำผิดพลาดได้
6. **บันทึกบ่อยๆ** - Git คือเครือข่ายความปลอดภัยของคุณ

## Recovery Strategies

เมื่อคุณเจออุปสรรค:

- **ไว้วางใจ AI เกินไป?** เริ่มใหม่ด้วย prompt ที่ดีกว่า
- **โค้ดไม่ทำงาน?** Debug ทีละนิด ทดสอบแต่ละส่วน
- **ซับซ้อนเกินไป?** ลบและสร้างใหม่แบบง่ายกว่า
- **สับสน?** ใช้ git log เพื่อหาสถานะที่ทำงานได้
