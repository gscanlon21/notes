+++
title = "Git Submodules"
description = ""

[extra]
updated = 2027-01-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}


# Config

> [!TIP]
> `cat .gitmodules`
>> List Submodule Names

###### Recommended Git Config
```
[submodule "_notes"]
```
```
  update = rebase
```


# Help

###### Submodule is Detached from Head
```powershell
cd C:/code/notes/content/submodule;
```
```powershell
git stash push -u -m "Detached Head Stash"
```
```powershell
git checkout main;
```
```powershell
git submodule update --remote --rebase;
```
```powershell
git pull origin main --rebase
```
```powershell
git stash apply
```
