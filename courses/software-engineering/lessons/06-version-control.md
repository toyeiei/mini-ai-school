# Version Control

Version control tracks changes to code over time, enabling collaboration and safe experimentation.

## Git Basics

### Core Concepts

- **Repository** - A project folder tracked by Git
- **Commit** - A snapshot of changes
- **Branch** - A parallel version of your code
- **Merge** - Combining branches

### Essential Commands

```bash
# Start a new repository
git init

# Clone an existing repository
git clone https://github.com/user/repo.git

# Check repository status
git status

# Add files to staging
git add file.txt        # Single file
git add .               # All changes

# Create a commit
git commit -m "Add login feature"

# View commit history
git log --oneline

# Create a branch
git branch feature-login

# Switch branches
git checkout feature-login
git switch feature-login   # Modern syntax

# Merge a branch
git checkout main
git merge feature-login
```

## Branching Strategies

### Simple Strategy

- `main` - Production code
- `develop` - Integration branch (optional)
- Feature branches - For each feature

### GitHub Flow

1. Create branch from `main`
2. Make commits
3. Open pull request
4. Review and discuss
5. Merge to `main`

## Writing Good Commit Messages

```bash
# Good commit message
git commit -m "feat: add user authentication with JWT

- Add login/logout endpoints
- Implement token refresh
- Add password hashing with bcrypt
- Closes #123"

# Bad commit messages
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "asdfgh"
```

## Common Workflows

### Saving Work in Progress

```bash
git stash           # Save changes temporarily
git stash pop       # Restore stashed changes
git stash list      # View stashes
```

### Undoing Changes

```bash
# Discard local changes to a file
git checkout -- file.txt
git restore file.txt   # Modern

# Undo the last commit (keep changes)
git reset --soft HEAD~1

# Undo the last commit (discard changes)
git reset --hard HEAD~1
```

## Collaborating with GitHub

```bash
# Fork a repository, then clone your fork
git clone https://github.com/your-username/repo.git

# Add upstream remote
git remote add upstream https://github.com/original/repo.git

# Sync with upstream
git fetch upstream
git merge upstream/main

# Push your changes
git push origin main
```

## Best Practices

- Commit often with clear messages
- Use branches for every feature or fix
- Pull before you push to avoid conflicts
- Review changes before committing
- Write meaningful commit messages
- Never commit secrets or credentials
