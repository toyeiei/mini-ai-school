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

// Add to end
nums.push(4);      // [1, 2, 3, 4]

// Remove from end
nums.pop();        // [1, 2, 3]

// Add to beginning
nums.unshift(0);   // [0, 1, 2, 3]

// Remove from beginning
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

// map - transform each element
nums.map(n => n * 2);  // [6, 2, 8, 2, 10]

// filter - keep elements that pass a test
nums.filter(n => n > 2);  // [3, 4, 5]

// find - get first matching element
nums.find(n => n > 3);  // 4

// reduce - combine into single value
nums.reduce((sum, n) => sum + n, 0);  // 14
```

## การค้นหา Elements

```javascript
let items = ['a', 'b', 'c', 'd'];

// indexOf - position of element
items.indexOf('c');  // 2

// includes - does it exist?
items.includes('b');  // true
```

## Spread Operator

คัดลอกและรวม arrays:

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4]
```
