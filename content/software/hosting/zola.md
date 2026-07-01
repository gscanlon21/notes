+++
title = "Zola"
description = "Your one-stop static site engine."
updated = 2027-01-01

[extra]
site = "https://www.getzola.org"
see_also = [
	{ title = "Tera Templating", href = "https://keats.github.io/tera/docs/"},
	{ title = "Zola Documentation", href = "https://www.getzola.org/documentation/getting-started/overview/"},
]
+++

{{ hidden() }}


# Windows

###### Build Subsections
```bash
cd /mnt/c/code/notes/content/submodule && for dir in */; do sudo zola --root "$PWD/$dir" build; done
```
```powershell
cd "C:\code\notes\content\submodule"; Get-ChildItem -Directory | ForEach-Object { zola --root $_.FullName build; };
```


###### Build and Serve
```powershell
cd "C:\code\notes\content\submodule"; Get-ChildItem -Directory | ForEach-Object { zola --root $_.FullName build; }; cd "C:\code\notes"; zola serve --debounce 1000;
```

###### Serve
```powershell
cd "C:\code\notes"; zola serve --debounce 1000;
```
