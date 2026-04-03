# Refactoring with AI

AI สามารถช่วยคุณปรับปรุงโค้ดที่มีอยู่ นี่คือวิธีใช้ AI สำหรับ refactoring อย่างมีประสิทธิภาพ

## What is Refactoring?

Refactoring คือการปรับปรุงโค้ดโดยไม่เปลี่ยนพฤติกรรมของมัน

เป้าหมาย:
- ทำให้โค้ดอ่านง่ายขึ้น
- ลดความซับซ้อน
- เพิ่ม maintainability
- ลบโค้ดที่ไม่ได้ใช้
- เพิ่ม performance

## When to Refactor

- ก่อนเพิ่มฟีเจอร์ใหม่
- เมื่อโค้ดอ่านยาก
- เมื่อ tests เริ่ม fail แบบไม่ทราบสาเหตุ
- เมื่อ code review พบปัญหา
- เมื่อมีเวลาก่อน ship

## Refactoring Safely

1. **มี tests** - ให้แน่ใจว่าพฤติกรรมไม่เปลี่ยน
2. **เปลี่ยนน้อยๆ** - Refactor ทีละอย่าง
3. **Commit ก่อน** - คุณสามารถ revert ได้เสมอ
4. **ตรวจสอบหลัง** - รัน tests และตรวจสอบด้วยมือ

## Common Refactoring Tasks

### 1. Simplify Functions

```javascript
// Before (complex)
function processUserData(userData) {
    const processed = [];
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].active) {
            processed.push({
                name: userData[i].firstName + ' ' + userData[i].lastName,
                email: userData[i].emailAddress,
                id: userData[i].userId
            });
        }
    }
    return processed;
}

// After (simpler)
function processUserData(userData) {
    return userData
        .filter(user => user.active)
        .map(user => ({
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddress,
            id: user.userId
        }));
}
```

### 2. Extract Functions

```javascript
// Before (one long function)
function handleSubmit(form) {
    const email = form.email.value;
    if (!email.includes('@')) {
        showError('Invalid email');
        return;
    }
    const password = form.password.value;
    if (password.length < 8) {
        showError('Password too short');
        return;
    }
    // ... more validation
}

// After (extracted functions)
function validateEmail(email) {
    if (!email.includes('@')) {
        showError('Invalid email');
        return false;
    }
    return true;
}

function validatePassword(password) {
    if (password.length < 8) {
        showError('Password too short');
        return false;
    }
    return true;
}

function handleSubmit(form) {
    if (!validateEmail(form.email.value)) return;
    if (!validatePassword(form.password.value)) return;
    // ... submit
}
```

### 3. Rename for Clarity

```javascript
// Before (unclear names)
function calc(x, y) {
    return x.filter(i => i.t === y);
}

// After (clear intent)
function filterItemsByType(items, type) {
    return items.filter(item => item.type === type);
}
```

## AI Refactoring Prompts

### Simplify Code

```
"This function is hard to follow. Can you simplify it
while keeping the same behavior?"
```

### Extract Functions

```
"This function does too many things. Can you split it
into smaller functions with clear responsibilities?"
```

### Improve Naming

```
"Review these variable and function names. Suggest
clearer names that better describe their purpose."
```

### Add Documentation

```
"Can you add JSDoc comments to this code explaining
the purpose, parameters, and return values?"
```

### Remove Dead Code

```
"Identify any code that isn't being used or doesn't
contribute to the output."
```

## What AI Handles Well

- เปลี่ยนชื่ออย่างสม่ำเสมอ
- แยกฟังก์ชันที่ชัดเจน
- ทำให้ boolean logic ง่ายขึ้น
- แปลง loop เป็น array methods
- เพิ่ม null checks ที่ขาดหาย
- จัดรูปแบบโค้ด

## What Needs Human Judgment

- การตัดสินใจด้าน architecture
- การแลกเปลี่ยน performance
- ผลกระทบด้านความปลอดภัย
- การเปลี่ยนแปลง business logic

## Testing Refactored Code

ตรวจสอบเสมอว่าพฤติกรรมไม่เปลี่ยน:

```bash
# Run tests before
npm test

# Refactor

# Run tests after
npm test

# If tests fail, investigate
```

## Refactoring Checklist

- [ ] คุณมี tests หรือการตรวจสอบด้วยมือไหม?
- [ ] การเปลี่ยนแปลงเล็กและโฟกัสไหม?
- [ ] คุณ commit ก่อนเริ่มแล้วไหม?
- [ ] Tests ผ่านหลังจากเปลี่ยนแล้วไหม?
- [ ] โค้ดอ่านง่ายขึ้นแล้วไหม?
