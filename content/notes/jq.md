+++
title = "jq"
updated = 2021-03-07

[extra]
site = "https://stedolan.github.io/jq/"
version = "1.6"
+++

# jq {#jq}
A command line json processor

## Interact with the Clipboard

### Pretty print the clipboard contents
```powershell
Get-ClipBoard | jq '.'
```

### Set the results to the clipboard
```powershell
jq '.' | Set-ClipBoard
```

## Flags

### Compress/Minify JSON
Minifies the JSON output

```powershell
jq -c '.'
```

```powershell
jq --compact-output '.'
```

```powershell
echo '{ "beta": [ { "omega": 1 } ], "alpha": [ { "omega": 2 } ] }' | jq -c '.'
{"beta":[{"omega":1}],"alpha":[{"omega":2}]}
```

### Slurp
Wraps the input in an array so the filter is applied to the entire collection only once

```powershell
jq -s '.'
```

```powershell
jq --slurp '.'
```

## Show the keys
```powershell
jq '. |= keys'
```

```powershell
echo '{ "beta": [ { "omega": 1 } ], "alpha": [ { "omega": 2 } ] }' | jq '. | keys'
[
  "alpha",
  "beta"
]
```
