# Searching Files

Find files and content without clicking through folders.

## Find Files by Name `find`

`find` searches for files:

```bash
find . -name "readme.txt"
```

This looks in the current folder (`.`) for a file named "readme.txt".

**Real-life use:** Finding a file you forgot where you saved.

## Find Files by Type `find`

```bash
find . -name "*.txt"
```

The `*` means "anything." This finds all `.txt` files.

## Search Inside Files `grep`

`grep` searches inside files for specific text:

```bash
grep "hello" readme.txt
```

This finds lines containing "hello" in readme.txt.

**Real-life use:** Finding where you defined a variable in your code, or finding a specific setting.

## Case-Insensitive Search `grep -i`

```bash
grep -i "hello" readme.txt
```

The `-i` makes it case-insensitive, so it finds "Hello", "HELLO", "hello", etc.

## Quick Summary

| Command | What it does |
|---------|--------------|
| `find . -name "file"` | Find file by name |
| `find . -name "*.ext"` | Find files by extension |
| `grep "text" file` | Find text inside file |
| `grep -i "text" file` | Case-insensitive search |

## Real-World Example

Say you have 100 files and forgot which one says "TODO":

```bash
grep -r "TODO" .
```

The `-r` means recursive—it searches in all subfolders too.
