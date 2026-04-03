# Objects

Objects คือคอลเลกชันของ key-value pairs พวกมันให้คุณรวบรวมข้อมูลและฟังก์ชันที่เกี่ยวข้องไว้ด้วยกัน

## การสร้าง Objects

```javascript
let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
```

## การเข้าถึง Properties

มีสองวิธีในการเข้าถึง properties ของ object:

```javascript
let person = { name: 'Alice', age: 30 };

// Dot notation
person.name;   // 'Alice'

// Bracket notation
person['age']; // 30
```

## การแก้ไข Objects

```javascript
let user = { name: 'Bob' };

// เพิ่ม property
user.email = 'bob@example.com';

// เปลี่ยน property
user.name = 'Robert';

// ลบ property
delete user.name;
```

## Nested Objects

Objects สามารถบรรจุ objects อื่นได้:

```javascript
let company = {
    name: 'Tech Corp',
    address: {
        street: '123 Main St',
        city: 'San Francisco',
        zip: '94102'
    }
};

company.address.city;  // 'San Francisco'
```

## Object Methods

Objects สามารถมี functions ได้:

```javascript
let calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};

calculator.add(2, 3);      // 5
calculator.multiply(4, 5); // 20
```

## This Keyword

ใช้ `this` เพื่ออ้างถึง object จากภายใน methods ของมัน:

```javascript
let person = {
    name: 'Alice',
    greet() {
        return 'Hello, I am ' + this.name;
    }
};

person.greet();  // 'Hello, I am Alice'
```

## Methods ที่มีประโยชน์

```javascript
let obj = { a: 1, b: 2, c: 3 };

// รับ keys ทั้งหมด
Object.keys(obj);   // ['a', 'b', 'c']

// รับ values ทั้งหมด
Object.values(obj); // [1, 2, 3]

// รับ entries ทั้งหมด
Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
```

## Destructuring

แยกค่าออกเป็นตัวแปร:

```javascript
let person = { name: 'Alice', age: 30 };

// ก่อน
let name = person.name;
let age = person.age;

// หลัง (destructuring)
let { name, age } = person;
```

## Spread Operator

คัดลอกและรวม objects:

```javascript
let base = { a: 1, b: 2 };
let extended = { ...base, c: 3 };  // { a: 1, b: 2, c: 3 }
```
