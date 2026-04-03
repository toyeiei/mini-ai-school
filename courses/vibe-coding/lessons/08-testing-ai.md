# Testing AI-Generated Code

AI-generated code needs the same testing as human-written code. Here's how to approach testing in a vibe coding workflow.

## Why Test AI Code

- AI can generate plausible but incorrect code
- Requirements may not translate perfectly to code
- Edge cases are often missed
- Bugs affect users regardless of how code was written

## Types of Tests

### Unit Tests

Test individual functions in isolation.

```javascript
// Test utility functions
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function testValidateEmail() {
    console.assert(validateEmail('test@example.com') === true);
    console.assert(validateEmail('invalid') === false);
    console.assert(validateEmail('') === false);
}
```

### Integration Tests

Test how components work together.

```javascript
// Test API integration
async function testUserRegistration() {
    const user = await registerUser({
        email: 'new@example.com',
        password: 'password123'
    });
    console.assert(user.email === 'new@example.com');
    console.assert(user.id !== undefined);
}
```

### Manual Testing

Test flows that are hard to automate.

- Does the UI look right?
- Is the navigation intuitive?
- Does the error message make sense?

## Writing Tests for AI Code

### 1. Test Happy Path

```javascript
// Basic functionality works
test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});
```

### 2. Test Edge Cases

```javascript
// Empty arrays
test('handles empty array', () => {
    expect(add(0, 0)).toBe(0);
});

// Negative numbers
test('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
});

// Large numbers
test('handles large numbers', () => {
    expect(add(1e10, 1e10)).toBe(2e10);
});
```

### 3. Test Error Cases

```javascript
// Invalid input
test('throws on invalid input', () => {
    expect(() => add('hello', 'world')).toThrow();
});
```

## AI for Test Generation

Use AI to generate tests:

```
"Write unit tests for this function that validates
email addresses. Cover: valid emails, invalid emails,
empty strings, and special characters."
```

### Review AI-Generated Tests

AI might generate tests that:
- Don't match your actual requirements
- Test the wrong behavior
- Miss important edge cases
- Have incorrect assertions

Always review AI tests.

## Testing Workflow

```
Write Code → Write Tests → Run Tests → Fix Issues → Repeat
      ↑                                      │
      └────────────────────────────────────┘
```

## What to Test

### High Priority
- User authentication
- Payment processing
- Data validation
- Critical business logic

### Medium Priority
- API integrations
- Data transformations
- Complex algorithms

### Low Priority
- Simple getters/setters
- Trivial utility functions

## Test Coverage Goals

| Priority | Coverage Target |
|----------|----------------|
| Critical paths | 90-100% |
| Important features | 70-80% |
| Nice to have | 40-60% |

## Testing Checklist for AI Code

- [ ] Does it pass happy path tests?
- [ ] Are edge cases covered?
- [ ] Do error cases behave correctly?
- [ ] Have you tested manually?
- [ ] Are there integration tests?
- [ ] Do tests match requirements?

## Key Principle

AI generates code faster than you can write it. But you must test all of it. Use AI to generate tests too, but always review them.
