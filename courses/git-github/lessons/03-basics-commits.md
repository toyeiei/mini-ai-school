# Basic Commits

Commits are snapshots of your project. Each commit has a message explaining what changed.

## Staging Files

```bash
# Stage a specific file
git add filename.txt

# Stage all changed files
git add .

# Stage all files
git add -A
```

## Creating Commits

```bash
git commit -m "Add login form"
```

The message should be:
- Short (under 50 characters)
- Clear about what changed
- In present tense ("Add" not "Added")

## Good Commit Messages

```bash
# Good
git commit -m "Fix navigation bug on mobile"

# Bad
git commit -m "fix"
git commit -m "WIP"
git commit -m "asdf"
```

## View History

```bash
# See recent commits
git log

# See simplified log
git log --oneline
```

Output:
```
a1b2c3d Fix navigation bug on mobile
e4f5g6h Add user profile page
i7j8k9l Initial commit
```

## Amend Last Commit

Made a mistake? Fix it:

```bash
git commit --amend -m "Corrected message"
```

## Summary

- `git add` stages files for commit
- `git commit` saves a snapshot with a message
- Write clear, descriptive messages
- `git log` shows commit history
