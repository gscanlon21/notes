+++
title = "Differential Expression Analysis, P-Value, Log₂ Fold Change"
description = "Finds the significantly up-regulated or down-regulated genes between a sample and the control."
updated = 2026-06-01
sort_by = "title"
weight = 8

[extra]
rating = 5
site = "https://www.youtube.com/watch?v=qtG2Ce3spOk&list=PLWVKUEZ25V95IKyBrxHtRTK_6Ig8Xi9-f&index=10"
authors = ["Mike Saint-Antoine"]
see_also = [
  { title = "edgeR", href = "https://bioconductor.org/packages//release/bioc/html/edgeR.html" },
  { title = "DESeq2", href = "https://github.com/thelovelab/DESeq2" },
  { title = "Limma-Voom", href = "https://ucdavis-bioinformatics-training.github.io/2018-June-RNA-Seq-Workshop/thursday/DE.html" },
]
map = []
+++

{{ hidden() }}


# Terminology

**Log₂**
: log₂(x) means 2^? = x
: log₂(16) = 4


# Tests

**Kolmogorov–Smirnov Test**
(KS test)
: Nonparametric test for quantifying the distance between a sample and the reference distribution. 
: This does not measure the different between the sample means, only the difference in the shape of the distributions.
: > [!NOTE]
  > Using the _KS test_ here is unrealistic because its underpowered compared to other, more clever, statistical models.

**Log₂ Fold Change**
: How different the mean expression of a sample is compared to the control sample.
: - The fold change is the mean of the sample divided by the mean of the control.


## Why Log₂ Fold Change?
So severity between gene expression regardless of high or low is symmetrical around 0.
Effect size measurement symmetric around 0.
Both genes have twice expression, just in different direction.

**Gene 1**
: mean(sample) = 4
: mean(control) = 2
: fold change = 4/2 = 2
: log₂(2) = 1

**Gene 1**
: mean(sample) = 2
: mean(control) = 4
: fold change = 2/4 = 1/2
: log₂(1/2) = -1

> [!NOTE]
> In order to avoid a divide by zero / log₂(0) error, we add a small number (epsilon, 1/0.1/0.01) to both numerator and denominator of the fold change.
> This dilutes the fold change by a little bit because it swings the fold change closer to 1, and the log₂(1) = 0.
>> Divide by Zero


# Test Corrections

**Multiple-Test Correction**
: Checking your p-value per test opens you up to many chances for a coincidence (type I error?).
: You must adjust your p-value or threshold in order to account for the multitude of tests that are occurring.

**Bonferroni Correction**
_Multiple-Test Correction_
: Divide your p-value by the number of tests that occurred.
: Or multiply your threshold by the number of tests that occurred.

**Benjamini-Hochberg Correction**
_Multiple-Test Correction_
: ?




