+++
title = "Git Submodules"
+++

# Errors

## Submodule is Detached from Head

```powershell
cd C:/path/to/project/root
git submodule update --remote --rebase
```

```powershell
git submodule update 
git submodule foreach git checkout main 
git submodule foreach git pull origin main 
```