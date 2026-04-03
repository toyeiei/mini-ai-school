# Refactoring with AI

AI can help you improve existing code. Here's how to use it effectively for refactoring.

## What is Refactoring?

Refactoring means improving code without changing its behavior.

Goals:
- Make code more readable
- Reduce complexity
- Improve maintainability
- Remove dead code
- Improve performance

## When to Refactor

- Before adding new features
- When code is hard to understand
- When tests start failing mysteriously
- When code reviews reveal issues
- When you have time before shipping

## Refactoring Safely

1. **Have tests** - Ensure behavior doesn't change
2. **Make small changes** - One refactor at a time
3. **Commit before** - You can always revert
4. **Verify after** - Run tests and manual checks

## Common Refactoring Tasks

### 1. Simplify Functions

```javascript
// Before (complex)
function processUserData(userData) {
    const processed = [];
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].active) {
            processed.push({
                name: userData[i].firstName + ' ' + userData[i].lastName,
                email: userData[i].emailAddress,
                id: userData[i].userId
            });
        }
    }
    return processed;
}

// After (simpler)
function processUserData(userData) {
    return userData
        .filter(user => user.active)
        .map(user => ({
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddress,
            id: user.userId
        }));
}
```

### 2. Extract Functions

```javascript
// Before (one long function)
function handleSubmit(form) {
    const email = form.email.value;
    if (!email.includes('@')) {
        showError('Invalid email');
        return;
    }
    const password = form.password.value;
    if (password.length < 8) {
        showError('Password too short');
        return;
    }
    // ... more validation
}

// After (extracted functions)
function validateEmail(email) {
    if (!email.includes('@')) {
        showError('Invalid email');
        return false;
    }
    return true;
}

function validatePassword(password) {
    if (password.length < 8) {
        showError('Password too short');
        return false;
    }
    return true;
}

function handleSubmit(form) {
    if (!validateEmail(form.email.value)) return;
    if (!validatePassword(form.password.value)) return;
    // ... submit
}
```

### 3. Rename for Clarity

```javascript
// Before (unclear names)
function calc(x, y) {
    return x.filter(i => i.t === y);
}

// After (clear intent)
function filterItemsByType(items, type) {
    return items.filter(item => item.type === type);
}
```

## AI Refactoring Prompts

### Simplify Code

```
"This function is hard to follow. Can you simplify it
while keeping the same behavior?"
```

### Extract Functions

```
"This function does too many things. Can you split it
into smaller functions with clear responsibilities?"
```

### Improve Naming

```
"Review these variable and function names. Suggest
clearer names that better describe their purpose."
```

### Add Documentation

```
"Can you add JSDoc comments to this code explaining
the purpose, parameters, and return values?"
```

### Remove Dead Code

```
"Identify any code that isn't being used or doesn't
contribute to the output."
```

## What AI Handles Well

- Renaming consistently
- Extracting obvious functions
- Simplifying boolean logic
- Converting loops to array methods
- Adding missing null checks
- Formatting code

## What Needs Human Judgment

- Architecture decisions
- Performance trade-offs
- Security implications
- Business logic changes

## Testing Refactored Code

Always verify behavior doesn't change:

```bash
# Run tests before
npm test

# Refactor

# Run tests after
npm test

# If tests fail, investigate
```

## Refactoring Checklist

- [ ] Do you have tests or manual verification?
- [ ] Is the change small and focused?
- [ ] Did you commit before starting?
- [ ] Do tests pass after?
- [ ] Is the code clearer now?
