+++
title = "jq"
updated = 2021-02-21

[extra]
site = "https://stedolan.github.io/jq/"
+++

# jq
A command link json processor

## Pipeing
The |= instead of the | passes the values along instead of stripping them.


###### **`Pretty print the contents from the clipboard`**
```powershell
Get-ClipBoard | jq '.'
```

###### **`Set the results on the clipboard`**
```powershell
Get-ClipBoard | jq '.' | Set-ClipBoard
```

###### **`Map a property to an array`**
```powershell
Get-ClipBoard | jq '[.someprop]'
```

## Compress/Minify JSON
```powershell
jq -c '.'
```

## Show the keys
```powershell
jq '. |= keys'
```

### Two levels deep
```powershell
jq '.| map_values(keys)'
```

## Sort by keys then nested property
```powershell
 q '.[] |= sort | .[] |= sort_by(.uid) | .'
```