# Common Pitfalls

Vibe coding has traps that can slow you down or create problems. Learn to avoid them.

## Over-Relying on AI

### The Problem

Trusting AI output without understanding it leads to:
- Bugs in production
- Security vulnerabilities
- Technical debt
- Wasted debugging time

### The Solution

Always verify and understand code before using it.

```javascript
// Don't blindly paste AI code
const result = await aiGenerate("secure authentication");

// Do verify first
// - Do I understand what this does?
// - Have I tested it thoroughly?
// - Are there security implications?
```

## Prompt Overload

### The Problem

Asking AI to build everything at once produces:
- Incoherent code
- Missed requirements
- Harder debugging
- Unmaintainable output

### The Solution

```javascript
// Bad prompt
"Build a complete e-commerce platform with user auth,
// payments, inventory, and email notifications"

// Better approach - iterative
"1. "Build user registration with email/password"
2. "Add login functionality"
3. "Add product catalog display"
4. "Add shopping cart"
5. "Add checkout flow"
```

## Ignoring Context

### The Problem

AI doesn't know your specific context:
- Your existing codebase
- Team conventions
- Performance requirements
- User needs

### The Solution

Provide context in every prompt:

```
"Here's our user model:
{ id, email, createdAt }

Here's our database setup:
MySQL with Sequelize ORM

Write a function to find users by email.
Follow our existing patterns in user-service.js"
```

## Not Reading the Code

### The Problem

Using code you don't understand creates:
- Hidden bugs
- Security issues
- Integration problems
- Difficulty debugging

### The Solution

Read every line. If you don't understand something, ask AI to explain it before integrating.

## Premature Optimization

### The Problem

AI can quickly generate complex code that:
- Is hard to understand
- Adds unnecessary complexity
- Might not actually solve the problem

### The Solution

Start simple:

```
"First: Make it work
"Then: Make it better
"Only then: Make it fast"
```

## Scope Creep in Prompts

### The Problem

Vague requests lead to feature bloat.

```
"Build a user profile page" 
→ AI adds: social media links, 
  activity feed, gamification, 
  admin panel, etc.
```

### The Solution

Be specific about scope:

```
"Build a user profile page showing:
- Avatar (uploaded or default)
- Name and bio (editable)
- Email (display only)

No social links, no activity feed, no admin features.
```

## Not Saving Progress

### The Problem

Losing work when iterating with AI.

### The Solution

```bash
# Commit after each working iteration
git add .
git commit -m "feat: basic profile page"
```

## Testing Too Late

### The Problem

Assuming AI code works without testing.

### The Solution

Test each iteration before moving on:

1. Write/prompt for code
2. Test manually
3. Add automated tests
4. Then proceed

## Key Takeaways

1. **Verify everything** - Trust but verify
2. **Iterate** - Small steps, constant feedback
3. **Provide context** - Help AI help you
4. **Read the code** - You are responsible
5. **Test thoroughly** - AI makes mistakes
6. **Save often** - Git is your safety net

## Recovery Strategies

When you hit pitfalls:

- **Over-relied on AI?** Start over with better prompts
- **Code not working?** Debug incrementally, test each part
- **Too complex?** Delete and rebuild simpler
- **Lost track?** Git log to find working state
