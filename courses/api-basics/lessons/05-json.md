# JSON Data

JSON (JavaScript Object Notation) is the most common data format for APIs.

## JSON Structure

```json
{
    "name": "Alice",
    "age": 25,
    "isStudent": false
}
```

## Data Types

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

## Nested Objects

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

## Arrays of Objects

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
// JavaScript object to JSON string
const user = { name: 'Alice', age: 25 };
const json = JSON.stringify(user);
// '{"name":"Alice","age":25}'

// JSON string to JavaScript object
const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);
// { name: 'Alice', age: 25 }
```

## Common Mistakes

```javascript
// ❌ Wrong - body must be string
body: { name: 'Alice' }

// ✅ Correct - stringify the object
body: JSON.stringify({ name: 'Alice' })

// ❌ Wrong - forgot headers
headers: { 'Content-Type': 'application/json' }
```

## Summary

- JSON is lightweight and easy to read
- Uses key-value pairs
- Supports strings, numbers, booleans, arrays, objects
- `JSON.stringify()` sends, `JSON.parse()` receives
