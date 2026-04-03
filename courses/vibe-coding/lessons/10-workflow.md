# Building Your Workflow

A sustainable vibe coding workflow helps you work efficiently with AI while maintaining code quality.

## Your Core Workflow

```
┌─────────────────────────────────────────────┐
│  1. Define the Goal                        │
│     - What problem are you solving?       │
│     - What does success look like?         │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  2. Prompt Clearly                        │
│     - Be specific about requirements       │
│     - Include context and constraints      │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  3. Review the Output                      │
│     - Read every line                      │
│     - Check for bugs and issues             │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  4. Test Thoroughly                        │
│     - Manual testing first                   │
│     - Add automated tests                   │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  5. Iterate or Ship                        │
│     - More features? → Back to step 2       │
│     - Done? → Commit and deploy             │
└─────────────────────────────────────────────┘
```

## Daily Workflow

### Morning: Plan

1. What will you build today?
2. Break it into small tasks
3. Prioritize critical paths

### During Work

1. Complete one small task
2. Test it thoroughly
3. Commit working code
4. Repeat

### End of Day

1. Commit remaining work
2. Write notes on what's next
3. Review what you learned

## Prompt Templates

### For Features

```
Build [feature name] with:
- Purpose: [what it does]
- Inputs: [what it takes]
- Outputs: [what it returns]
- Constraints: [any limitations]
- Style: [match existing codebase]
```

### For Debugging

```
I'm getting this error: [error]
My code: [relevant code]
Expected: [what should happen]
Actual: [what happens]
```

### For Refactoring

```
Refactor [file/function] to:
- Problem: [what's wrong]
- Goal: [what you want]
- Keep: [must preserve]
```

## Tool Setup

### Essential Tools

1. **IDE with AI integration** - VS Code + Copilot, Cursor, etc.
2. **Version control** - Git for saving progress
3. **Testing framework** - Jest, Vitest, etc.
4. **Browser DevTools** - For web development
5. **AI assistant** - Claude, ChatGPT, etc.

### Recommended Setup

```bash
# Project structure
my-project/
├── src/
│   ├── components/
│   ├── utils/
│   └── tests/
├── docs/
├── package.json
└── README.md
```

## Project Management

### Task Breakdown

Big task: "Build user authentication"
↓

- [ ] Design user model
- [ ] Create registration form
- [ ] Add email validation
- [ ] Hash passwords
- [ ] Create login endpoint
- [ ] Add session management
- [ ] Write tests
- [ ] Add error handling

### Tracking Progress

```markdown
## Today
- [x] User model
- [x] Registration form
- [ ] Email validation (in progress)
- [ ] Password hashing

## Tomorrow
- [ ] Login endpoint
- [ ] Session management
```

## Code Quality Standards

Even with AI, maintain quality:

1. **Readable** - Clear names, good structure
2. **Testable** - Small functions, clear inputs/outputs
3. **Maintainable** - Document tricky parts
4. **Secure** - Validate all inputs, protect data

## Collaboration

When working with others:

1. **Document AI usage** - Note where AI helped
2. **Review all AI code** - Same standard as human code
3. **Share prompts** - Help team learn effective prompting
4. **Discuss patterns** - What works for the team

## Continuous Improvement

After each project:

1. What prompting worked well?
2. What bugs slipped through?
3. What would you do differently?
4. What new patterns did you learn?

## Summary

Your vibe coding workflow:
1. Clear goals
2. Specific prompts
3. Thorough review
4. Testing
5. Iteration
6. Documentation
7. Continuous learning

The goal is not to use AI, but to build software effectively with AI as a powerful tool in your toolkit.
