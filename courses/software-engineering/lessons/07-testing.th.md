# Testing

Testing ช่วยให้มั่นใจว่าโค้ดทำงานถูกต้องและป้องกัน bugs จากเข้าสู่ production

## ทำไมต้อง Test?

- จับ bugs ก่อนถึงมือผู้ใช้
- เอกสารพฤติกรรมที่คาดหวัง
- ทำให้ refactor ได้อย่างมั่นใจ
- ลดเวลาในการ debug

## ประเภทของ Tests

### Unit Tests

ทดสอบฟังก์ชันหรือ component แต่ละตัวแยกกัน

```javascript
// ทดสอบฟังก์ชันเดียว
function add(a, b) {
    return a + b;
}

function testAdd() {
    console.assert(add(1, 2) === 3, '1 + 2 should equal 3');
    console.assert(add(-1, 1) === 0, '-1 + 1 should equal 0');
}
```

### Integration Tests

ทดสอบว่า components ทำงานร่วมกันได้อย่างไร

```javascript
// ทดสอบขั้นตอนการสมัครสมาชิก
async function testRegistration() {
    const user = await registerUser('alice@example.com', 'password123');
    console.assert(user.email === 'alice@example.com');
    console.assert(await verifyPassword(user, 'password123'));
}
```

### End-to-End Tests

ทดสอบขั้นตอนทั้งหมดของแอปพลิเคชัน

```javascript
// ทดสอบขั้นตอน login
async function testLogin() {
    await browser.goto('/login');
    await browser.fill('#email', 'alice@example.com');
    await browser.fill('#password', 'password123');
    await browser.click('#submit');
    await browser.waitForSelector('.dashboard');
    console.assert(browser.url().includes('/dashboard'));
}
```

## Test-Driven Development (TDD)

1. เขียน test ที่ล้มเหลวก่อน
2. เขียนโค้ดขั้นต่ำที่ทำให้ผ่าน
3. Refactor

```
# Red - เขียน test ที่ล้มเหลว
# Green - เขียนโค้ดขั้นต่ำ
# Refactor - ปรับปรุงโค้ด
```

## เขียน Tests ที่ดี

### ทดสอบสิ่งเดียวในแต่ละ Test

```javascript
// ไม่ดี - ทดสอบหลายอย่าง
function testUser() {
    const user = createUser('Alice', 'alice@example.com');
    console.assert(user.name === 'Alice');
    console.assert(user.email === 'alice@example.com');
    console.assert(user.isActive === true);
}

// ดี - หนึ่ง assertion ต่อหนึ่ง test
function testUserName() {
    const user = createUser('Alice', 'alice@example.com');
    console.assert(user.name === 'Alice');
}
```

### ใช้ชื่อที่อธิบายได้ชัดเจน

```javascript
// ไม่ดี
function test1() { ... }

// ดี
function testRegistrationWithValidEmail() { ... }
function testRegistrationWithInvalidEmailThrows() { ... }
```

### Arrange-Act-Assert

```javascript
// Arrange - เตรียมข้อมูล test
const user = createUser('Alice');

// Act - ทำการกระทำ
const result = user.authenticate('correctpassword');

// Assert - ตรวจสอบผลลัพธ์
console.assert(result === true);
```

## Test Coverage

Coverage วัดว่ามีโค้ดถูกทดสอบเท่าไร

```
# รัน tests และตรวจสอบ coverage
npm test -- --coverage

# รายงาน coverage
Statements   : 85%
Branches     : 78%
Functions    : 90%
Lines        : 85%
```

มุ่งหวัง coverage ที่มีความหมาย ไม่ใช่ 100% Tests ที่ไม่ตรวจสอบพฤติกรรมไม่มีคุณค่า

## เมื่อไหร่ควร Test

- ก่อน push โค้ด
- หลังแก้ bug (regression test)
- ก่อน refactor
- ระหว่าง code review
