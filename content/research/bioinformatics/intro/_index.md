+++
title = "Intro to Bioinformatics"
sort_by = "title"

[extra]
site = "https://www.youtube.com/watch?v=3XFpxQF0J74&list=PLWVKUEZ25V95IKyBrxHtRTK_6Ig8Xi9-f"
authors = ["Mike Saint-Antoine"]
see_also = [
  { title = "Intro to Bioinformatics", href = "https://www.youtube.com/watch?v=3XFpxQF0J74" },
  { title = "High School Bio Review", href = "https://www.youtube.com/watch?v=1-zdVnDco00" },
  { title = "Molecular Bio Review", href = "https://www.youtube.com/watch?v=G50Kw78ltCU" },
  { title = "Gene Expression Data Format", href = "https://www.youtube.com/watch?v=EcLF-L-HDf0" },
]
+++

# Course Overview

## Central Dogma of Molecular Biology
## _Gene Expression 
> DNA > (transcription) > mRNA ("transcripts") > (translation) > Proteins

Can be thought of as a semi-random stochastic process, where quantities of transcripts and genes are made based on biological needs of the cell and float around and break down over time. Something like cancer or environmental disruptors may change the biological needs of the cell (different gene expression patterns).

**Proteomics**
: Big data study of proteins.

**Transcriptomics**
: Big data study of transcripts.

**Genomics**
: Big data study of genes.


# Molecular Biology Review
It can be useful, though not accurate, to think about gene expression as a 1:1:1 ratio between genes:transcripts:proteins.

**Protein Isoforms**
: Different forms of proteins produced by the same gene.
: One genes can produce many different types of proteins.

**Transcription-Factor Proteins**
_A Form of Gene Regulation_
: Binds to the DNA close to the site of another gene and makes it easier or harder for mRNA to be produced from that other gene.

**Nucleotide**
: A base attached to a sugar and phosphate(s).

## DNA
A nucleic acid, made up of nucleotides. Double stranded.

##### Four Bases
Sequences of base pairs encode information. 
Possible for there to be a pair mismatch, though rare.

**AC**
_Base Pair_
: **Adenine**

  **Thymine**

**CG**
_Base Pair_
: **Cytosine**

  **Guanine**

## Transcription
DNA is read by RNA Polymerase into mRNA.

mRNA is complementary to the DNA being read (with Thymine swapped with Uracil).

**Coding Strand**
: The strand that the mRNA matches (with T -> U).

**Template Strand**
: The strand that RNA Polymerase reads to form the compliment of. 

### mRNA
A nucleic acid, made up of nucleotides. Usually single stranded.

##### Four Bases
**AU**
_Base Pair_
: **Adenine**

  **Uracil**

**CG**
_Base Pair_
: **Cytosine**

  **Guanine**

## Translation
{{ image(title="Amino Acids Codon Chart", file="AminoAcids_table.svg") }}

> mRNA > Amino Acids > Proteins.

mRNA sequence can be thought of in triplets, where a triplet of nucleotides is called a codon.

### Proteins
A chain of amino acids is folded together to produce the final protein structure.


## Epigenetics
Ways DNA can be regulated based on the 3D structure of the DNA. Useful for cell differentiation from stem cell.


# Gene Expression Data Format