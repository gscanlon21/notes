+++
title = "Reading and Processing RNA-seq Data"
updated = 2026-02-22
sort_by = "title"
weight = 7

[extra]
site = "https://www.youtube.com/watch?v=bzgVg3n2P7s&list=PLWVKUEZ25V95IKyBrxHtRTK_6Ig8Xi9-f"
authors = ["Mike Saint-Antoine"]
see_also = [
  { title = "Python", href = "https://www.python.org/" },
  { title = "Jupyter Notebook", href = "https://jupyter.org/" },
  { title = "Normalizing Data", href = "https://www.youtube.com/watch?v=TTUrtCY2k-w" },
]
+++

{{ hidden() }}


# Terminology

**Sequencing Depth**
: The total number of counts in a sample.

**Counts per Million Normalization**
CPM Normalization
: Can help normalize differences in sensitivity of RNA sequencing between samples.
: Divide the number of counts for each gene by the total number of counts in that sample, and multiply by 1 million.
