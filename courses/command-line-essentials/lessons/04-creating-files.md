# Creating & Deleting

Now you know how to look around. Let's learn to make and remove things.

## Creating a Folder `mkdir`

`mkdir` means "make directory":

```bash
mkdir my-project
```

Now a new folder called "my-project" exists. You can verify with `ls`.

**Real-life use:** Creating project folders before you start coding.

## Creating a File `touch`

`touch` creates an empty file:

```bash
touch readme.txt
```

This makes a blank file named "readme.txt".

**Real-life use:** Creating placeholder files, log files, or any empty file you need.

## Deleting a File `rm`

`rm` means "remove." Use it carefully—there's no trash bin!

```bash
rm readme.txt
```

The file is gone forever.

## Deleting a Folder `rm -r`

For folders, add `-r` (recursive):

```bash
rm -r my-project
```

This deletes the folder and everything inside it.

## Be Careful!

There is no "undo" in the Terminal. Once deleted, files are gone.

A safe practice: always `ls` before deleting to confirm what you're about to remove.

## A Useful Safety Tip

Use `rm -i` to ask for confirmation before deleting:

```bash
rm -i readme.txt
```

It will ask: `remove readme.txt?` Type `y` for yes, `n` for no.

## Quick Summary

| Command | What it does |
|---------|--------------|
| `mkdir name` | Create folder |
| `touch name` | Create file |
| `rm name` | Delete file |
| `rm -r name` | Delete folder |
| `rm -i name` | Delete with confirmation |
