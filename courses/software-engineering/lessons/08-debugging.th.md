# Debugging

Debugging คือกระบวนการค้นหาและแก้ไข bugs Debugging อย่างเป็นระบบช่วยประหยัดเวลาและความหงุดหงิด

## Mindset สำหรับ Debugging

1. **ยอมรับว่า bugs หลีกเลี่ยงไม่ได้** - ทุกคนเขียน bug
2. **ไว้วางใจในกระบวนการ** - แนวทางเป็นระบบดีกว่าการเดา
3. **อ่าน error messages** - มักจะบอกคุณว่าอะไรผิดพลาดพอดี
4. **ตั้งคำถามกับสิ่งที่คุณเชื่อ** - บางอย่างที่คุณคิดว่าถูกอาจผิด

## ขั้นตอน Debugging แบบเป็นระบบ

### 1. ทำให้ Bug เกิดซ้ำได้

ทำให้ bug เกิดขึ้นได้อย่างสม่ำเสมอ

```javascript
// Find the exact steps to trigger the bug
// "Click login button with empty email field"
// "Submit form when server is down"
```

### 2. หาสาเหตุหลัก

ใช้หนึ่งในกลยุทธ์เหล่านี้:

**Binary Search**
- คอมเมนต์โค้ดครึ่งหนึ่ง
- ถ้า bug ยังอยู่ ปัญหาอยู่ในครึ่งนั้น
- ทำซ้ำจนกว่าจะเจอบรรทัดที่แน่นอน

**Print Statements**
```javascript
function calculateTotal(items) {
    console.log('Input items:', items);
    let total = 0;
    for (const item of items) {
        console.log('Processing item:', item);
        total += item.price;
        console.log('Running total:', total);
    }
    console.log('Final total:', total);
    return total;
}
```

**ใช้ Debugger**
```javascript
function calculateTotal(items) {
    debugger;  // Browser stops here
    let total = 0;
    for (const item of items) {
        debugger;  // Step through each iteration
        total += item.price;
    }
    return total;
}
```

### 3. แก้ไข Bug

- แก้สาเหตุหลัก ไม่ใช่แก้อาการ
- ทำการเปลี่ยนแปลงน้อยที่สุด
- ตรวจสอบว่าการแก้ไขทำงานได้

### 4. ป้องกัน Regression

เพิ่ม test เพื่อไม่ให้ bug นี้กลับมา

## ประเภทของ Bugs ที่พบบ่อย

### Off-by-One Errors

```javascript
// Bug - Misses last element
for (let i = 0; i < arr.length - 1; i++) {
    process(arr[i]);
}

// Fix
for (let i = 0; i < arr.length; i++) {
    process(arr[i]);
}
```

### Null/Undefined Access

```javascript
// Bug - Doesn't check for null
user.profile.name;

// Fix - Guard against null
user?.profile?.name || 'Anonymous';
```

### ปัญหา Async

```javascript
// Bug - Using value before it's loaded
fetchUser(userId);
console.log(user.name);  // undefined!

// Fix - Wait for the result
const user = await fetchUser(userId);
console.log(user.name);  // Works
```

### ปัญหา Scope

```javascript
// Bug - Using loop variable after loop
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}  // Prints 3, 3, 3

// Fix - Use let instead of var
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}  // Prints 0, 1, 2
```

## Browser DevTools

- **Elements tab** - ตรวจสอบ HTML/CSS
- **Console tab** - รัน JavaScript ดู logs
- **Sources tab** - ตั้ง breakpoints ดูโค้ดทีละขั้นตอน
- **Network tab** - ตรวจสอบ HTTP requests
- **Application tab** - ตรวจสอบ localStorage, cookies

## Debugging Checklist

- [ ] คุณทำให้ bug เกิดซ้ำได้อย่างสม่ำเสมอไหม?
- [ ] คุณเข้าใจว่าโค้ดควรทำอะไร?
- [ ] คุณอ่าน error message อย่างละเอียดแล้วหรือยัง?
- [ ] คุณสามารถจำกัดตำแหน่งของ bug ได้ไหม?
- [ ] คุณตรวจสอบ null/undefined แล้วหรือยัง?
- [ ] คุณตรวจสอบปัญหา async/await แล้วหรือยัง?
- [ ] คุณทดสอบการแก้ไขแล้วหรือยัง?
- [ ] คุณเพิ่ม test เพื่อป้องกัน regression แล้วหรือยัง?
