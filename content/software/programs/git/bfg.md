+++
title = "BFG Repo-Cleaner"
description = "The BFG is a simpler, faster alternative to git-filter-branch for cleansing bad data out of your Git repository history."

[extra]
site = "https://rtyley.github.io/bfg-repo-cleaner/"
updated = 2026-01-01
see_also = [
  { title = "Github", href = "https://github.com/rtyley/bfg-repo-cleaner" },
]
+++

{{ hidden() }}


###### Remove all .jpg files
```powershell
.\java.exe -jar bfg.jar --delete-files '*.jpg'
```
