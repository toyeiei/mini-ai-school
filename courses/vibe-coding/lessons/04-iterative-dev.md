# Iterative Development

Vibe coding works best through iteration. Build incrementally, refine continuously.

## The Iteration Cycle

```
Idea → Generate → Review → Refine → Test → Repeat
  ▲                                   │
  └───────────────────────────────────┘
```

## Start Small

Begin with the core feature, not the entire application.

```javascript
// First iteration - core functionality
async function fetchUser(id) {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
}

// Second iteration - add error handling
async function fetchUser(id) {
    if (!id) throw new Error('User ID required');
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
    }
    return response.json();
}

// Third iteration - add caching
const cache = new Map();
async function fetchUser(id) {
    if (cache.has(id)) return cache.get(id);
    const user = await fetchUserFromAPI(id);
    cache.set(id, user);
    return user;
}
```

## Building Incrementally

### Step 1: Get it working

```
Prompt: "Create a basic to-do list with add and delete"
```

### Step 2: Add state management

```
Prompt: "Add the ability to mark items as complete. Store state in localStorage."
```

### Step 3: Improve UX

```
Prompt: "Add animations when items are added and deleted"
```

## Effective Iterations

### What's Worth Iterating

- Core functionality first
- User-facing features
- Error handling
- Performance improvements
- Edge cases

### What to Avoid

- Premature optimization
- Perfect styling before functionality
- Adding features you might not need

## Code Reviews with AI

After generation, always review:

```javascript
// Check 1: Does it do what I asked?
// Check 2: Are there obvious bugs?
// Check 3: Is the code readable?
// Check 4: Are edge cases handled?
// Check 5: Is it secure?
```

### Questions to Ask

- "What would break this code?"
- "What happens if the API is slow?"
- "What if the user enters special characters?"
- "Could this code be simpler?"

## Managing Complexity

As features grow, complexity increases. Use iteration to manage it.

### Refactoring with AI

```
"Here's my 200-line function. Can you break it into smaller
functions with clear responsibilities?"
```

### Adding Structure

```
"This file is getting large. Help me split it into modules
for: data fetching, state management, and UI components"
```

## Working in Short Cycles

Short iterations give faster feedback.

| Cycle Length | When to Use |
|--------------|-------------|
| 5-15 min | Quick prototypes, single features |
| 30-60 min | Feature with testing |
| 2-4 hours | Larger features with full context |

## Signs You Need Iteration

- Building feels overwhelming → Break it down
- Code has too many features → Ship first, add later
- Not sure if it works → Add tests
- Prompt is getting too long → Split into multiple prompts

## Practical Workflow

1. Define the smallest useful version
2. Generate with AI
3. Review and fix obvious issues
4. Test manually
5. Iterate: next feature or refinement

Each iteration should leave you with working code.
