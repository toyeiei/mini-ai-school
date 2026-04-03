# Variables

Variables คือตัวแปรที่ใช้เก็บค่าข้อมูล จงนึกถึงมันว่าเป็นกล่องที่มีป้ายชื่อ ซึ่งคุณสามารถใส่ข้อมูลลงไปได้

## การประกาศตัวแปร

ใน JavaScript มีสามวิธีในการประกาศตัวแปร:

```javascript
let age = 25;        // กำหนดค่าใหม่ได้
const name = 'Alex'; // กำหนดค่าใหม่ไม่ได้
var oldStyle = 10;   // แบบเก่า ควรหลีกเลี่ยง
```

## กฎการตั้งชื่อ

- ต้องเริ่มต้นด้วยตัวอักษร เครื่องหมายขีดล่าง หรือเครื่องหมายดอลลาร์
- สามารถมีตัวเลขได้หลังตัวอักษรแรก
- ตัวพิมพ์เล็กพิมพ์ใหญ่สำคัญ: `myVar` และ `myvar` ต่างกัน
- ใช้คำสงวน เช่น `let`, `const`, `if` ไม่ได้

## การตั้งชื่อตัวแปรที่ดี

```javascript
let userName = 'Maria';
let itemCount = 42;
let isLoggedIn = true;
let totalPrice = 99.99;
```

## Data Types

ตัวแปรสามารถเก็บข้อมูลประเภทต่างๆ ได้:

```javascript
let text = "Hello";        // String
let number = 42;           // Number
let decimal = 3.14;         // Number (float)
let isActive = true;       // Boolean
let nothing = null;         // Null
let notDefined = undefined; // Undefined
```

## การเปลี่ยนค่า

กับ `let` คุณสามารถเปลี่ยนค่าภายหลังได้:

```javascript
let score = 0;
score = 10;
score = score + 5;  // score ตอนนี้เป็น 15
```

กับ `const` ค่าจะคงที่:

```javascript
const PI = 3.14159;
// PI = 3;  // Error! กำหนดค่าใหม่ไม่ได้
```

## แนวปฏิบัติที่ดี

ใช้ `const` เป็นค่าเริ่มต้น ใช้ `let` เฉพาะเมื่อต้องเปลี่ยนค่าตัวแปร เพื่อให้โค้ดของคุณทำนายได้ง่ายขึ้น
