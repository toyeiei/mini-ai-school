# Debugging AI Output

AI generates code that can contain bugs. Debugging AI output requires the same skills as debugging human-written code, plus specific strategies.

## Why AI Code Has Bugs

- AI predicts probable code, not necessarily correct code
- Limited context awareness
- May not understand your specific requirements
- Training data includes buggy code
- Assumptions may not match reality

## Debugging Process

### 1. Reproduce the Issue

```javascript
// Run the code and observe
const result = calculateTotal([{ price: 10 }, { price: 20 }]);
console.log(result);  // Expected: 30, Got: ???
```

### 2. Isolate the Problem

```javascript
// Comment out parts to find the issue
const result = calculateTotal([{ price: 10 }, { price: 20 }]);
// If this is wrong, simplify further
// calculateTotal([{ price: 10 }])
```

### 3. Check AI's Assumptions

AI might assume:
- Inputs are always valid
- APIs work a certain way
- Data has a specific format

### 4. Fix and Verify

```javascript
// After finding the bug
// 1. Ask AI to explain
"Why does my function return undefined?"

// 2. Ask for specific fix
"Can you add a check for undefined input?"

// 3. Verify the fix works
```

## Common AI Code Bugs

### Type Coercion Issues

```javascript
// AI might generate (buggy)
function add(a, b) {
    return a + b;
}
add("1", "2");  // Returns "12" instead of 3

// Fixed
function add(a, b) {
    return Number(a) + Number(b);
}
```

### Async/Await Mistakes

```javascript
// AI might generate (buggy)
const user = await fetchUser(id);
console.log(user.name);  // May run before fetch completes

// Fixed
async function getUser(id) {
    const user = await fetchUser(id);
    return user;
}
```

### Missing Null Checks

```javascript
// AI might generate (buggy)
function getUserCity(user) {
    return user.profile.address.city;
}

// Fixed
function getUserCity(user) {
    return user?.profile?.address?.city || 'Unknown';
}
```

## Debugging Strategies with AI

### Strategy 1: Ask for Explanation

```
"This function isn't working. Can you explain line by line
what it does and identify the bug?"
```

### Strategy 2: Add Logging

```
"Add console.log statements to trace the values of
important variables through this function"
```

### Strategy 3: Ask for Tests

```
"Write unit tests that would catch the bug I'm experiencing"
```

### Strategy 4: Simplify

```
"This function is complex. Can you simplify it to the
minimum code that reproduces the correct behavior?"
```

## When to Debug Yourself vs Ask AI

### Debug Yourself

- The bug is in code you understand
- It's a simple fix
- You need to understand the codebase

### Ask AI

- You're stuck and need fresh perspective
- The code is boilerplate you don't know well
- You need tests to catch regression

## Systematic Debugging Checklist

1. [ ] Can you reproduce the bug consistently?
2. [ ] Do you understand what the code should do?
3. [ ] Have you added console.log or debugger?
4. [ ] Did AI explain the code's assumptions?
5. [ ] Have you checked for null/undefined?
6. [ ] Have you checked for type issues?
7. [ ] Does the code handle the edge cases?

## Preventing AI Bugs

1. **Be specific** - Clear requirements reduce bugs
2. **Review thoroughly** - Don't trust blindly
3. **Test incrementally** - Build and test small pieces
4. **Use TypeScript** - Catches type errors early
5. **Add validation** - Check AI output before using

## Key Insight

You are the expert on your requirements. AI is an expert on code patterns. Combine both: you guide, AI generates, you verify.
