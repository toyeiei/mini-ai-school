# Testing AI-Generated Code

โค้ดที่ AI สร้างต้องได้รับการทดสอบเหมือนโค้ดที่คนเขียน นี่คือวิธีจัดการ testing ใน vibe coding workflow

## Why Test AI Code

- AI สามารถสร้างโค้ดที่ดูถูกต้องแต่จริงๆ แล้วผิด
- Requirements อาจไม่แปลเป็นโค้ดได้สมบูรณ์
- Edge cases มักถูกละเลย
- Bug ส่งผลกระทบต่อผู้ใช้ไม่ว่าโค้ดจะถูกเขียนอย่างไร

## Types of Tests

### Unit Tests

ทดสอบฟังก์ชันแต่ละตัวแยกกัน

```javascript
// Test utility functions
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function testValidateEmail() {
    console.assert(validateEmail('test@example.com') === true);
    console.assert(validateEmail('invalid') === false);
    console.assert(validateEmail('') === false);
}
```

### Integration Tests

ทดสอบว่า component ทำงานร่วมกันได้ดีไหม

```javascript
// Test API integration
async function testUserRegistration() {
    const user = await registerUser({
        email: 'new@example.com',
        password: 'password123'
    });
    console.assert(user.email === 'new@example.com');
    console.assert(user.id !== undefined);
}
```

### Manual Testing

ทดสอบ flow ที่ทำอัตโนมัติยาก

- UI ดูถูกต้องไหม?
- Navigation ใช้ง่ายไหม?
- ข้อความ error สื่อความหมายไหม?

## Writing Tests for AI Code

### 1. Test Happy Path

```javascript
// Basic functionality works
test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});
```

### 2. Test Edge Cases

```javascript
// Empty arrays
test('handles empty array', () => {
    expect(add(0, 0)).toBe(0);
});

// Negative numbers
test('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
});

// Large numbers
test('handles large numbers', () => {
    expect(add(1e10, 1e10)).toBe(2e10);
});
```

### 3. Test Error Cases

```javascript
// Invalid input
test('throws on invalid input', () => {
    expect(() => add('hello', 'world')).toThrow();
});
```

## AI for Test Generation

ใช้ AI ช่วยสร้าง tests:

```
"Write unit tests for this function that validates
email addresses. Cover: valid emails, invalid emails,
empty strings, and special characters."
```

### Review AI-Generated Tests

AI อาจสร้าง tests ที่:
- ไม่ตรงกับ requirements จริงของคุณ
- ทดสอบพฤติกรรมผิด
- พลาด edge cases ที่สำคัญ
- มี assertion ที่ผิด

ตรวจสอบ tests จาก AI เสมอ

## Testing Workflow

```
Write Code → Write Tests → Run Tests → Fix Issues → Repeat
      ↑                                      │
      └────────────────────────────────────┘
```

## What to Test

### High Priority
- User authentication
- การชำระเงิน
- Data validation
- Business logic ที่สำคัญ

### Medium Priority
- API integrations
- Data transformations
- อัลกอริทึมที่ซับซ้อน

### Low Priority
- Simple getters/setters
- Utility functions ง่ายๆ

## Test Coverage Goals

| Priority | Coverage Target |
|----------|----------------|
| Critical paths | 90-100% |
| Important features | 70-80% |
| Nice to have | 40-60% |

## Testing Checklist for AI Code

- [ ] ผ่าน happy path tests ไหม?
- [ ] ครอบคลุม edge cases แล้วไหม?
- [ ] Error cases ทำงานถูกต้องไหม?
- [ ] ทดสอบด้วยมือแล้วไหม?
- [ ] มี integration tests ไหม?
- [ ] Tests ตรงกับ requirements ไหม?

## Key Principle

AI สร้างโค้ดได้เร็วกว่าที่คุณเขียนเอง แต่คุณต้องทดสอบทั้งหมด ใช้ AI สร้าง tests ด้วยก็ได้ แต่ต้องตรวจสอบเสมอ
