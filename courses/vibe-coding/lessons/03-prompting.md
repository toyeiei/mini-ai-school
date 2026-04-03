# Prompting for Code

Writing effective prompts is a skill. Better prompts get better code.

## The Components of a Good Prompt

### 1. Clear Goal

Tell exactly what you want to build.

```javascript
// Bad prompt
"make a form"

// Better prompt
"Create a React component for user registration with:
- Email input with validation
- Password input (min 8 chars, must include number)
- Confirm password input
- Submit button
- Error messages displayed inline"
```

### 2. Context

Share relevant background information.

```javascript
// Context includes
- What framework you're using
- Existing code patterns
- Constraints and requirements
- What you've already tried
```

### 3. Format

Specify how you want the response.

```javascript
// Specify format
"Provide the component code, a unit test example, and a usage example"
```

## Prompting Techniques

### Zero-Shot Prompting

Ask directly without examples.

```
"Write a function that checks if a string is a palindrome"
```

### Few-Shot Prompting

Give examples of what you want.

```
"Here are examples of functions that return promises:

async function getUser(id) { ... }
async function fetchData(url) { ... }

Write an async function that fetches user posts"
```

### Chain of Thought

Ask AI to explain its reasoning.

```
"Walk me through how you would design a rate limiter.
Consider: time windows, concurrent requests, storage options.
Then provide an implementation."
```

## Practical Prompt Templates

### Template: Component Request

```
Build a [component type] for [framework/library] with:

Purpose: [what it does]

Features:
- [feature 1]
- [feature 2]

Constraints:
- [any limitations]
- [specific requirements]

Style: [match existing codebase / specific style guide]
```

### Template: Debug Request

```
I'm getting this error:
[error message]

This is my code:
[relevant code]

Here's what I tried:
[attempts made]

What could be causing this?
```

### Template: Refactor Request

```
Current code:
[code to refactor]

Problems:
- [issue 1]
- [issue 2]

Target:
- [improvement goal]

Constraints:
- Must maintain [backwards compatibility / existing API]
```

## Handling AI Responses

### When Code Looks Wrong

```
"This function doesn't handle null values. Can you add that?"
"Shouldn't this check for negative numbers?"
```

### Iterating on Output

```
"That works, but can you use a different approach?
Instead of forEach, use a for...of loop"
```

### Asking for Explanations

```
"How does this function work step by step?"
"What edge cases might break this?"
```

## Common Prompt Mistakes

1. **Too vague** - "Fix my code" doesn't explain what's broken
2. **Too broad** - "Build an app" is overwhelming
3. **Missing context** - AI can't read your mind
4. **Not specifying constraints** - AI assumes defaults you might not want

## Practice Exercises

Try prompting for:

1. A function that validates credit card numbers
2. A React hook for local storage
3. A SQL query for monthly reports
4. An error handler for API routes
5. A function that parses dates in multiple formats

The more you practice writing prompts, the better the AI output becomes.
