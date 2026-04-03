# Building Your Workflow

Workflow สำหรับ vibe coding ที่ยั่งยืนช่วยให้คุณทำงานกับ AI ได้อย่างมีประสิทธิภาพ พร้อมรักษาคุณภาพโค้ด

## Your Core Workflow

```bash
┌─────────────────────────────────────────────┐
│  1. Define the Goal                        │
│     - What problem are you solving?       │
│     - What does success look like?         │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  2. Prompt Clearly                        │
│     - Be specific about requirements       │
│     - Include context and constraints      │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  3. Review the Output                      │
│     - Read every line                      │
│     - Check for bugs and issues             │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  4. Test Thoroughly                        │
│     - Manual testing first                   │
│     - Add automated tests                   │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  5. Iterate or Ship                        │
│     - More features? → Back to step 2       │
│     - Done? → Commit and deploy             │
└─────────────────────────────────────────────┘
```

## Daily Workflow

### Morning: Plan

1. วันนี้คุณจะสร้างอะไร?
2. แบ่งเป็น task เล็กๆ
3. จัดลำดับความสำคัญของ critical paths

### During Work

1. ทำ task เล็กๆ ให้เสร็จ
2. ทดสอบอย่างละเอียด
3. Commit โค้ดที่ทำงานได้
4. ทำซ้ำ

### End of Day

1. Commit งานที่เหลือ
2. เขียนบันทึกว่าต่อไปจะทำอะไร
3. ทบทวนสิ่งที่เรียนรู้

## Prompt Templates

### For Features

```
Build [feature name] with:
- Purpose: [what it does]
- Inputs: [what it takes]
- Outputs: [what it returns]
- Constraints: [any limitations]
- Style: [match existing codebase]
```

### For Debugging

```
I'm getting this error: [error]
My code: [relevant code]
Expected: [what should happen]
Actual: [what happens]
```

### For Refactoring

```
Refactor [file/function] to:
- Problem: [what's wrong]
- Goal: [what you want]
- Keep: [must preserve]
```

## Tool Setup

### Essential Tools

1. **IDE ที่มี AI integration** - VS Code + Copilot, Cursor ฯลฯ
2. **Version control** - Git สำหรับบันทึกความคืบหน้า
3. **Testing framework** - Jest, Vitest ฯลฯ
4. **Browser DevTools** - สำหรับ web development
5. **AI assistant** - Claude, ChatGPT ฯลฯ

### Recommended Setup

```
# Project structure
my-project/
├── src/
│   ├── components/
│   ├── utils/
│   └── tests/
├── docs/
├── package.json
└── README.md
```

## Project Management

### Task Breakdown

Big task: "Build user authentication"
↓

- [ ] ออกแบบ user model
- [ ] สร้าง registration form
- [ ] เพิ่ม email validation
- [ ] Hash passwords
- [ ] สร้าง login endpoint
- [ ] เพิ่ม session management
- [ ] เขียน tests
- [ ] เพิ่ม error handling

### Tracking Progress

```
## วันนี้
- [x] User model
- [x] Registration form
- [ ] Email validation (กำลังทำ)
- [ ] Password hashing

## พรุ่งนี้
- [ ] Login endpoint
- [ ] Session management
```

## Code Quality Standards

แม้จะใช้ AI ก็ตาม ให้รักษาคุณภาพ:

1. **Readable** - ชื่อที่ชัดเจน โครงสร้างที่ดี
2. **Testable** - ฟังก์ชันเล็กๆ  input/output ที่ชัดเจน
3. **Maintainable** - บันทึกส่วนที่ซับซ้อน
4. **Secure** - ตรวจสอบ input ทุกตัว ปกป้องข้อมูล

## Collaboration

เมื่อทำงานกับผู้อื่น:

1. **บันทึกการใช้ AI** - ระบุว่า AI ช่วยตรงไหน
2. **ตรวจสอบโค้ดจาก AI ทั้งหมด** - มาตรฐานเดียวกับโค้ดที่คนเขียน
3. **แชร์ prompts** - ช่วยให้ทีมเรียนรู้การเขียน prompt ที่มีประสิทธิภาพ
4. **อภิปราย patterns** - อะไรที่ใช้ได้ผลกับทีม

## Continuous Improvement

หลังจากแต่ละโปรเจกต์:

1. Prompt อะไรที่ได้ผลดี?
2. Bug อะไรที่หลุดไป?
3. ถ้าทำใหม่จะทำอะไรต่างจากเดิม?
4. Pattern ใหม่อะไรที่ได้เรียนรู้?

## Summary

Vibe coding workflow ของคุณ:
1. เป้าหมายที่ชัดเจน
2. Prompt ที่เจาะจง
3. ตรวจสอบอย่างละเอียด
4. Testing
5. Iteration
6. Documentation
7. เรียนรู้อย่างต่อเนื่อง

เป้าหมายไม่ใช่การใช้ AI แต่เป็นการสร้างซอฟต์แวร์ได้อย่างมีประสิทธิภาพ โดยมี AI เป็นเครื่องมือที่ทรงพลังในอาวุธของคุณ
