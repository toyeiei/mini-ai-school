# Navigating Files

The Terminal has a file system just like your Finder or File Explorer. Let's learn to move around.

## Where Am I? `pwd`

`pwd` stands for "print working directory." It shows you exactly where you are:

```bash
pwd
```

Output:
```
/Users/kasidis/Projects
```

Think of it like asking Google Maps: "Where am I right now?"

## What's Here? `ls`

`ls` lists files and folders in your current location:

```bash
ls
```

Output:
```
Desktop    Downloads    Documents    Pictures
```

**Real-life use:** Seeing what files exist before opening them.

## Going Somewhere `cd`

`cd` means "change directory." It's like double-clicking a folder.

```bash
cd Documents
```

Now you're inside the Documents folder. Try `pwd` again to confirm.

## Going Back `cd ..`

Two dots `..` means "parent folder" (the one containing the current folder).

```bash
cd ..
```

This takes you back to the previous folder.

## Going Home `cd ~` or just `cd`

The tilde `~` always means your home folder:

```bash
cd ~
```

Or just type `cd` with nothing else.

## Tip: Auto-Complete

Press `Tab` while typing to auto-complete folder names:

```bash
cd Docu[Tab]
```

The Terminal fills in "Documents" for you. Neat, right?

## Quick Summary

| Command | What it does |
|---------|--------------|
| `pwd` | Where am I? |
| `ls` | What's here? |
| `cd folder` | Go into folder |
| `cd ..` | Go back |
| `cd ~` | Go home |

Practice: `cd` to your Desktop, run `ls`, then `cd ..` back.
