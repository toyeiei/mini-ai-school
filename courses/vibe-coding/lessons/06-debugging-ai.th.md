# Debugging AI Output

AI สามารถสร้างโค้ดที่มี bug ได้ การ debug ผลลัพธ์จาก AI ต้องใช้ทักษะเดียวกับการ debug โค้ดที่คนเขียน พร้อมกับกลยุทธ์เฉพาะด้าน

## Why AI Code Has Bugs

- AI คาดการณ์โค้ดที่น่าจะถูกต้อง ไม่ใช่โค้ดที่ถูกต้องเสมอไป
- มีข้อจำกัดในการเข้าใจบริบท
- อาจไม่เข้าใจ requirements เฉพาะของคุณ
- ข้อมูล training มีโค้ดที่มี bug ปนอยู่
- สมมติฐานอาจไม่ตรงกับความเป็นจริง

## Debugging Process

### 1. Reproduce the Issue

```javascript
// Run the code and observe
const result = calculateTotal([{ price: 10 }, { price: 20 }]);
console.log(result);  // Expected: 30, Got: ???
```

### 2. Isolate the Problem

```javascript
// Comment out parts to find the issue
const result = calculateTotal([{ price: 10 }, { price: 20 }]);
// If this is wrong, simplify further
// calculateTotal([{ price: 10 }])
```

### 3. Check AI's Assumptions

AI อาจสมมติว่า:
- Input จะถูกต้องเสมอ
- API ทำงานแบบหนึ่ง
- ข้อมูลมีรูปแบบที่แน่นอน

### 4. Fix and Verify

```javascript
// After finding the bug
// 1. Ask AI to explain
"Why does my function return undefined?"

// 2. Ask for specific fix
"Can you add a check for undefined input?"

// 3. Verify the fix works
```

## Common AI Code Bugs

### Type Coercion Issues

```javascript
// AI might generate (buggy)
function add(a, b) {
    return a + b;
}
add("1", "2");  // Returns "12" instead of 3

// Fixed
function add(a, b) {
    return Number(a) + Number(b);
}
```

### Async/Await Mistakes

```javascript
// AI might generate (buggy)
const user = await fetchUser(id);
console.log(user.name);  // May run before fetch completes

// Fixed
async function getUser(id) {
    const user = await fetchUser(id);
    return user;
}
```

### Missing Null Checks

```javascript
// AI might generate (buggy)
function getUserCity(user) {
    return user.profile.address.city;
}

// Fixed
function getUserCity(user) {
    return user?.profile?.address?.city || 'Unknown';
}
```

## Debugging Strategies with AI

### Strategy 1: Ask for Explanation

```
"This function isn't working. Can you explain line by line
what it does and identify the bug?"
```

### Strategy 2: Add Logging

```
"Add console.log statements to trace the values of
important variables through this function"
```

### Strategy 3: Ask for Tests

```
"Write unit tests that would catch the bug I'm experiencing"
```

### Strategy 4: Simplify

```
"This function is complex. Can you simplify it to the
minimum code that reproduces the correct behavior?"
```

## When to Debug Yourself vs Ask AI

### Debug Yourself

- Bug อยู่ในโค้ดที่คุณเข้าใจ
- เป็นการแก้ไขง่ายๆ
- คุณต้องการเข้าใจ codebase

### Ask AI

- คุณติดอยู่และต้องการมุมมองใหม่
- โค้ดเป็น boilerplate ที่คุณไม่คุ้นเคย
- คุณต้องการ tests เพื่อจับ regression

## Systematic Debugging Checklist

1. [ ] คุณ reproduce bug ได้สม่ำเสมอไหม?
2. [ ] คุณเข้าใจว่าโค้ดควรทำอะไรไหม?
3. [ ] คุณเพิ่ม console.log หรือ debugger แล้วไหม?
4. [ ] AI อธิบายสมมติฐานของโค้ดแล้วไหม?
5. [ ] คุณตรวจสอบ null/undefined แล้วไหม?
6. [ ] คุณตรวจสอบปัญหา type แล้วไหม?
7. [ ] โค้ดจัดการ edge cases แล้วไหม?

## Preventing AI Bugs

1. **เจาะจง** - Requirements ที่ชัดเจนลด bug ได้
2. **ตรวจสอบอย่างละเอียด** - อย่าไว้วางใจโดยไม่ตรวจ
3. **ทดสอบทีละนิด** - สร้างและทดสอบเป็นชิ้นเล็กๆ
4. **ใช้ TypeScript** - จับ error ด้าน type ได้เร็ว
5. **เพิ่ม validation** - ตรวจสอบผลลัพธ์จาก AI ก่อนใช้

## Key Insight

คุณคือผู้เชี่ยวชาญด้าน requirements ของคุณ AI คือผู้เชี่ยวชาญด้าน code patterns นำทั้งสองมารวมกัน: คุณนำทาง, AI สร้าง, คุณตรวจสอบ
