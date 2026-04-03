# Functions

Functions are reusable blocks of code that perform a specific task. They help you organize and reuse code.

## Function Declaration

Define a function using the `function` keyword:

```javascript
function greet(name) {
    return 'Hello, ' + name + '!';
}

// Call the function
let message = greet('Alice');
console.log(message); // "Hello, Alice!"
```

## Parameters and Arguments

Parameters are placeholders in the function definition. Arguments are actual values passed when calling:

```javascript
function add(a, b) {  // a and b are parameters
    return a + b;
}

add(5, 3);  // 5 and 3 are arguments
```

## Return Values

Functions can return values using `return`:

```javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // 20
```

## Default Parameters

Provide fallback values:

```javascript
function greet(name = 'Guest') {
    return 'Welcome, ' + name;
}

greet();        // "Welcome, Guest"
greet('Sam');   // "Welcome, Sam"
```

## Arrow Functions

A shorter syntax:

```javascript
// Traditional
function square(x) {
    return x * x;
}

// Arrow function
const square = (x) => x * x;

// With multiple parameters
const add = (a, b) => a + b;
```

## Scope

Variables declared inside a function are local to that function:

```javascript
function test() {
    let localVar = 'I am local';
    console.log(localVar); // Works
}

test();
console.log(localVar); // Error! Not defined
```

## Best Practices

- Give functions clear, descriptive names
- Keep functions focused on one task
- Keep functions short (ideally under 20 lines)
