# Copying & Moving

Learn to copy and move files—like drag-and-drop, but with commands.

## Copy a File `cp`

`cp` means "copy":

```bash
cp readme.txt readme-backup.txt
```

Now you have two files: the original and the backup.

**Real-life use:** Making backups before editing important files.

## Copy a Folder `cp -r`

For folders, add `-r` (recursive):

```bash
cp -r my-project my-project-backup
```

This copies everything inside too.

## Move/Rename a File `mv`

`mv` means "move." You can also use it to rename:

```bash
mv readme.txt documents/
```

This moves "readme.txt" into the "documents" folder.

To rename:
```bash
mv old-name.txt new-name.txt
```

**Real-life use:** Organizing files into folders, or fixing typos in file names.

## Quick Summary

| Command | What it does |
|---------|--------------|
| `cp file copy` | Copy file |
| `cp -r folder copy` | Copy folder |
| `mv file folder` | Move file |
| `mv old new` | Rename |

## A Useful Pattern

Copy with a timestamp for versioning:

```bash
cp readme.txt readme-2025-04-03.txt
```

This way you know when each backup was made.
