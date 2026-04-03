# Getting Started

Let's set up Git on your computer.

## Installation

**macOS**: Git usually comes pre-installed. Test it:
```bash
git --version
```

**Windows**: Download from [git-scm.com](https://git-scm.com)

## Configure Git

Tell Git who you are (do this once):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Create a Repository

```bash
# Create a new folder
mkdir my-project
cd my-project

# Initialize Git
git init
```

This creates a `.git` folder - Git is now tracking your project.

## Check Status

```bash
git status
```

Shows:
- Which files are tracked
- Which files have changes
- Which files are staged

## Basic Workflow

```
Edit files → Stage → Commit
```

1. **Edit**: Make changes to your files
2. **Stage**: Mark changes for commit
3. **Commit**: Save a snapshot

## Summary

- Configure Git with your name and email
- `git init` starts tracking a project
- `git status` shows current state
- Workflow: Edit → Stage → Commit
