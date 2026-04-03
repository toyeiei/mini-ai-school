# Control Flow

Control Flow กำหนดลำดับการทำงานของโค้ด โดยปกติโค้ดจะทำงานจากบนลงล่าง แต่เราสามารถเปลี่ยนแปลงลำดับนั้นได้

## If Statements

รันโค้ดเฉพาะเมื่อเงื่อนไขเป็นจริง:

```javascript
let age = 18;

if (age >= 18) {
    console.log('You can vote!');
}
```

## If-Else

รันโค้ดต่างกันตามเงื่อนไข:

```javascript
let temperature = 30;

if (temperature > 30) {
    console.log('Hot day!');
} else {
    console.log('Nice weather.');
}
```

## Else If

เชื่อมโยงหลายเงื่อนไข:

```javascript
let score = 85;

if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else {
    console.log('Need improvement');
}
```

## Comparison Operators

- `==` เท่ากับ (loose)
- `===` เท่ากับ (strict)
- `!=` ไม่เท่ากับ
- `!==` ไม่เท่ากับ (strict)
- `>` มากกว่า
- `<` น้อยกว่า
- `>=` มากกว่าหรือเท่ากับ
- `<=` น้อยกว่าหรือเท่ากับ

## Logical Operators

ผสมเงื่อนไข:

```javascript
// AND - ทั้งสองเงื่อนไขต้องเป็นจริง
if (age >= 18 && hasLicense) {
    console.log('Can drive');
}

// OR - อย่างน้อยหนึ่งเงื่อนไขต้องเป็นจริง
if (isMember || hasTicket) {
    console.log('Access granted');
}

// NOT - สลับเงื่อนไข
if (!isBanned) {
    console.log('Welcome!');
}
```

## Switch Statements

จับค่าหนึ่งเทียบกับหลายตัวเลือก:

```javascript
let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Start of work week');
        break;
    case 'Friday':
        console.log('End of work week');
        break;
    default:
        console.log('Regular day');
}
```

## Ternary Operator

วิธีลัดสำหรับ if-else แบบง่าย:

```javascript
let status = age >= 18 ? 'adult' : 'minor';
```
