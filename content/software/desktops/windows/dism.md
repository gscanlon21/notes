+++
title = "dism"
description = "Deployment Image Servicing and Management (DISM.exe) is a command-line tool that can be used to service and prepare Windows images."

[extra]
site = "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/what-is-dism"
updated = 2024-01-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}



# Overview

## Fix Corrupted Files or Folders
```powershell
Dism /Online /Cleanup-Image /CheckHealth
```
```powershell
Dism /Online /Cleanup-Image /ScanHealth
```
```powershell
Dism /Online /Cleanup-Image /RestoreHealth
```
```powershell
Dism /online /Cleanup-Image /StartComponentCleanup
```
```powershell
Dism /online /Cleanup-Image /StartComponentCleanup /ResetBase
```

> [!NOTE]
> Restart your computer after running the above commands.
