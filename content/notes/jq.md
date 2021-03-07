+++
title = "jq"
updated = 2021-03-07

[extra]
site = "https://stedolan.github.io/jq/"
version = "1.6"
+++

# jq
A command line json processor

## Piping
The |= instead of the | passes the values along instead of stripping them.


## Interact with the Clipboard

### Pretty print the clipboard contents
```powershell
Get-ClipBoard | jq '.'
```
######

### Set the results to the clipboard
```powershell
Get-ClipBoard | jq '.' | Set-ClipBoard
```

## Array Manipulation

### Map a property to an array
```powershell
Get-ClipBoard | jq '[.someprop]'
```

## Flags

### Compress/Minify JSON
```powershell
jq -c '.'
```

## Show the keys
```powershell
jq '. |= keys'
```
######

### Two levels deep
```powershell
jq '.| map_values(keys)'
```

## Sorting

### Sort by keys then nested property
```powershell
 q '.[] |= sort | .[] |= sort_by(.uid) | .'
```