# Reading Generated Code

Understanding code AI generates is essential. You can't effectively guide AI if you don't understand its output.

## Why Reading Code Matters

- Verify correctness before running
- Find potential bugs
- Understand limitations
- Guide future iterations
- Debug issues
- Learn from patterns

## How to Read Code Quickly

### Step 1: Identify the Entry Point

```javascript
// Look for exports or main functions
module.exports = { processUser, validateUser };
// or
export function processUser() { ... }
```

### Step 2: Follow the Data Flow

```javascript
function processUser(userData) {
    // 1. Where does data come in?
    const validated = validateUser(userData);  // userData in
    // 2. What transformations happen?
    const normalized = normalizeUser(validated);  // transformation
    // 3. Where does it go?
    return saveUser(normalized);  // out
}
```

### Step 3: Identify Key Functions

```javascript
// Each function should do one thing
function validateEmail(email) { ... }
function hashPassword(password) { ... }
function createUserRecord(email, passwordHash) { ... }
```

## Reading Patterns in AI Code

### Common Patterns AI Uses

**Guard Clauses**

```javascript
function processUser(user) {
    if (!user) return null;           // Guard: null check
    if (!user.email) return null;     // Guard: email required
    // Main logic here
}
```

**Try-Catch Wrappers**

```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch failed:', error);
        return null;
    }
}
```

**Early Returns**

```javascript
function authenticate(user, password) {
    if (!user) return false;     // Early return
    if (!user.isActive) return false;  // Early return
    // Main auth logic
}
```

## Questions to Ask When Reading

1. **What does this function do?** (One sentence answer)
2. **What are the inputs?**
3. **What are the outputs?**
4. **What are the edge cases?**
5. **Are there security concerns?**
6. **Is the code readable?**

## Document Your Understanding

After reading AI code, write a brief explanation:

```javascript
/**
 * processUser - Registers a new user
 *
 * Flow:
 * 1. Validate email and password
 * 2. Hash the password
 * 3. Create user record
 * 4. Store in database
 *
 * Returns: User object (without password) or null on failure
 */
```

## When AI Code is Hard to Read

If generated code is confusing:

```
"This function is hard to follow. Can you rewrite it with:
- Clearer variable names
- Comments explaining each step
- Single responsibility per function"
```

## Learning from Generated Code

AI code often uses patterns you can learn from:

- Modern JavaScript features
- Library idioms
- Common algorithms
- Best practices

Study what AI generates. If it uses a pattern you don't recognize, research it.

## Reading Exercise

```javascript
const result = users
    .filter(u => u.active)
    .map(u => u.name)
    .sort()
    .join(', ');
```

Questions:
1. What does this code do?
2. What is the output type?
3. What happens if `users` is empty?
4. What if `users` contains inactive users?

Answers at the end of this lesson.

## Quick Reading Checklist

- [ ] Identify the main function
- [ ] Follow the data flow
- [ ] Check edge cases
- [ ] Look for security issues
- [ ] Verify it matches your intent
- [ ] Test manually

---

**Exercise Answers:**
1. Filters active users, extracts names, sorts alphabetically, joins with commas
2. String
3. Returns empty string
4. They are filtered out
