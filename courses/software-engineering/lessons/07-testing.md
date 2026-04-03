# Testing

Testing ensures your code works correctly and prevents bugs from reaching production.

## Why Test?

- Catch bugs before they reach users
- Document expected behavior
- Enable confident refactoring
- Reduce time spent debugging

## Types of Tests

### Unit Tests

Test individual functions or components in isolation.

```javascript
// Test a single function
function add(a, b) {
    return a + b;
}

function testAdd() {
    console.assert(add(1, 2) === 3, '1 + 2 should equal 3');
    console.assert(add(-1, 1) === 0, '-1 + 1 should equal 0');
}
```

### Integration Tests

Test how components work together.

```javascript
// Test user registration flow
async function testRegistration() {
    const user = await registerUser('alice@example.com', 'password123');
    console.assert(user.email === 'alice@example.com');
    console.assert(await verifyPassword(user, 'password123'));
}
```

### End-to-End Tests

Test the entire application flow.

```javascript
// Test login flow
async function testLogin() {
    await browser.goto('/login');
    await browser.fill('#email', 'alice@example.com');
    await browser.fill('#password', 'password123');
    await browser.click('#submit');
    await browser.waitForSelector('.dashboard');
    console.assert(browser.url().includes('/dashboard'));
}
```

## Test-Driven Development (TDD)

1. Write a failing test first
2. Write the minimum code to pass
3. Refactor

```bash
# Red - Write failing test
# Green - Write minimal code
# Refactor - Improve code
```

## Writing Good Tests

### Test One Thing

```javascript
// Bad - Tests multiple things
function testUser() {
    const user = createUser('Alice', 'alice@example.com');
    console.assert(user.name === 'Alice');
    console.assert(user.email === 'alice@example.com');
    console.assert(user.isActive === true);
}

// Good - One assertion per test
function testUserName() {
    const user = createUser('Alice', 'alice@example.com');
    console.assert(user.name === 'Alice');
}
```

### Use Descriptive Names

```javascript
// Bad
function test1() { ... }

// Good
function testRegistrationWithValidEmail() { ... }
function testRegistrationWithInvalidEmailThrows() { ... }
```

### Arrange-Act-Assert

```javascript
// Arrange - Set up test data
const user = createUser('Alice');

// Act - Perform the action
const result = user.authenticate('correctpassword');

// Assert - Check the outcome
console.assert(result === true);
```

## Test Coverage

Coverage measures how much code is tested.

```bash
# Run tests and check coverage
npm test -- --coverage

# Coverage report
Statements   : 85%
Branches     : 78%
Functions    : 90%
Lines        : 85%
```

Aim for meaningful coverage, not 100%. Tests that don't verify behavior are not valuable.

## When to Test

- Before pushing code
- After fixing a bug (regression test)
- Before refactoring
- During code review
