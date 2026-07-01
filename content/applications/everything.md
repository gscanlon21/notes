+++
title = "Everything"
updated = 2026-03-25

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

###### Only These File Types
```powershell
*.png|*.jpg|*.jpeg dupe:
```

{{ extend() }}

###### Only These File Types Inside a Parent Folder
```powershell
path:"C:\Users\*\OneDrive\Pictures\" *.png|*.jpg|*.jpeg dupe:
```

## Find in a Folder

###### Recursive Children
```
"C:\Users\*\OneDrive\Pictures\" test.png
```

{{ extend() }}

###### Only the Parent Folder
```
parent:"C:\Users\*\OneDrive\Pictures\" test.png
```
