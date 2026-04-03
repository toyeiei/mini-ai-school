# Debugging

Debugging is the process of finding and fixing bugs. Systematic debugging saves time and frustration.

## The Debugging Mindset

1. **Accept bugs are inevitable** - Everyone writes bugs
2. **Trust the process** - Systematic approach beats guessing
3. **Read error messages** - They often tell you exactly what went wrong
4. **Question assumptions** - Something you believe is wrong

## Steps for Systematic Debugging

### 1. Reproduce the Bug

Make the bug happen consistently.

```javascript
// Find the exact steps to trigger the bug
// "Click login button with empty email field"
// "Submit form when server is down"
```

### 2. Find the Root Cause

Use one of these strategies:

**Binary Search**
- Comment out half the code
- If bug still exists, the issue is in that half
- Repeat until you find the exact line

**Print Statements**
```javascript
function calculateTotal(items) {
    console.log('Input items:', items);
    let total = 0;
    for (const item of items) {
        console.log('Processing item:', item);
        total += item.price;
        console.log('Running total:', total);
    }
    console.log('Final total:', total);
    return total;
}
```

**Use Debugger**
```javascript
function calculateTotal(items) {
    debugger;  // Browser stops here
    let total = 0;
    for (const item of items) {
        debugger;  // Step through each iteration
        total += item.price;
    }
    return total;
}
```

### 3. Fix the Bug

- Fix the root cause, not the symptom
- Make the smallest change possible
- Verify your fix works

### 4. Prevent Regression

Add a test so this bug doesn't return.

## Common Bug Types

### Off-by-One Errors

```javascript
// Bug - Misses last element
for (let i = 0; i < arr.length - 1; i++) {
    process(arr[i]);
}

// Fix
for (let i = 0; i < arr.length; i++) {
    process(arr[i]);
}
```

### Null/Undefined Access

```javascript
// Bug - Doesn't check for null
user.profile.name;

// Fix - Guard against null
user?.profile?.name || 'Anonymous';
```

### Async Issues

```javascript
// Bug - Using value before it's loaded
fetchUser(userId);
console.log(user.name);  // undefined!

// Fix - Wait for the result
const user = await fetchUser(userId);
console.log(user.name);  // Works
```

### Scope Issues

```javascript
// Bug - Using loop variable after loop
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}  // Prints 3, 3, 3

// Fix - Use let instead of var
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}  // Prints 0, 1, 2
```

## Browser DevTools

- **Elements tab** - Inspect HTML/CSS
- **Console tab** - Run JavaScript, view logs
- **Sources tab** - Set breakpoints, step through code
- **Network tab** - Inspect HTTP requests
- **Application tab** - Check localStorage, cookies

## Debugging Checklist

- [ ] Can you reproduce the bug consistently?
- [ ] Do you understand what the code should do?
- [ ] Have you read the error message carefully?
- [ ] Can you narrow down where the bug is?
- [ ] Did you check for null/undefined?
- [ ] Did you check for async/await issues?
- [ ] Have you tested your fix?
- [ ] Did you add a test to prevent regression?
