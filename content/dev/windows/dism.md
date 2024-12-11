+++
title = "dism"
updated = 2024-12-11

[extra]
site = "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/what-is-dism"
+++

# dism
Deployment Image Servicing and Management (DISM.exe) is a command-line tool that can be used to service and prepare Windows images.

## Fix Corrupted Files or Folders
```powershell
Dism /Online /Cleanup-Image /CheckHealth

Dism /Online /Cleanup-Image /ScanHealth

Dism /Online /Cleanup-Image /RestoreHealth


Dism /online /Cleanup-Image /StartComponentCleanup

Dism /online /Cleanup-Image /StartComponentCleanup /ResetBase
```

And then restart your computer.
