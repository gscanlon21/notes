+++
title = "Android"
description = ""

[extra]
updated = 2024-01-01
site_version = 1
toc_level = 2
see_also = [
  { title = "Android Debug Bridge", href = "https://developer.android.com/tools/adb" },
]
+++

{{ <hidden page={page} section={section} /> }}

# Performance
Compile all apps ahead of time

```powershell
./adb shell cmd package compile -m speed -f -a
```