+++
title = "Transformation"
description = "Genetic transformation using CRISPR gene editing."
sort_by = "title"
weight = 970

[extra]
subtitle = "CRISPR"
updated = 2026-06-01
see_also = [
  { title = "Crispr_C" },
  { title = "DNA Plasmids" },
  { title = "Circular Vectors" },
]
+++

{{ hidden() }}


# Terminology

**Virus-Induced Genome Editing**
VIGE
: ?

**Floral Dip Technique**
: "However, transgenes derived from the AMGT vector are randomly integrated into the host genome; this might result in the disruption of host gene expression. Such limitations of AMGT call for alternative physical or chemical methods to expand the scope of plant engineering."

# Overview

**CRISPR-based gene editing in plants: Focus on reagents and their delivery tools**
Ebrahimi et al. 2024
_[Review Article](/doi/10.34172/bi.30019.pdf)_ 
: ?


{% table(header="Summary of CRISPR delivery methods in plant genome editing", footer="[CRISPR-based gene editing in plants: Focus on reagents and their delivery tools](/doi/10.34172/bi.30019.pdf)") %}
| Method                                      | Description                                                                                                                                                                     | Applications and Advantages                                                                                                                                | Limitations and Challenges                                                                              |
|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Agrobacterium-Mediated Transformation (AMT) | Agrobacterium tumefaciens delivers CRISPR components through T-DNA transfer, allowing gene editing in various plants.                                                           | - AMT effectively modifies wheat, tomato, tobacco, etc.<br>- CRISPR-Cas9 via AMT enhances grain weight, yields, and provides resistance to powdery mildew. | - Limited cargo capacity.<br>- Off-target effects can occur.                                            |
| Biolistic Transformation                    | Particles coated with CRISPR components are bombarded into plant cells, introducing DNA without direct cell contact.                                                            | - Utilized in maize, wheat, barley, rice, etc.<br>- Overcomes limitations of other methods in introducing foreign DNA into plant tissues.                  | - Tissue culture is often required for regeneration.<br>- Limited efficiency compared to other methods. |
| Electroporation                             | Electrical current creates temporary pores in cell membranes, facilitating efficient entry of CRISPR components.                                                                | - High efficiency and minimal off-target effects.<br>- Used in tobacco and switchgrass for CRISPR-Cas9 delivery.                                           | - Dependency on electric field application.                                                             |
| Expression of Developmental Regulators      | WUS and BBM induce new embryogenesis, transforming rejected lines. Ectopic expression of regulators (IPT, STM, BBM, GRF4, GIF1) enhances transformation frequencies.            | - Successful transformation of previously rejected lines.<br>- Increased genome-edited plant numbers with CRISPR-Cas9 and developmental regulators.        | - Poor performance in DNA delivery and plant regeneration.                                              |
| RNA Viruses and Mobile Guide RNAs           | TRV, a positive-strand RNA virus, delivers sgRNAs into Cas9-overexpressing plants through Agrobacterium infiltration. Sonchus yellow net rhabdovirus delivers sgRNA and SpCas9. | - TRV achieves systemic, heritable gene editing.<br>- Sonchus yellow net rhabdovirus induces heritable mutations.                                          | - Low cargo capacity of viruses.<br>- TRV can't transmit to progeny.                                    |
{% end %}



# Virus-Induced Genome Editing

## Research Articles

**High-efficiency multiplex biallelic heritable editing in Arabidopsis using an RNA virus**
Nagalakshmi et al. 2022
_[Research Article](/doi/10.1093/plphys/kiac159.pdf)_ 
: "[First], we tested editing in Arabidopsis using TRV with sgRNA targeted to PHYTOENE DESATURASE3 (AtPDS3) fused to tRNAIleu."
: "Agrobacterium harboring TRV1 and TRV2::sgRNAAtPDS3-tRNAIleu were delivered into Col-0 expressing SpCas9 (Col-0::SpCas9) by syringe infiltration of leaves, agro-pricking, and agro-flooding meth ods (see Supplemental Text S1 for details) (Supplemental Figure S2)."
: - "About 3% (1/36) and 8% (3/36) of the plants showed photobleached regions on the systemic leaves with leaf infiltration and agro-pricking methods, respectively (Supplemental Figure S3A). With agro-flooding, about 22% of the plants (8/36) showed the photobleaching phenotype (Supplemental Figure S3B) indicating that the agro-flooding is more efficient for sgRNA delivery into Arabidopsis."
: "[Second], we evaluated the movement of TRV with sgRNAAtPDS3 fused to mAtFT and tRNAMet (Supplemental Figure S1) in Arabidopsis using agro-flooding method." 
: - "A substantially higher amount of virus was detected in systemic leaves of TRV2::sgRNAAtPDS3-tRNAIleu infected plants compared with sgRNAAtPDS3 fused to mAtFT, tRNAMet, or sgRNAAtPDS3 alone (Figure 1A) indicating that the tRNAIleu facilitates better TRV movement in Arabidopsis." 
: These results indicate that TRV2::sgRNAAtPDS3-tRNAIleu induces high-efficiency somatic and heritable editing in Arabidopsis.

**Heritable virus-induced germline editing in tomato**
Oh et al. 2025
_[Research Article](/doi/10.1111/tpj.70115.pdf)_ 
: "These findings underscore the use of appropriate promoters to express Cas nucleases and optimized environmental conditions to enhance heritable genome editing efficiency in tomato using [virus-induced germline editing]."

**Virus-mediated, heritable gene editing in groundcherry (Physalis grisea)**
Tibebu et al. 2026
_[Research Article](/doi/10.3389/fpls.2026.1794888.pdf)_ 
: ?


## Methodology

**Targeted gene deletion with SpCas9 and multiple guide RNAs in Arabidopsis thaliana: four are better than two**
Ordon et al. 2023
_[Methodology](/doi/10.1186/s13007-023-01010-4.pdf)_ 
: ?

**Virus-Mediated Genome Editing in Plants Using the CRISPR/Cas9 System**
Mahas et al. 2019
_[Methodology](/doi/10.1007/978-1-4939-8991-1_23.pdf)_ 
: ?



# Floral Dip Technique

## Research Articles

**CRISPR/Cas9 mutagenesis of the Arabidopsis GROWTH-REGULATING FACTOR (GRF) gene family**
Angulo et al. 2023
_[Research Article](/doi/10.3389/fgeed.2023.1251557.pdf)_ 
: ?

**Direct protein delivery into intact Arabidopsis cells for genome engineering**
Furuhata et al. 2024
_[Research Article](/doi/10.1038/s41598-024-72978-9.pdf)_ 
: ?


## Methodology

**Floral dip: a simplified method for Agrobacterium-mediated transformation of Arabidopsis thaliana**
Clough et al. 1998
_[Methodology](/doi/10.1046/j.1365-313x.1998.00343.x.pdf)_ 
: ?

**Protocol: Streamlined sub-protocols for floral-dip transformation and selection of transformants in Arabidopsis thaliana**
Davis et al. 2009
_[Methodology](/doi/10.1186/1746-4811-5-3.pdf)_ 
: ?

**An improved method for preparing Agrobacterium cells that simplifies the Arabidopsis transformation protocol**
Logemann et al. 2006
_[Methodology](/doi/10.1186/1746-4811-2-16.pdf)_ 
: ?


## Review Articles

> [!TIP]
> Good for background information and broad concepts.
>> Review Articles


**Arabidopsis thaliana Floral Dip Transformation Method**
Bent et al. 2006
_[Review Article](/doi/10.1385/1-59745-130-4-87.pdf)_ 
: ?



# CRISPR/Cas9

## Research Articles

**Improving the genome editing efficiency of CRISPR/Cas9 in Arabidopsis and Medicago truncatula**
Wolabu et al. 2020
_[Research Article](/doi/10.1007/s00425-020-03415-0.pdf)_ 
: "The improved UBQ10-Cas9 vector highly enhanced the mutation efficiency by four-fold over the commonly used 35S promoter in both [Arabidopsis and M. truncatula]."

