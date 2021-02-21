+++
title = "Curl"
updated = 2021-02-21
+++

# [Curl](https://curl.se/)
> Command line tool and library for transferring data with URLs

## Pretty-Print JSON Response

###### **`Powershell`**
```powershell
curl "https://tscanlon.com/content/sample.json" -H @{ Accept = "application/json" } -ContentType 'application/json' -UseBasicParsing | ForEach-Object { echo $_.Content } | jq '.'
```