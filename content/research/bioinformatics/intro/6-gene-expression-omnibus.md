+++
title = "Downloading Data from the Gene Expression Omnibus (GEO)"
updated = 2026-02-21
sort_by = "title"
weight = 6

[extra]
site = "https://www.youtube.com/watch?v=4am5XF_597A&list=PLWVKUEZ25V95IKyBrxHtRTK_6Ig8Xi9-f"
authors = ["Mike Saint-Antoine"]
see_also = [
  { title = "GEO", href = "https://www.ncbi.nlm.nih.gov/geo/" },
  { title = "Paper", href = "https://pmc.ncbi.nlm.nih.gov/articles/PMC7667907/" },
  { title = "Dataset", href = "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150910" },
]
+++

##### Unzip .csv.gz on Windows
```powershell
wsl
```
```powershell
gunzip [FILE.csv.gz]
```

# Dataset
- Every row is a different gene.
- Every column is one of the samples.
- Each number tells you the count of how many fragments of genetic material (cDNA) were found.
  - Tells you how much RNA was found for each gene in each sample.
  - Higher numbers indicate higher expression of each gene.

We're interested in which genes are expressed differently between the IPF and the Control samples.
