# พื้นฐานการเขียนโปรแกรม

มาเรียนรู้ส่วนประกอบพื้นฐานของโปรแกรมกัน

## Statements

Statement คือคำสั่งเดียวที่คอมพิวเตอร์จะปฏิบัติ ใน JavaScript สิ้นสุด statement ด้วยเครื่องหมายอัฒภาค

```javascript
console.log('Hello, World!');
```

## Expressions

Expression คือสิ่งที่ผลิตค่าออกมา คุณสามารถนึกถึงมันว่าเป็นคำถามที่มีคำตอบ

```javascript
5 + 3  // evaluates to 8
```

## Comments

Comments คือบันทึกสำหรับมนุษย์ที่อ่านโค้ด คอมพิวเตอร์จะข้ามมันไป

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment
*/
```

## การแสดงผลพื้นฐาน

คุณสามารถแสดงข้อมูลโดยใช้ `console.log`:

```javascript
console.log('Message here');
console.log(42);
console.log(true);
```

## การรับข้อมูลพื้นฐาน

ในเบราว์เซอร์ คุณสามารถใช้ `prompt()` เพื่อขอรับข้อมูลจากผู้ใช้:

```javascript
let name = prompt('What is your name?');
console.log('Hello, ' + name);
```

## Whitespace

JavaScript โดยทั่วไปจะข้ามช่องว่าง แท็บ และการขึ้นบรรทัดใหม่ที่เกิน ใช้ whitespace เพื่อให้โค้ดอ่านง่าย:

```javascript
// Hard to read
let x=1+2;

// Easy to read
let x = 1 + 2;
```

## สรุป

- โปรแกรมประกอบด้วย statements
- Expressions ผลิตค่าออกมา
- Comments ช่วยให้มนุษย์เข้าใจโค้ดได้ง่ายขึ้น
- ใช้ `console.log` เพื่อแสดงผล
