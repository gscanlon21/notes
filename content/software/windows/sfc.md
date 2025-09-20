+++
title = "sfc"
updated = 2024-12-11

[extra]
site = "https://support.microsoft.com/en-us/topic/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system-files-79aa86cb-ca52-166a-92a3-966e85d4094e"
+++

# sfc
The sfc /scannow command will scan all protected system files, and replace corrupted files with a cached copy that is located in a compressed folder at %WinDir%\System32\dllcache.
The %WinDir% placeholder represents the Windows operating system folder. For example, C:\Windows.

## Fix Corrupted Files or Folders
```powershell
sfc /scannow
```

And then restart your computer.
