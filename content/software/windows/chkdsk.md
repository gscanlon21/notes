+++
title = "chkdsk"
updated = 2023-03-09

[extra]
site = "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk"
references = [
  { mark = "1", title = "Docs", href = "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk" }
]
+++

# chkdsk
Checks the file system and file system metadata of a volume for logical and physical errors. If used without parameters, chkdsk displays only the status of the volume and does not fix any errors. If used with the /f, /r, /x, or /b parameters, it fixes errors on the volume.<sup>[1]</sup>

## Fix Corrupted Files or Folders
```powershell
sudo chkdsk /I /C /F
```

And then restart your computer.
