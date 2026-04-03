# GitHub Basics

GitHub is a platform for hosting Git repositories online. It enables collaboration and backup.

## Create a GitHub Account

Go to [github.com](https://github.com) and sign up.

## Create a Repository on GitHub

1. Click "New repository"
2. Name it (e.g., "my-project")
3. Choose public or private
4. Don't initialize with README (we have local code)

## Connect Local to GitHub

```bash
# Add remote (one-time setup)
git remote add origin https://github.com/you/my-project.git

# Push your code
git push -u origin main
```

## Push and Pull

```bash
# Upload commits to GitHub
git push

# Download commits from GitHub
git pull
```

## Clone a Repository

```bash
# Get someone else's project
git clone https://github.com/user/repo.git
```

## Sync Fork (For Collaboration)

```bash
# Add upstream remote
git remote add upstream https://github.com/original/repo.git

# Fetch latest changes
git fetch upstream

# Merge into your branch
git merge upstream/main
```

## GitHub Flow

1. Push code → GitHub
2. Create pull request
3. Review changes
4. Merge to main

## Summary

- GitHub hosts repositories in the cloud
- `git remote` connects local to GitHub
- `git push` uploads, `git pull` downloads
- `git clone` copies a repository
