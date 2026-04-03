# Objects

Objects are collections of key-value pairs. They let you group related data and functionality together.

## Creating Objects

```javascript
let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
```

## Accessing Properties

Two ways to access object properties:

```javascript
let person = { name: 'Alice', age: 30 };

// Dot notation
person.name;   // 'Alice'

// Bracket notation
person['age']; // 30
```

## Modifying Objects

```javascript
let user = { name: 'Bob' };

// Add property
user.email = 'bob@example.com';

// Change property
user.name = 'Robert';

// Delete property
delete user.name;
```

## Nested Objects

Objects can contain other objects:

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

Objects can have functions:

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

Use `this` to refer to the object from within its methods:

```javascript
let person = {
    name: 'Alice',
    greet() {
        return 'Hello, I am ' + this.name;
    }
};

person.greet();  // 'Hello, I am Alice'
```

## Useful Methods

```javascript
let obj = { a: 1, b: 2, c: 3 };

// Get all keys
Object.keys(obj);   // ['a', 'b', 'c']

// Get all values
Object.values(obj); // [1, 2, 3]

// Get all entries
Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
```

## Destructuring

Extract values into variables:

```javascript
let person = { name: 'Alice', age: 30 };

// Before
let name = person.name;
let age = person.age;

// After (destructuring)
let { name, age } = person;
```

## Spread Operator

Copy and merge objects:

```javascript
let base = { a: 1, b: 2 };
let extended = { ...base, c: 3 };  // { a: 1, b: 2, c: 3 }
```
