# Collaboration

GitHub enables multiple people to work on the same project.

## Fork and Clone

For open source projects:

```bash
# Fork on GitHub (button on website)
# Then clone YOUR fork
git clone https://github.com/you/repo.git
```

## Keep Fork Updated

```bash
# Add original as upstream
git remote add upstream https://github.com/original/repo.git

# Update from original
git fetch upstream
git merge upstream/main
```

## Pull Requests (PRs)

When you want your changes merged:

1. Push to your fork
2. Click "New Pull Request" on GitHub
3. Describe your changes
4. Submit for review

## Code Review

PRs enable code review:

- Comments on specific lines
- Request changes
- Approve and merge

## Workflow

```bash
# 1. Create feature branch
git checkout -b fix-typo

# 2. Make changes
echo "fix" > file.txt
git add .
git commit -m "Fix typo in header"

# 3. Push to your fork
git push origin fix-typo

# 4. Create PR on GitHub
```

## Branches for Teams

```
main        - production code
develop     - integration branch
feature-x   - new features
bugfix-y    - bug fixes
```

## Summary

- Fork to work on others' projects
- Pull requests submit changes for review
- Keep your fork synced with upstream
- Branches keep work organized
