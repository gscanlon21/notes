+++
title = "Single-Cell mRNA Sequencing"
description = "A method for assaying chromatin accessibility genome-wide"
aliases = ["single-cell-rna-seq"]
sort_by = "title"
weight = 1000

[extra]
subtitle = "Single-Cell RNA-seq"
updated = 2026-06-01
see_also = []
+++

{{ hidden() }}


**ATAC-seq: A Method for Assaying Chromatin Accessibility Genome-Wide**
Buenrostro et al. 2015
_[Methodology](/doi/10.1002/0471142727.mb2129s109.pdf)_ 
: ?


**Review and Evaluate the Bioinformatics Analysis Strategies of ATAC-seq and CUT&Tag Data**
Cheng et al. 2024
_[Research Article](/doi/10.1093/gpbjnl/qzae054.pdf)_ 
: ?

**Analytical Approaches for ATAC-seq Data Analysis**
Smith et al. 2021
_[Research Article](/doi/10.1002/cphg.101.pdf)_ 
: "Here, we explain the fundamentals of ATAC-seq data processing, summarize common analysis approaches, and review computational tools to provide recommendations for different research questions."


# Generic ATAC-seq Analysis Workflow

##### General Data Processing

**Convert Format**
1. 
: ?

**Raw Read Quality**
1.5 
: ?

**Trim Adapters**
2. 
: ?

**Align Reads**
3. 
: ?

**Remove Mitochondrial Reads**
4. 
: ?

**Deduplicate**
5. 
: ?

**Signal Tracks**
6. 
: ?

**Call Peaks**
7. 
: ?

**QC Plots**
7a.
: ?

**Summary Statistics**
7b.
: ?

##### Project Specific Analysis

**Motif Enhancement**
9. 
: ?

**Differentially Accessible Regions**
9. 
: ?

**Region Enrichment**
9. 
: ?


**Nucleosome Positioning**
9. 
: ?


# Guides & Tools

{% table(header="Step by Step Guides to Performing ATAC-seq Data Analysis", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Title and author | Notes and link | Last Updated |
|------------------|----------------|-----|
| **ATAC-seq data analysis: from FASTQ to peaks**<br>Yiwei Niu | [Blog style walkthrough of generalized ATAC-seq data analysis.](https://yiweiniu.github.io/blog/2019/03/ATAC-seq-data-analysis-from-FASTQ-to-peaks/) | 2019 |
| **BIOINF525 Lab 3.2**<br>Steve Parker | [Minimal standard ATAC-seq analysis walkthrough.](https://github.com/ParkerLab/) | 2016 |
| **Analysis of ATAC-seq data in R and Bioconductor**<br>Rockefeller Bioinformatics Resource | [Bioconductor ATAC-seq analysis course.](https://rockefelleruniversity.github.io/RU_ATACseq/) | 2018 |
| **ATAC-seq**<br>John M. Gaspar | [Generalized ATAC-seq analysis walkthrough with included custom scripts.](https://github.com/harvardinformatics/ATAC-seq) | 2019 |
| **ATAC-seq data analysis**<br>Delisle L; Doyle M; & Heyl F | [Galaxy training walkthrough of generalized ATAC-seq analysis.](https://galaxyproject.github.io/training-material/topics/epigenetics/tutorials/atac-seq/tutorial.html) | 2020 |
{% end %}

{% table(header="Raw ATAC-seq Data Processing Pipelines", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Pipeline | Language | Notes | Docs | Citation |
|----------|-----------|-------|------|----------|
| AIAP | Bash; R; Python | Optimized analysis with novel QC metrics | ++ | Liu et al. (2019)<br>Last updated: 2019 |
| ATAC2GRN | Bash; Python | Parameter optimized ATAC-seq pipeline | + | Pranzatelli, Michael, & Chiorini (2018)<br>Last updated: 2018 |
| ATAC-pipe | Python; R | Analysis pipeline for ATAC-seq data including TF footprinting; cell-type classification; and regulatory network creation | +++ | Zuo et al. (2019)<br>Last updated: 2019 |
| ATACProc | Bash; Python; R | Complete pipeline with additional downstream analyses included | ++ | Unpublished<br>Last updated: 2019 |
| Basepair | NA | Commercial. Web-based GUI for complete analysis | ? | Unpublished |
| CIPHER | R; Perl; Python | A data processing platform for ChIP-seq; RNA-seq; MNase-seq; DNase-seq; ATAC-seq; and GRO-seq datasets | + | Guzman & D’Orso (2017)<br>Last updated: 2017 |
| ENCODE | Python; Bash | Complete pipeline following ENCODE standards for ATAC/DNase-seq analysis | ++ | Unpublished<br>Last updated: 2020 |
| esATAC | R | Complete pipeline including downstream analyses | +++ | Wei, Zhang, Fang, Li, & Wang (2018)<br>Last updated: 2019 |
| GUAVA | Java; Python; R | GUI based complete ATAC-seq pipeline | + | Divate & Cheung (2018)<br>Last updated: 2019 |
| I-ATAC | Java | GUI based interactive ATAC-seq pipeline | + | Ahmed & Ucar (2017)<br>Last updated: 2017 |
| nfcore/atacseq | Python; R | Complete pipeline build using Nextflow | +++ | Ewels et al. (2019)<br>Last updated: 2019 |
| PEPATAC | Python; R; Perl | Complete pipeline with unique analytical approaches and QC metrics | +++ | Unpublished<br>Last updated: 2019 |
| pyflow-ATACseq | Bash; Python | ATAC-seq snakemake pipeline with included nucleosome positioning and TF footprinting | ++ | Unpublished<br>Last updated: 2019 |
| snakePipes ATAC-seq | Python | Workflow system including ATAC-seq analysis | +++ | Bhardwaj et al. (2019)<br>Last updated: 2019 |
| Tobias Rausch | Bash; R; Python | Complete pipeline with emphasis on downstream analyses | ++ | Rausch et al. (2019)<br>Last updated: 2020 |
{% end %}



{% table(header="ATAC-seq Advanced Quality Control Metric Tools", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Tool | Languages | Notes | Docs | Citation |
|------|------------|-------|------|----------|
| ATAqC | Bash; Python | Generate ATAC-seq specific quality control metrics. | + | Unpublished<br>Last updated: 2017 |
| ATACseqQC | R | Provides ATAC-seq specific quality control metrics and transcription factor footprinting. | +++ | Ou et al. (2018)<br>Last updated: 2018 |
| ataqv | C++; Bash | ATAC-seq QC and visualization. | +++ | Orchard, Kyono, Hensley, Kitzman, & Parker (2020)<br>Last updated: 2020 |

{% end %}


{% table(header="Peak Calling Tools", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Tool | Languages | Notes | Docs | Citation |
|------|------------|-------|------|----------|
| F-Seq | Java | Can be used as general peak caller to identify regions of open chromatin. | ++ | Boyle et al. (2008)<br>Last updated: 2016 |
| Genrich | C | Peak caller for genomic enrichment assays with specific ATAC-seq mode. | +++ | unpublished<br>Last updated: 2020 |
| HMMRATAC | Java | Identify nucleosome positioning and leverage ATAC-seq specific read outs to call peaks. | +++ | Tarbell & Liu (2019)<br>Last updated: 2020 |
| Hotspot2 | C++ | Identify significantly enriched genomic regions. | ++ | Unpublished<br>Last updated: 2019 |
| HOMER | Perl; C++ | Suite of tools that include the ability to call peaks from DNA enrichment assays. | +++ | Heinz et al. (2010) |
| MACS2 | Python | Specifically designed for ChIP-seq but broadly applicable to any DNA enrichment assay to call peaks. | +++ | Zhang et al. (2020)<br>Last updated: 2020 |
| PeaKDEck | Perl | Peak calling program for DNase-seq data. | +++ | McCarthy & O’Callaghan (2014)<br>Last updated: 2014 |
{% end %}


{% table(header="Tools to Investigate Differentially Accessible Regions", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Tool | Languages | Notes | Docs | Citation |
|------|------------|-------|------|----------|
| DAStk | Python | Identifies changes in transcription factor activity by looking at changes in chromatin accessibility | +++ | Tripodi et al. (2018)<br>Last updated: 2020 |
| diffTF | Python; R | Identifies differential transcription factors. Can operate in basic mode with just chromatin accessibility or in classification mode where it integrates RNA-seq. | +++ | Berest et al. (2019)<br>Last updated: 2020 |
{% end %}


{% table(header="Motif Enrichment and Transcription Factor Footprinting Tools", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Tool | Languages | Notes | Docs | Citation |
|------|------------|-------|------|----------|
| BiFET | R | Identify overrepresented transcription factor footprints. | ++ | Youn et al. (2019)<br>Last updated: 2019 |
| BinDNase | R | Transcription factor binding prediction using DNase-seq. | + | Kähärä & Lähdesmäki (2015)<br>Last updated: 2015 |
| CENTIPEDE | R | Transcription factor footprinting and binding site prediction. | ++ | Pique-Regi et al. (2011)<br>Last updated: 2010 |
| DeFCoM | Python | Detecting transcription factor footprints and underlying motifs using supervised learning. | +++ | Quach & Furey (2017)<br>Last updated: 2017 |
| DNase2TF | R | Identify footprint candidates from DNase-seq data on user-specified regions. | + | Sung et al. (2014)<br>Last updated: 2017 |
| HINT-ATAC | Python | Use open chromatin data to identify transcription factor footprints with modifications specific to ATAC-seq data. | +++ | Li et al. (2019)<br>Last updated: 2019 |
| HOMER | Perl; C++ | A suite of tools for motif discovery and enrichment. | +++ | Heinz et al. (2010)<br>Last updated: 2019 |
| MEME Suite | Perl; Python | Suite of tools for motif discovery; enrichment; and GO term analyses. | +++ | Bailey et al. (2009)<br>Last updated: 2020 |
| PIQ | Bash; R | Models genome-wide DNase profiles to identify transcription factor binding sites. | ++ | Sherwood et al. (2014)<br>Last updated: 2016 |
| TOBIAS | Python | Identify transcription factor footprints. | ++ | Bentsen et al. (2019)<br>Last updated: 2020 |
| TRACE | Python | Transcription factor footprinting. | ++ | Ouyang & Boyle (2019)<br>Last updated: 2020 |
| Wellington | Python | Identify TF footprints using DNase-seq data. | +++ | Piper et al. (2013)<br>Last updated: 2019 |
{% end %}


{% table(header="Tools to Investigate Nucleosome Positioning", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Tool | Languages | Notes | Docs | Citation |
|------|------------|-------|------|----------|
| HMMRATAC | Java | Identify nucleosome positioning and leverage ATAC-seq specific read outs to call peaks. | +++ | Tarbell & Liu (2019)<br>Last updated: 2020 |
| NucleoATAC | Python; R | Call nucleosomes using ATAC-seq data. | +++ | Schep et al. (2015)<br>Last updated: 2019 |
| NucTools | Perl; R | Calculate nucleosome occupancy profiles on chromatin accessibility data. | +++ | Vainshtein et al. (2017)<br>Last updated: 2019 |
{% end %}

{% table(header="Tools to Investigate Region Enrichment", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Tool | Languages | Notes | Docs | Citation |
|------|------------|-------|------|----------|
| Annotatr | R | Annotate summarize and visualize genomic regions. | +++ | Cavalcante & Sartor (2017)<br>Last updated: 2019 |
| BART/BARTweb | Python | Predict factors that bind at cis-regulatory regions. | +++ | Wang et al. (2018)<br>Last updated: 2020 |
| chipenrich | R | Perform gene set enrichment testing using genomic regions. | +++ | Welch et al. (2014)<br>Last updated: 2020 |
| coloc-stats | Python | Perform co-localization analysis of genomic regions. | +++ | Simovski et al. (2018)<br>Last updated: 2019 |
| COLO | JSP | Identify genomic features in close proximity to user-submitted genomic regions. | ++ | Kim et al. (2015)<br>Last updated: 2015 |
| FEATnotator | Perl; R | Annotate genomic regions. | ++ | Podicheti & Mockaitis (2015)<br>Last updated: 2018 |
| GenomeRunner | .NET | Perform annotation and enrichment of genomic regions against default or custom regulatory regions. | ++ | Dozmorov et al. (2016)<br>Last updated: 2016 |
| GenometriCorr | R | Determine spatial correlation between region sets. | ++ | Favorov et al. (2012)<br>Last updated: 2020 |
| Genomic Association Tester | Python | Calculate the significance of overlaps between multiple genomic region sets. | +++ | Heger et al. (2013)<br>Last updated: 2019 |
| GIGGLE | C | Genomics search engine to uncover significantly shared genomic loci (regions) between data. | +++ | Layer et al. (2018)<br>Last updated: 2019 |
| GLANET | Java; Perl | Genomic loci annotation and enrichment tool between sets of genomic regions. | +++ | Otlu et al. (2017)<br>Last updated: 2019 |
| GREAT | C | Annotate genomic regions. | +++ | McLean et al. (2010)<br>Last updated: 2019 |
| LOLA/LOLAweb | R | Determine significant enrichment between region sets to inform on biological meaning. | +++ | Sheffield & Bock (2016)<br>Last updated: 2019 |
| regioneR | R | Evaluate significant associations between region sets using permutation testing. | +++ | Gel et al. (2016)<br>Last updated: 2020 |
| StereoGene | C++; R | Estimate genome-wide correlation between pairs of genomic features. | ++ | Stavrovskaya et al. (2017)<br>Last updated: 2019 |
{% end %}

{% table(header="Available Tools for Single-Cell ATAC-seq Data Processing", footer="[Analytical Approaches for ATAC-seq Data Analysis](/doi/10.1002/cphg.101.pdf)") %}
| Tool | Languages | Notes | Docs | Citation |
|------|------------|-------|------|----------|
| BAP | R; Python | Bead-based scATAC-seq data processing. | ++ | Lareau et al. (2019)<br>Last updated: 2019 |
| BROCKMAN | R; Bash; Ruby | Convert genomics data into K-mer words associated with chromatin marks used to compare and identify changes across samples. | ++ | de Boer & Regev (2018)<br>Last updated: 2018 |
| Cell Ranger ATAC | NA | Commercial. Set of analysis pipelines for Chromium single cell ATAC-seq. | +++ | Unpublished |
| chromVAR | R | Identify transcription factor accessibility in single-cell data. Enables clustering of single-cell ATAC-seq data. | +++ | Schep et al. (2017)<br>Last updated: 2019 |
| Cicero | R | Predict cis-regulatory DNA interactions using single-cell chromatin accessibility data. | +++ | Pliner et al. (2018)<br>Last updated: 2019 |
| cisTopic | R | Identify cell states and cis-regulatory topics from single-cell data. | +++ | Bravo González-Blas et al. (2019)<br>Last updated: 2019 |
| scABC | R | Classify single-cell ATAC using unsupervised clustering and identify chromatin regions specific to cell identity. | + | Zamanighomi et al. (2018)<br>Last updated: 2019 |
| SCALE | Python | Clustering and visualization of single-cell ATAC-seq data into interpretable cell populations. | ++ | Xiong et al. (2019)<br>Last updated: 2019 |
| Scasat | Bash; Python; R | Complete pipeline to process scATAC-seq data with simple steps. | +++ | Baker et al. (2019)<br>Last updated: 2019 |
| scATAC-pro | R; Python | Comprehensive pipeline for single cell ATAC-seq analysis. | +++ | Yu et al. (2019)<br>Last updated: 2020 |
| scOpen | Python | Chromatin-accessibility estimation of single-cell ATAC data. | + | Li et al. (2019)<br>Last updated: 2020 |
| SCRAT | R | Useful for studying single cell heterogeneity. Can identify changes in gene sets or transcription factor binding sites. Includes GUI and web-based service. | +++ | Ji et al. (2017)<br>Last updated: 2018 |
| SnapATAC | R; Python | Single Nucleus Analysis Pipeline for ATAC-seq. | +++ | Fang et al. (2019)<br>Last updated: 2019 |
{% end %}
