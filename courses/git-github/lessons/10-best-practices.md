# Best Practices

Follow these habits for clean, maintainable version control.

## Commit Often

```bash
# Good: small, focused commits
git commit -m "Add user login form"
git commit -m "Style login form"
git commit -m "Add login validation"
```

## Write Good Messages

```
Subject line (under 50 chars)

Body paragraph explaining WHY and WHAT.
Not HOW.
```

Example:
```bash
git commit -m "Add user authentication

- Implement JWT tokens for session management
- Add password hashing with bcrypt
- Create login/logout endpoints
- Closes #123"
```

## Use Branches

- Never commit directly to `main`
- One feature per branch
- Delete branches after merging

## Keep Clean

```bash
# Before merging, sync with main
git checkout main
git pull
git checkout feature-branch
git merge main

# Delete merged branches
git branch -d old-feature
```

## Ignore Sensitive Files

Create `.gitignore`:

```
# Dependencies
node_modules/

# Environment
.env

# Build outputs
dist/
build/

# IDE
.vscode/
*.swp
```

## Push Regularly

```bash
git push  # Upload commits
git pull  # Download changes
```

Don't let commits pile up locally.

## Summary

- Commit small, focused changes
- Write clear commit messages
- Use branches for everything
- Keep .gitignore up to date
- Push regularly to avoid losing work
