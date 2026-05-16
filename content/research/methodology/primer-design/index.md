+++
title = "Primer Design"
description = ""
sort_by = "title"
weight = 10

[extra]
subtitle = "for PCR"
updated = 2026-06-01
see_also = []
+++

{{ hidden() }}


# Terminology

**Exons**
: Coding regions of a protein.
: Used in translation, though parts may be excluded during translation.

**Introns**
Intervening Sequences
: Non-coding regions of genes.
: These are removed after processing transcription in a process called RNA splicing.

**CDS**
Coding DNA Sequence
: Coding DNA sequence composed of a gene's open reading frame.
: The portion of a gene's DNA sequence that codes for a protein.

**cDNA**
Complementary DNA
: DNA that was reverse transcribed (via reverse transcriptase) from an RNA (e.g., messenger RNA or microRNA).
: Note that mRNA may have untranslated regions depending on the open-reading frame.

**Primers**
: Depending on goal, these may not surround the entire coding DNA sequence.
: - If they don't, you will only get partial clones of your gene; the open reading frame may be cutoff.
: Although primers may be given both in the 5' to 3' direction, the second primer adheres on the complimentary strand.
: These are included in the cloned DNA sequence.

**ORF**
Open Reading Frame
: Spans of DNA sequence between the start and stop codons.
: The "reading", however, refers to the RNA produced by transcription of the DNA and its subsequent interaction with the ribosome in translation
: Since DNA is interpreted in groups of three nucleotides (codons), a DNA strand has three distinct reading frames. The double helix of a DNA molecule has two anti-parallel strands; with the two strands having three reading frames each, there are six possible frame translations.

{% table(header="Open Reading Frames", footer="Open reading frame is bold in reading frame 2") %}
| DNA               | GTACATGAAGAGGTTTACTGAAGGCCGCGTAGAAGCTTAGGTAC                       |
|:-----------------:|:------------------------------------------------------------------:|
| **RNA**           | **GUACAUGAAGAGGUUUACUGAAGGCCGCGUAGAAGCUUAGGUAC**                   |
| Reading Frame 1   | GUA CAU GAA GAG GUU UAC UGA AGG CCG CGU AGA AGC UUA GGU AC         |
| _Reading Frame 2_ | GUAC **_AUG_ AAG AGG UUU ACU GAA GGC CGC GUA GAA GCU** _UAG_ GUA C |
| Reading Frame 3   | GUACA UGA AGA GGU UUA CUG AAG GCC GCG UAG AAG CUU AGG UAC          |
{% end %}



# Finding the Open Reading Frame


