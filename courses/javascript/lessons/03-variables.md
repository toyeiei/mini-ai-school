# Variables

Variables are containers for storing data values. Think of them as labeled boxes where you can put information.

## Declaring Variables

In JavaScript, we have three ways to declare variables:

```javascript
let age = 25;        // can be reassigned
const name = 'Alex'; // cannot be reassigned
var oldStyle = 10;   // legacy, avoid using
```

## Naming Rules

- Must start with a letter, underscore, or dollar sign
- Can contain numbers after the first character
- Case-sensitive: `myVar` and `myvar` are different
- Cannot use reserved words like `let`, `const`, `if`

## Good Variable Names

```javascript
let userName = 'Maria';
let itemCount = 42;
let isLoggedIn = true;
let totalPrice = 99.99;
```

## Data Types

Variables can hold different types of data:

```javascript
let text = "Hello";        // String
let number = 42;           // Number
let decimal = 3.14;         // Number (float)
let isActive = true;       // Boolean
let nothing = null;         // Null
let notDefined = undefined; // Undefined
```

## Changing Values

With `let`, you can change the value later:

```javascript
let score = 0;
score = 10;
score = score + 5;  // score is now 15
```

With `const`, the value stays fixed:

```javascript
const PI = 3.14159;
// PI = 3;  // Error! Cannot reassign constant
```

## Best Practice

Use `const` by default. Only use `let` when you need to reassign the variable. This makes your code predictable.
