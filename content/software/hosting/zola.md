+++
title = "Zola"
updated = 2025-12-12

[extra]
site = "https://www.getzola.org"
see_also = [
	{ title = "Tera Templating", href = "https://keats.github.io/tera/docs/"},
	{ title = "Zola Documentation", href = "https://www.getzola.org/documentation/getting-started/overview/"},
]
+++

###### Build
```powershell
cd "C:\code\notes\content\submodule"; Get-ChildItem -Directory | ForEach-Object { Set-Location $_.FullName; zola build; };
```
######
###### Build and Serve
```powershell
cd "C:\code\notes\content\submodule"; Get-ChildItem -Directory | ForEach-Object { Set-Location $_.FullName; zola build; }; cd "C:\code\notes"; zola serve;
```