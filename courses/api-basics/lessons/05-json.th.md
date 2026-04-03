# ข้อมูล JSON

JSON (JavaScript Object Notation) เป็นรูปแบบข้อมูลที่พบได้บ่อยที่สุดสำหรับ APIs

## โครงสร้าง JSON

```json
{
    "name": "Alice",
    "age": 25,
    "isStudent": false
}
```

## ประเภทข้อมูล

```json
{
    "string": "Hello",
    "number": 42,
    "decimal": 3.14,
    "boolean": true,
    "null": null,
    "array": [1, 2, 3],
    "object": {
        "key": "value"
    }
}
```

## Objects ที่ซ้อนกัน

```json
{
    "user": {
        "id": 1,
        "name": "Alice",
        "address": {
            "city": "Bangkok",
            "country": "Thailand"
        }
    }
}
```

## Arrays ของ Objects

```json
{
    "users": [
        { "id": 1, "name": "Alice" },
        { "id": 2, "name": "Bob" }
    ]
}
```

## JavaScript ↔ JSON

```javascript
// JavaScript object เป็น JSON string
const user = { name: 'Alice', age: 25 };
const json = JSON.stringify(user);
// '{"name":"Alice","age":25}'

// JSON string เป็น JavaScript object
const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);
// { name: 'Alice', age: 25 }
```

## ข้อผิดพลาดที่พบบ่อย

```javascript
// ❌ ผิด - body ต้องเป็น string
body: { name: 'Alice' }

// ✅ ถูกต้อง - แปลง object เป็น string
body: JSON.stringify({ name: 'Alice' })

// ❌ ผิด - ลืม headers
headers: { 'Content-Type': 'application/json' }
```

## สรุป

- JSON เบาและอ่านง่าย
- ใช้ key-value pairs
- รองรับ strings, numbers, booleans, arrays, objects
- `JSON.stringify()` ใช้ส่งข้อมูล, `JSON.parse()` ใช้รับข้อมูล
