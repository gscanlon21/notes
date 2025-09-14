+++
title = "Android"
updated = 2023-12-21

[extra]
see_also = [
    { title = "Android Debug Bridge", href = "https://developer.android.com/tools/adb" },
]
+++

# Performance
Compile all apps ahead of time

```powershell
./adb shell cmd package compile -m speed -f -a
```