+++
title = "Curl"
updated = 2021-05-23

[extra]
site = "https://curl.se/"
+++

# Curl
A command line tool and library for transferring data with URLs

## Pretty-Print JSON Response
Combines the JSON response with [jq](@/dev_notes/jq.md#jq) to output the JSON results to the terminal window. That can further be piped to `Set-ClipBoard` to save the results to the system clipboard.

```powershell
curl "https://ascallion.info/content/sample.json" -H @{ Accept = "application/json" } -ContentType 'application/json' -UseBasicParsing | ForEach-Object { echo $_.Content } | jq '.'
```