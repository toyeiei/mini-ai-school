# Viewing Content

You can read files right in the Terminal. No need to open another app.

## Quick Look: `head` and `tail`

`head` shows the first few lines of a file:

```bash
head readme.txt
```

`tail` shows the last few lines:

```bash
tail readme.txt
```

**Real-life use:** Looking at the start/end of log files to see recent activity.

## Full Read: `cat`

`cat` (concatenate) displays the entire file content:

```bash
cat readme.txt
```

This prints everything on the screen.

**Real-life use:** Reading short files like config files or small text files.

## Page by Page: `less`

For long files, use `less`:

```bash
less long-file.txt
```

- Press `Space` to go down
- Press `b` to go up
- Press `q` to quit

This is useful for reading documentation or large files.

## Word Count: `wc`

`wc` counts lines, words, and characters:

```bash
wc readme.txt
```

Output:
```
  42  156  892 readme.txt
```

Means: 42 lines, 156 words, 892 characters.

**Real-life use:** Checking how long a document is before sharing.

## Summary

| Command | What it does |
|---------|--------------|
| `head file` | First 10 lines |
| `tail file` | Last 10 lines |
| `cat file` | Entire file |
| `less file` | Page through file |
| `wc file` | Count lines/words |
