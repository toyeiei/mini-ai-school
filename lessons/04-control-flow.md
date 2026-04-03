# Control Flow

Control flow determines the order in which code executes. By default, code runs top to bottom, but we can change that.

## If Statements

Execute code only when a condition is true:

```javascript
let age = 18;

if (age >= 18) {
    console.log('You can vote!');
}
```

## If-Else

Execute different code based on conditions:

```javascript
let temperature = 30;

if (temperature > 30) {
    console.log('Hot day!');
} else {
    console.log('Nice weather.');
}
```

## Else If

Chain multiple conditions:

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

- `==` equals (loose)
- `===` equals (strict)
- `!=` not equals
- `!==` not equals (strict)
- `>` greater than
- `<` less than
- `>=` greater or equal
- `<=` less or equal

## Logical Operators

Combine conditions:

```javascript
// AND - both must be true
if (age >= 18 && hasLicense) {
    console.log('Can drive');
}

// OR - at least one must be true
if (isMember || hasTicket) {
    console.log('Access granted');
}

// NOT - inverts the condition
if (!isBanned) {
    console.log('Welcome!');
}
```

## Switch Statements

Match one value against many options:

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

A shortcut for simple if-else:

```javascript
let status = age >= 18 ? 'adult' : 'minor';
```
