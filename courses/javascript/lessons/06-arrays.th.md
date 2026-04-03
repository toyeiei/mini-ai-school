# Arrays

Arrays คือคอลเลกชันที่เรียงลำดับของ items พวกมันให้คุณเก็บหลายค่าในตัวแปรเดียว

## การสร้าง Arrays

```javascript
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null];
```

## การเข้าถึง Elements

Arrays เริ่มนับจากดัชนี 0 (element แรกอยู่ที่ตำแหน่ง 0):

```javascript
let fruits = ['apple', 'banana', 'orange'];

fruits[0];  // 'apple'
fruits[1];  // 'banana'
fruits[2];  // 'orange'
fruits.length;  // 3
```

## การแก้ไข Arrays

```javascript
let nums = [1, 2, 3];

// เพิ่มที่ท้าย
nums.push(4);      // [1, 2, 3, 4]

// ลบที่ท้าย
nums.pop();        // [1, 2, 3]

// เพิ่มที่ต้น
nums.unshift(0);   // [0, 1, 2, 3]

// ลบที่ต้น
nums.shift();      // [1, 2, 3]
```

## การวนลูป Arrays

วนผ่านแต่ละ element:

```javascript
let colors = ['red', 'green', 'blue'];

// for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// forEach
colors.forEach((color, index) => {
    console.log(index + ': ' + color);
});
```

## Array Methods ที่มีประโยชน์

```javascript
let nums = [3, 1, 4, 1, 5];

// map - แปลงแต่ละ element
nums.map(n => n * 2);  // [6, 2, 8, 2, 10]

// filter - เก็บ element ที่ผ่านเงื่อนไข
nums.filter(n => n > 2);  // [3, 4, 5]

// find - หา element ที่ตรงกันเป็นตัวแรก
nums.find(n => n > 3);  // 4

// reduce - รวมเป็นค่าเดียว
nums.reduce((sum, n) => sum + n, 0);  // 14
```

## การค้นหา Elements

```javascript
let items = ['a', 'b', 'c', 'd'];

// indexOf - ตำแหน่งของ element
items.indexOf('c');  // 2

// includes - มีอยู่หรือไม่?
items.includes('b');  // true
```

## Spread Operator

คัดลอกและรวม arrays:

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4]
```
