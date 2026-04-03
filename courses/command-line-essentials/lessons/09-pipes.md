# Pipes & Combining Commands

The pipe `|` lets you connect commands—like a assembly line.

## What is a Pipe?

The pipe `|` takes the output of one command and sends it to another.

```
command1 | command2
```

This runs `command1`, then feeds its result into `command2`.

## Example: Long Output Made Useful

Say a command outputs 1000 lines. You can't read it all:

```bash
ls -la
```

But with `head`, you see just the first 10:

```bash
ls -la | head
```

Or with `tail`, the last 10:

```bash
ls -la | tail
```

## Example: Search in Output

Find "error" in a command's output:

```bash
cat log.txt | grep "error"
```

The file content flows into grep, which filters for "error".

## Example: Count Results

Count how many files have "readme" in the name:

```bash
ls | grep readme | wc -l
```

Three commands linked together!

## Why This Matters

Pipes let you build complex tools from simple parts. Instead of one command doing everything, you combine small commands that each do one thing well.

This is called "Unix philosophy"—small tools, combined flexibly.

## Practice

Try these combinations:

```bash
# Find files modified recently
ls -lt | head

# Search case-insensitive
cat notes.txt | grep -i "meeting"

# Count lines in all .txt files
cat *.txt | wc -l
```
