+++
title = "Plasmid Design"
description = ""
sort_by = "title"
weight = 10

[extra]
subtitle = "for Transformation"
updated = 2026-06-01
see_also = [
  { title = "Benchling", href = "https://benchling.com" },
  { title = "AddGene", href = "https://www.addgene.org/" },
  { title = "SnapGene", href = "https://www.snapgene.com/" },
  { title = "AlgoSome", href = "https://www.algosome.com/" },
  { title = "Biological Parts", href = "https://parts.igem.org/Main_Page" },
  { title = "Gibson Assembly", href = "https://www.addgene.org/protocols/gibson-assembly/" },
  { title = "Kozak Sequence", href = "https://en.wikipedia.org/wiki/Kozak_consensus_sequence" },
  { title = "How to Design Plasmids: Benchling", href = "https://www.youtube.com/watch?v=3vOSD7hA2nk" },
]
+++

{{ hidden() }}

> [!NOTE]
> We are almost trying to simulate what the plasmid will look like, the finished product.
> We don't need the cut site because that will get cut out of the finished product during processing.

# Components

**Cut Site**
1.
_For restriction enzymes_
: Used to open up the plasmid during gibson assembly.
: Note that gibson assembly will erase the cut site, so we can erase the cut site sequence.

**Promoter**
2.
_TF Promoter_
: Initiates transcription
: Place immediately after the cut site.

**Kozak Sequence**
3. 
: The protein translation initiation site in most eukaryotic cells.

**Your Gene**
4.
: Probably want introns already removed.
: > [!IMPORTANT]
  > Make sure there are no restriction enzyme binding sites in this gene for the restriction site you selected!

**Stop Codon**
5.
: TGA, TAA, TAG

**Terminator Sequence**
6.
: Insert immediately after the stop codon, make sure you don't cover it up!

**Auxotrophic Selection Marker**
: In case of natural antibiotic resistance in yeast, we need a more thorough selection marker.
: A strain of yeast is modified to lose the production of leucine. It's grown in a leucine-enriched medium.
: The selection marker will enable the production of leucine so that transformed targets are pro-trophic.
: After transformation, the leucine-enriched medium is removed and non-transformed targets die.

**Origin of Replication**
: So the plasmid gets replicated (dna is cloned) inside each cell.
: Backbone will have an origin of replication from the source organism (E. coli).
: We need to insert in an origin of replication for the target organism; they are different.
: - E. coli is prokaryotic and has different machinery than a eukaryotic target (different by species).
