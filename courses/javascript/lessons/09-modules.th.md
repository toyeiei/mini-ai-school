# Modules

Modules ให้คุณจัดระเบียบโค้ดเป็นไฟล์แยกกันและแชร์ฟังก์ชันระหว่างไฟล์เหล่านั้น

## ทำไมต้องใช้ Modules?

- จัดระเบียบโค้ดเป็นหน่วยตรรกะ
- นำโค้ดกลับมาใช้ใหม่ในหลายไฟล์
- ซ่อนรายละเอียดการทำงาน
- จัดการ dependencies

## การ Export

ส่งออก functions, objects หรือ variables จาก module:

```javascript
// math.js

// Named export
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}
```

## การ Import

ใช้ exports ในไฟล์อื่น:

```javascript
// app.js

// Import named export
import { add, PI } from './math.js';

// Import default export
import multiply from './math.js';

// Import everything
import * as math from './math.js';

console.log(math.add(1, 2));
console.log(math.PI);
```

## CommonJS (Node.js)

Node.js ใช้รูปแบบ module syntax ที่ต่างกัน:

```javascript
// Exporting
module.exports = { add, multiply };

// Importing
const { add } = require('./math.js');
```

## ES Modules ใน Browser

ใน HTML บอกเบราว์เซอร์ว่าคุณกำลังใช้ modules:

```javascript
<script type="module" src="app.js"></script>
```

## Module Patterns

```javascript
// Re-export from another file
export { add } from './math.js';

// Rename exports
export { add as sum };

// Rename imports
import { add as sum } from './math.js';
```

## แนวปฏิบัติที่ดี

- หนึ่ง module ต่อหนึ่งไฟล์
- ชื่อ module ให้ชัดเจนและสื่อความหมาย
- รวบรวมฟังก์ชันที่เกี่ยวข้องไว้ด้วยกัน
- รักษาให้ module เน้นหนึ่งอย่าง (single responsibility)
- ใช้ barrel files เพื่อลดความซับซ้อนของการ import

## โครงสร้างตัวอย่าง

```javascript
src/
├── utils/
│   ├── format.js      // formatting utilities
│   ├── validate.js    // validation functions
│   └── index.js       // re-exports everything
├── app.js             // main application
```

```javascript
// utils/index.js
export { formatDate } from './format.js';
export { validateEmail } from './validate.js';
```

```javascript
// app.js
import { formatDate, validateEmail } from './utils/index.js';
```
