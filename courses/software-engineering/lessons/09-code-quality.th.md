# Code Quality

โค้ดที่มีคุณภาพสูงจะอ่านเข้าใจง่าย ดูแลรักษาได้ง่าย และขยายได้ง่าย ลด bugs และช่วยให้ทีมทำงานร่วมกันได้อย่างมีประสิทธิภาพ

## การอ่านง่าย (Readability)

### ใช้ชื่อที่มีความหมาย

```javascript
// ไม่ดี
const d = new Date();
const x = users.filter(u => u.a > 18);
const tmp = calculate();

// ดี
const currentDate = new Date();
const adultUsers = users.filter(user => user.age > 18);
const temporaryValue = calculate();
```

### เขียนฟังก์ชันสั้นๆ

แต่ละฟังก์ชันควรทำสิ่งเดียวให้ดี

```javascript
// ไม่ดี - ฟังก์ชันทำหลายอย่าง
function processUser(user) {
    validateUser(user);
    saveToDatabase(user);
    sendWelcomeEmail(user);
    logActivity(user);
}

// ดี - แยกความรับผิดชอบ
function processUser(user) {
    if (!validateUser(user)) throw new Error('Invalid');
    saveToDatabase(user);
    notifyUser(user);
}

function validateUser(user) { /* ... */ }
function saveToDatabase(user) { /* ... */ }
function notifyUser(user) {
    sendWelcomeEmail(user);
    logActivity(user);
}
```

### หลีกเลี่ยง Magic Numbers

```javascript
// ไม่ดี
if (users.length > 86400000) { ... }

// ดี
const MILLISECONDS_PER_DAY = 86400000;
if (users.length > MILLISECONDS_PER_DAY) { ... }
```

## การดูแลรักษา (Maintainability)

### DRY - Don't Repeat Yourself

```javascript
// ไม่ดี - โค้ดซ้ำ
function getFullName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    return 'Hello, ' + user.firstName + ' ' + user.lastName + '!';
}

// ดี
function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    return `Hello, ${getFullName(user)}!`;
}
```

### YAGNI - You Aren't Gonna Need It

อย่าเพิ่มฟังก์ชันนาลจนกว่าจะต้องใช้

```javascript
// ไม่ดี - Over-engineering
class User {
    constructor(name) {
        this.name = name;
    }
    // เพิ่มไว้ "เผื่อไว้ก่อน"
    updatePhone(phone) { ... }
    updateAddress(address) { ... }
    changeEmail(email) { ... }
}

// ดี - เฉพาะที่ต้องใช้ตอนนี้
class User {
    constructor(name) {
        this.name = name;
    }
}
```

## Code Style

### การจัดรูปแบบที่สม่ำเสมอ

```javascript
// เลือกรูปแบบหนึ่งแล้วใช้ให้สม่ำเสมอ
const user = {
    name: 'Alice',           // 2 spaces, trailing comma
    email: 'alice@example.com'
};

// อย่าผสม
const user = {name: 'Alice', email: 'alice@example.com'}
```

### คอมเมนต์ที่มีคุณค่า

```javascript
// ไม่ดี - บอกสิ่งที่ชัดเจน
// เพิ่ม counter
counter++;

// ดี - อธิบายว่าทำไม
// ชดเชย off-by-one จาก index ที่เริ่มจากศูนย์
counter++;
```

## พื้นฐาน Performance

### หลีกเลี่ยงการทำงานที่ไม่จำเป็น

```javascript
// ไม่ดี - คำนวณใหม่ทุกรอบ
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        adults.push(users[i]); // length คำนวณใหม่ทุกครั้ง
    }
}

// ดี
const adultUsers = users.filter(user => user.age > 18);
```

### ระวัง Side Effects

```javascript
// ไม่ดี - แก้ไข state ภายนอก
function calculateTotal(items) {
    total = 0;  // Global!
    for (const item of items) total += item.price;
    return total;
}

// ดี - Pure function
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}
```

## Code Reviews

ประโยชน์:
- จับ bugs ก่อนเข้า production
- แบ่งปันความรู้ในทีม
- รักษาสไตล์ให้สม่ำเสมอ
- ปรับปรุงคุณภาพโค้ดโดยรวม

เมื่อรีวิว:
- เคารพและสร้างสรรค์
- โฟกัสที่โค้ด ไม่ใช่บุคคล
- เสนอทางเลือก ไม่ใช่แค่วิจารณ์
- ยอมรับโซลูชันที่ดี
