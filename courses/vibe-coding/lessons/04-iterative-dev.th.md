# Iterative Development

Vibe coding จะทำงานได้ดีที่สุดเมื่อใช้แนวทาง iteration สร้างทีละน้อย ปรับปรุงอย่างต่อเนื่อง

## The Iteration Cycle

```
Idea → Generate → Review → Refine → Test → Repeat
  ▲                                   │
  └───────────────────────────────────┘
```

## Start Small

เริ่มจากฟีเจอร์หลักก่อน ไม่ใช่ทั้งแอปพลิเคชัน

```javascript
// First iteration - core functionality
async function fetchUser(id) {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
}

// Second iteration - add error handling
async function fetchUser(id) {
    if (!id) throw new Error('User ID required');
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
    }
    return response.json();
}

// Third iteration - add caching
const cache = new Map();
async function fetchUser(id) {
    if (cache.has(id)) return cache.get(id);
    const user = await fetchUserFromAPI(id);
    cache.set(id, user);
    return user;
}
```

## Building Incrementally

### Step 1: Get it working

```
Prompt: "Create a basic to-do list with add and delete"
```

### Step 2: Add state management

```
Prompt: "Add the ability to mark items as complete. Store state in localStorage."
```

### Step 3: Improve UX

```
Prompt: "Add animations when items are added and deleted"
```

## Effective Iterations

### What's Worth Iterating

- Core functionality ก่อน
- ฟีเจอร์ที่ผู้ใช้เห็น
- Error handling
- ปรับปรุง performance
- Edge cases

### What to Avoid

- Premature optimization
- ตกแต่ง UI ก่อนที่ฟังก์ชันจะทำงาน
- เพิ่มฟีเจอร์ที่อาจไม่จำเป็น

## Code Reviews with AI

หลังจาก AI สร้างโค้ด ให้ตรวจสอบเสมอ:

```javascript
// Check 1: Does it do what I asked?
// Check 2: Are there obvious bugs?
// Check 3: Is the code readable?
// Check 4: Are edge cases handled?
// Check 5: Is it secure?
```

### Questions to Ask

- "What would break this code?"
- "What happens if the API is slow?"
- "What if the user enters special characters?"
- "Could this code be simpler?"

## Managing Complexity

เมื่อฟีเจอร์เพิ่มขึ้น ความซับซ้อนก็เพิ่มขึ้นตาม ใช้ iteration เพื่อจัดการมัน

### Refactoring with AI

```
"Here's my 200-line function. Can you break it into smaller
functions with clear responsibilities?"
```

### Adding Structure

```
"This file is getting large. Help me split it into modules
for: data fetching, state management, and UI components"
```

## Working in Short Cycles

Iteration สั้นทำให้ได้ feedback เร็วขึ้น

| Cycle Length | When to Use |
|--------------|-------------|
| 5-15 นาที | Prototype ด่วน, ฟีเจอร์เดียว |
| 30-60 นาที | ฟีเจอร์พร้อม testing |
| 2-4 ชั่วโมง | ฟีเจอร์ใหญ่พร้อม context เต็ม |

## Signs You Need Iteration

- รู้สึกว่าสร้างยากเกินไป → แบ่งย่อย
- โค้ดมีฟีเจอร์เยอะเกินไป → Ship ก่อน เพิ่มทีหลัง
- ไม่แน่ใจว่าทำงานไหม → เพิ่ม tests
- Prompt ยาวเกินไป → แบ่งเป็นหลาย prompt

## Practical Workflow

1. กำหนดเวอร์ชันที่เล็กที่สุดที่ใช้งานได้
2. สร้างด้วย AI
3. ตรวจสอบและแก้ปัญหาที่เห็นได้ชัด
4. ทดสอบด้วยมือ
5. Iterate: ฟีเจอร์ถัดไปหรือการปรับปรุง

ทุก iteration ควรทิ้งโค้ดที่ทำงานได้ไว้ให้คุณ
