# Fixing Mistakes

Git makes it easy to undo changes and recover from mistakes.

## Undo Working Directory Changes

Discard changes to a file:

```bash
# Discard changes to one file
git checkout -- filename.txt

# Modern syntax
git restore filename.txt
```

## Unstage a File

Removed from staging, but not deleted:

```bash
git reset HEAD filename.txt
# OR
git restore --staged filename.txt
```

## Undo Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

Changes stay staged.

## Undo Last Commit (Keep Working Directory)

```bash
git reset --mixed HEAD~1
# OR
git reset HEAD~1
```

Changes unstaged but kept.

## Undo Last Commit (Discard Changes)

```bash
git reset --hard HEAD~1
```

⚠️ This deletes the commit and all changes!

## Revert a Published Commit

For commits already pushed:

```bash
git revert abc1234
```

Creates a new commit that undoes the changes.

## Find Lost Commits

Accidentally reset? Find it:

```bash
git reflog
```

Shows all HEAD movements. Use `git checkout abc1234` to recover.

## Summary

- `git restore` undoes working directory changes
- `git reset` uncommits and unstages
- `git revert` undoes published commits safely
- `git reflog` finds lost commits
