# Code Quality

High-quality code is easier to understand, maintain, and extend. It reduces bugs and helps teams collaborate effectively.

## Readability

### Use Meaningful Names

```javascript
// Bad
const d = new Date();
const x = users.filter(u => u.a > 18);
const tmp = calculate();

// Good
const currentDate = new Date();
const adultUsers = users.filter(user => user.age > 18);
const temporaryValue = calculate();
```

### Write Short Functions

Each function should do one thing well.

```javascript
// Bad - Function does multiple things
function processUser(user) {
    validateUser(user);
    saveToDatabase(user);
    sendWelcomeEmail(user);
    logActivity(user);
}

// Good - Separate concerns
function processUser(user) {
    if (!validateUser(user)) throw new Error('Invalid');
    saveToDatabase(user);
    notifyUser(user);
}

function validateUser(user) { /* ... */ }
function saveToDatabase(user) { /* ... */ }
function notifyUser(user) {
    sendWelcomeEmail(user);
    logActivity(user);
}
```

### Avoid Magic Numbers

```javascript
// Bad
if (users.length > 86400000) { ... }

// Good
const MILLISECONDS_PER_DAY = 86400000;
if (users.length > MILLISECONDS_PER_DAY) { ... }
```

## Maintainability

### DRY - Don't Repeat Yourself

```javascript
// Bad - Repeated logic
function getFullName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    return 'Hello, ' + user.firstName + ' ' + user.lastName + '!';
}

// Good
function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    return `Hello, ${getFullName(user)}!`;
}
```

### YAGNI - You Aren't Gonna Need It

Don't add functionality until you need it.

```javascript
// Bad - Over-engineering
class User {
    constructor(name) {
        this.name = name;
    }
    // Added "just in case"
    updatePhone(phone) { ... }
    updateAddress(address) { ... }
    changeEmail(email) { ... }
}

// Good - Only what you need now
class User {
    constructor(name) {
        this.name = name;
    }
}
```

## Code Style

### Consistent Formatting

```javascript
// Pick a style and stick with it
const user = {
    name: 'Alice',           // 2 spaces, trailing comma
    email: 'alice@example.com'
};

// Not mixed
const user = {name: 'Alice', email: 'alice@example.com'}
```

### Comments That Add Value

```javascript
// Bad - States the obvious
// Increment counter
counter++;

// Good - Explains why
// Compensate for off-by-one from zero-based index
counter++;
```

## Performance Basics

### Avoid Unnecessary Work

```javascript
// Bad - Recalculating on every iteration
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        adults.push(users[i]); // length computed each time
    }
}

// Good
const adultUsers = users.filter(user => user.age > 18);
```

### Be Cautious with Side Effects

```javascript
// Bad - Modifies external state
function calculateTotal(items) {
    total = 0;  // Global!
    for (const item of items) total += item.price;
    return total;
}

// Good - Pure function
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}
```

## Code Reviews

Benefits:
- Catch bugs before they reach production
- Share knowledge across the team
- Maintain consistent style
- Improve overall code quality

When reviewing:
- Be respectful and constructive
- Focus on the code, not the person
- Suggest alternatives, not just criticism
- Acknowledge good solutions
