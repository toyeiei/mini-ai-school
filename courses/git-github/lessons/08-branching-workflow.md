# Branching Workflow

A workflow defines how teams use branches consistently.

## GitHub Flow

Simple and popular:

1. Create branch from `main`
2. Make commits
3. Open pull request
4. Review and discuss
5. Merge to `main`
6. Delete branch

## Feature Branches

```bash
# Start fresh from main
git checkout main
git pull
git checkout -b feature-search

# Work and commit
git add .
git commit -m "Add search functionality"

# Push and create PR
git push -u origin feature-search
```

## Hotfix Branches

For urgent fixes:

```bash
# Create hotfix from main
git checkout -b hotfix-critical-bug

# Fix and commit
git commit -m "Fix critical security issue"

# Merge to main immediately
git checkout main
git merge hotfix-critical-bug
git push

# Delete hotfix branch
git branch -d hotfix-critical-bug
```

## Branch Naming

```bash
# Good names
feature/user-authentication
bugfix/login-crash
hotfix/security-patch
release/v1.0.0

# Bad names
fix
temp
asdf
```

## Protecting main

On GitHub:
- Settings → Branches → Add rule
- Require pull request reviews
- Require status checks before merge
- Don't allow force pushes to main

## Summary

- GitHub Flow: branch → commit → PR → merge
- Use feature branches for new work
- Use hotfix branches for urgent fixes
- Protect main with PR requirements
