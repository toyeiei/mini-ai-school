# Best Practices

Congratulations on completing the course! Here are guidelines for writing clean, maintainable code.

## Code Style

- Use consistent indentation (2 or 4 spaces)
- Add spaces around operators
- Use meaningful variable names
- Keep lines under 100 characters

## Naming Conventions

```javascript
// Variables and functions: camelCase
let userName = 'Alice';
function calculateTotal() {}

// Constants: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_URL = 'https://api.example.com';

// Classes: PascalCase
class UserAccount {}

// Private things: underscore prefix
let _privateVar = 'hidden';
```

## Avoid Magic Numbers

```javascript
// Bad
if (userAge > 18) {}

// Good
const LEGAL_AGE = 18;
if (userAge > LEGAL_AGE) {}
```

## Early Returns

Return early to avoid deeply nested code:

```javascript
// Bad
function process(data) {
    if (data) {
        if (data.valid) {
            // deep nesting
        }
    }
}

// Good
function process(data) {
    if (!data) return;
    if (!data.valid) return;
    // main logic
}
```

## Use Descriptive Conditions

```javascript
// Bad
if (x && y && !z) {}

// Good
const isValid = x && y && !z;
if (isValid) {}
```

## Keep Functions Small

Each function should do one thing well:

```javascript
// Bad
function handleForm() {
    // validate, sanitize, save, send email, update UI...
}

// Good
function validateForm() {}
function sanitizeInput() {}
function saveToDatabase() {}
```

## Error Handling

Always expect things to go wrong:

```javascript
// Always use try-catch with async/await
async function fetchData() {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('Request failed');
        return await response.json();
    } catch (error) {
        console.error('Failed:', error.message);
        throw error;
    }
}
```

## Comments

Write comments that explain *why*, not *what*:

```javascript
// Bad
// Increment counter
i++;

// Good
// Compensate for off-by-one error in API
pageNum++;
```

## Testing

Write testable code:

```javascript
// Hard to test
function handleClick() {
    document.getElementById('output').innerHTML = calculate();
}

// Easy to test
function calculate() { return 1 + 1; }
function display(element, value) { element.innerHTML = value; }
```

## Summary

- Write readable, consistent code
- Use meaningful names
- Keep functions small and focused
- Handle errors gracefully
- Test your code
- Keep learning!
