+++
title = "Curl"
updated = 2021-02-21

[extra]
site = "https://curl.se/"
+++

# Curl
> Command line tool and library for transferring data with URLs

## Pretty-Print JSON Response

```powershell
curl "https://tscanlon.dev/content/sample.json" -H @{ Accept = "application/json" } -ContentType 'application/json' -UseBasicParsing | ForEach-Object { echo $_.Content } | jq '.'
```