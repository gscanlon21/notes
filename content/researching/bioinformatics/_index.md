+++
title = "Bioinformatics"
sort_by = "title"
weight = 1500

[extra]
section_sort_by = "weight"
updated = 2026-06-01
see_also = [
  { title = "Ensembl", href = "https://www.ensembl.info/" },
  { title = "GraphPad Prism", href = "https://www.graphpad.com/features" },
  { title = "Rosalind", href = "https://rosalind.info/problems/locations/" },
  { title = "GEO Browser", href = "https://www.ncbi.nlm.nih.gov/geo/browse/?view=series&type=3" },
  { title = "GEO DataSets", href = "https://www.ncbi.xyz/gds/" },
  { title = "SimUText", href = "https://www.simutext.com/student/" },
  { title = "Biostar Handbook", href = "https://www.biostarhandbook.com/" },
  { title = "PCR Products", href = "https://www.bioinformatics.org/sms2/pcr_products.html" },
  { title = "Translate Tool", href = "https://web.expasy.org/translate/" },
  { title = "UBIC Workshops", href = "https://github.com/WillardFord/UBIC-Workshops" },
  { title = "Gene Structure Display Server", href = "https://gsds.gao-lab.org/" },
  { title = "Cas-OFFinder", href = "http://www.rgenome.net/cas-offinder/" },
  { title = "CNCB Tools", href = "https://www.cncb.ac.cn/b1/tools" },
]
+++

{{ hidden() }}


# Docker Installation
```bash
sudo apt update
sudo apt install docker.io
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

# Nextflow Installation
###### Windows
```bash
curl -fsSL https://get.nextflow.io | bash
sudo mv nextflow /usr/local/bin
```

# Viash Installation
###### Windows
```bash
curl -fsSL dl.viash.io | bash
sudo mv viash /usr/local/bin
```
