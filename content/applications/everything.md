+++
title = "Everything"
updated = 2025-03-25

[extra]
site = "https://www.voidtools.com/"
see_also = [
	{ title = "Searching", href = "https://www.voidtools.com/support/everything/searching/" },
]
+++

{{ hidden() }}

# Settings
- General
	- Search
		- [ ] _Match whole filename when using wildcards_
	- Results
		- [x] _Open path with double click in path column_

# Search

## Find Duplicates

```powershell
*.png|*.jpg|*.jpeg dupe:
```
```powershell
path:"C:\Users\*\OneDrive\Pictures\" *.png|*.jpg|*.jpeg dupe:
```