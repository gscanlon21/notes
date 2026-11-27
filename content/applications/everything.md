+++
title = "Everything"
description = "Locate files and folders by name instantly."

[extra]
site = "https://www.voidtools.com/"
updated = 2026-01-01
see_also = [
	{ title = "Searching", href = "https://www.voidtools.com/support/everything/searching/" },
]
+++

{{ <hidden page={page} section={section} /> }}



# Options
# _Ctrl+P

## General
**Search**
: - [ ] _Match whole filename when using wildcards_

**Results**
: - [x] _Open path with double click in path column_

## Indexes
**Exclude**
: **Exclude Folders**
  : `**\notes\**\public\**`
  : `**\notes\public\**`
  : `**\_notes\**`



# Search

## Find Duplicates

```powershell, header=Only These File Types
*.png|*.jpg|*.jpeg dupe:
```

```powershell, header=Only These File Types Inside a Parent Folder
path:"C:\Users\*\OneDrive\Pictures\" *.png|*.jpg|*.jpeg dupe:
```


## Find in a Folder

```powershell, header=Recursive Children
"C:\Users\*\OneDrive\Pictures\" test.png
```

```powershell, header=Only the Parent Folder
parent:"C:\Users\*\OneDrive\Pictures\" test.png
```
