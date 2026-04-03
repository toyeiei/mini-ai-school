# Functions

Functions คือบล็อกโค้ดที่ใช้ซ้ำได้ซึ่งทำงานเฉพาะอย่าง พวกมันช่วยให้คุณจัดระเบียบและนำโค้ดกลับมาใช้ใหม่ได้

## Function Declaration

กำหนด function โดยใช้คีย์เวิร์ด `function`:

```javascript
function greet(name) {
    return 'Hello, ' + name + '!';
}

// เรียก function
let message = greet('Alice');
console.log(message); // "Hello, Alice!"
```

## Parameters และ Arguments

Parameters คือตัวแทนในนิยามของ function Arguments คือค่าจริงที่ส่งเข้าไปเมื่อเรียก:

```javascript
function add(a, b) {  // a และ b คือ parameters
    return a + b;
}

add(5, 3);  // 5 และ 3 คือ arguments
```

## Return Values

Functions สามารถคืนค่าได้โดยใช้ `return`:

```javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // 20
```

## Default Parameters

กำหนดค่าเริ่มต้น:

```javascript
function greet(name = 'Guest') {
    return 'Welcome, ' + name;
}

greet();        // "Welcome, Guest"
greet('Sam');   // "Welcome, Sam"
```

## Arrow Functions

รูปแบบย่อที่กระชับกว่า:

```javascript
// แบบดั้งเดิม
function square(x) {
    return x * x;
}

// Arrow function
const square = (x) => x * x;

// หลาย parameters
const add = (a, b) => a + b;
```

## Scope

ตัวแปรที่ประกาศใน function จะเป็น local เฉพาะใน function นั้น:

```javascript
function test() {
    let localVar = 'I am local';
    console.log(localVar); // ทำงานได้
}

test();
console.log(localVar); // Error! ไม่ได้กำหนดไว้
```

## แนวปฏิบัติที่ดี

- ตั้งชื่อ function ให้ชัดเจนและสื่อความหมาย
- ให้ function ทำงานเพียงอย่างเดียว
- รักษา function ให้สั้น (เหมาะสมที่ไม่เกิน 20 บรรทัด)
