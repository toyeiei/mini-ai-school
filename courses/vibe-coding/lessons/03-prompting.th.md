# Prompting for Code

การเขียน prompt ที่มีประสิทธิภาพเป็นทักษะที่สำคัญ Prompt ที่ดีจะได้โค้ดที่ดีกว่า

## The Components of a Good Prompt

### 1. Clear Goal

บอกให้ชัดเจนว่าคุณอยากสร้างอะไร

```javascript
// Bad prompt
"make a form"

// Better prompt
"Create a React component for user registration with:
- Email input with validation
- Password input (min 8 chars, must include number)
- Confirm password input
- Submit button
- Error messages displayed inline"
```

### 2. Context

แชร์ข้อมูลพื้นหลังที่เกี่ยวข้อง

```javascript
// Context includes
- What framework you're using
- Existing code patterns
- Constraints and requirements
- What you've already tried
```

### 3. Format

ระบุรูปแบบที่คุณต้องการในผลลัพธ์

```javascript
// Specify format
"Provide the component code, a unit test example, and a usage example"
```

## Prompting Techniques

### Zero-Shot Prompting

ถามตรงๆ โดยไม่ให้ตัวอย่าง

```
"Write a function that checks if a string is a palindrome"
```

### Few-Shot Prompting

ให้ตัวอย่างของสิ่งที่คุณต้องการ

```
"Here are examples of functions that return promises:

async function getUser(id) { ... }
async function fetchData(url) { ... }

Write an async function that fetches user posts"
```

### Chain of Thought

ขอให้ AI อธิบายการคิดของมัน

```
"Walk me through how you would design a rate limiter.
Consider: time windows, concurrent requests, storage options.
Then provide an implementation."
```

## Practical Prompt Templates

### Template: Component Request

```
Build a [component type] for [framework/library] with:

Purpose: [what it does]

Features:
- [feature 1]
- [feature 2]

Constraints:
- [any limitations]
- [specific requirements]

Style: [match existing codebase / specific style guide]
```

### Template: Debug Request

```
I'm getting this error:
[error message]

This is my code:
[relevant code]

Here's what I tried:
[attempts made]

What could be causing this?
```

### Template: Refactor Request

```
Current code:
[code to refactor]

Problems:
- [issue 1]
- [issue 2]

Target:
- [improvement goal]

Constraints:
- Must maintain [backwards compatibility / existing API]
```

## Handling AI Responses

### When Code Looks Wrong

```
"This function doesn't handle null values. Can you add that?"
"Shouldn't this check for negative numbers?"
```

### Iterating on Output

```
"That works, but can you use a different approach?
Instead of forEach, use a for...of loop"
```

### Asking for Explanations

```
"How does this function work step by step?"
"What edge cases might break this?"
```

## Common Prompt Mistakes

1. **คลุมเครือเกินไป** - "Fix my code" ไม่ได้อธิบายว่าอะไรเสีย
2. **กว้างเกินไป** - "Build an app" กว้างเกินไปจนทำยาก
3. **ขาดบริบท** - AI อ่านใจคุณไม่ได้
4. **ไม่ระบุ constraints** - AI จะใช้ค่า default ที่คุณอาจไม่ต้องการ

## Practice Exercises

ลองเขียน prompt สำหรับ:

1. ฟังก์ชันตรวจสอบเลขบัตรเครดิต
2. React hook สำหรับ local storage
3. SQL query สำหรับรายงานรายเดือน
4. Error handler สำหรับ API routes
5. ฟังก์ชันที่ parse วันที่หลายรูปแบบ

ยิ่งคุณฝึกเขียน prompt เยอะเท่าไหร่ ผลลัพธ์จาก AI ยิ่งดีขึ้นเท่านั้น
