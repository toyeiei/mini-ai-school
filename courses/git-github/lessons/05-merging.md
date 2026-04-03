# Merging

Merging combines changes from one branch into another.

## Merge a Branch

```bash
# Switch to the target branch
git checkout main

# Merge the feature branch
git merge feature-login
```

## Fast-Forward Merge

If `main` hasn't changed, Git just moves the pointer:

```
Before:    main → A
                ↑
          feature-login

After:     main → A → B (feature-login)
```

Git automatically fast-forwards.

## Merge Conflicts

When the same lines changed in both branches:

```bash
<<<<<<< HEAD
Hello World
=======
Hello Universe
>>>>>>> feature-login
```

## Resolve Conflicts

1. Edit the file to keep what you want
2. Remove conflict markers
3. Save and commit

```bash
# After resolving
git add resolved-file.txt
git commit -m "Resolve merge conflict"
```

## Delete Branch After Merge

```bash
git branch -d feature-login
```

## Summary

- `git merge` combines branch changes
- Fast-forward when no conflicting changes
- Conflicts need manual resolution
- Delete merged branches to stay organized
