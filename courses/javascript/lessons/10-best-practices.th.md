# Best Practices

ยินดีด้วยที่คุณจบคอร์สนี้! นี่คือแนวทางสำหรับการเขียนโค้ดที่สะอาดและดูแลรักษาได้ง่าย

## Code Style

- ใช้การเยื้องที่สม่ำเสมอ (2 หรือ 4 ช่องว่าง)
- เว้นวรรครอบตัวดำเนินการ
- ใช้ชื่อตัวแปรที่สื่อความหมาย
- รักษาให้แต่ละบรรทัดไม่เกิน 100 ตัวอักษร

## Naming Conventions

```javascript
// Variables and functions: camelCase
let userName = 'Alice';
function calculateTotal() {}

// Constants: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_URL = 'https://api.example.com';

// Classes: PascalCase
class UserAccount {}

// Private things: underscore prefix
let _privateVar = 'hidden';
```

## หลีกเลี่ยง Magic Numbers

```javascript
// Bad
if (userAge > 18) {}

// Good
const LEGAL_AGE = 18;
if (userAge > LEGAL_AGE) {}
```

## Early Returns

คืนค่าก่อนเพื่อหลีกเลี่ยงโค้ดที่ซ้อนกันลึกเกินไป:

```javascript
// Bad
function process(data) {
    if (data) {
        if (data.valid) {
            // deep nesting
        }
    }
}

// Good
function process(data) {
    if (!data) return;
    if (!data.valid) return;
    // main logic
}
```

## ใช้เงื่อนไขที่สื่อความหมาย

```javascript
// Bad
if (x && y && !z) {}

// Good
const isValid = x && y && !z;
if (isValid) {}
```

## รักษาให้ Functions เล็ก

แต่ละ function ควรทำสิ่งหนึ่งสิ่งให้ดี:

```javascript
// Bad
function handleForm() {
    // validate, sanitize, save, send email, update UI...
}

// Good
function validateForm() {}
function sanitizeInput() {}
function saveToDatabase() {}
```

## Error Handling

ต้องคาดหวังเสมอว่าอะไรอาจผิดพลาด:

```javascript
// Always use try-catch with async/await
async function fetchData() {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('Request failed');
        return await response.json();
    } catch (error) {
        console.error('Failed:', error.message);
        throw error;
    }
}
```

## Comments

เขียน comments ที่อธิบาย *ทำไม* ไม่ใช่ *ทำอะไร*:

```javascript
// Bad
// Increment counter
i++;

// Good
// Compensate for off-by-one error in API
pageNum++;
```

## Testing

เขียนโค้ดที่ทดสอบได้:

```javascript
// Hard to test
function handleClick() {
    document.getElementById('output').innerHTML = calculate();
}

// Easy to test
function calculate() { return 1 + 1; }
function display(element, value) { element.innerHTML = value; }
```

## สรุป

- เขียนโค้ดที่อ่านง่ายและสม่ำเสมอ
- ใช้ชื่อที่สื่อความหมาย
- รักษาให้ functions เล็กและเน้นหนึ่งอย่าง
- จัดการ errors อย่างเหมาะสม
- ทดสอบโค้ดของคุณ
- และเรียนรู้ต่อไปเรื่อยๆ!
