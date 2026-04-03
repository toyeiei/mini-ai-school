# Branching

Branches let you work on features without affecting the main code.

## What Are Branches?

Think of branches as parallel universes of your project:

```
main
├── feature-login
└── feature-search
```

## List Branches

```bash
# See all branches
git branch

# Current branch has an asterisk
* main
```

## Create a Branch

```bash
git branch feature-login
```

This creates a new branch but doesn't switch to it.

## Switch Branches

```bash
git checkout feature-login
# OR (modern syntax)
git switch feature-login
```

## Create and Switch at Once

```bash
git checkout -b feature-login
# OR
git switch -c feature-login
```

## Work on Your Branch

```bash
# Switch to new branch
git switch -c feature-login

# Make changes
echo "login page" > login.html
git add .
git commit -m "Add login page"
```

Changes only exist on `feature-login`, not on `main`.

## Delete a Branch

```bash
# Delete when merged
git branch -d feature-login

# Force delete (even if not merged)
git branch -D feature-login
```

## Summary

- Branches are parallel versions of code
- `git branch` lists branches
- `git checkout -b` creates and switches
- Changes on a branch don't affect other branches
