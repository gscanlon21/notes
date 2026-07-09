+++
title = "Detection of Enterotoxigenic Vibrio cholerae in Foods by the Polymerase Chain Reaction"
description = "This is a mostly sea-fairing bacterium."
render = false
weight = 35

[extra]
updated = 2026-06-01
site_version = 1
toc_level = 2
see_also = [
  { title = "Chapter 28", href = "https://www.fda.gov/food/laboratory-methods-food/bam-chapter-28-detection-enterotoxigenic-vibrio-cholerae" },
]
+++

{{ hidden() }}


# Chapter 28

## Introduction

>> Recent epidemics of cholera in various parts of the world have emphasized the urgent need for 
rapid and reliable detection methods for Vibrio cholerae, especially in food and water. Classical 
microbiological methods are sensitive and specific; however, they require several days to 
complete (see Chapter 9) and may result in considerable loss of perishable foods. Since 
cholera toxin production (encoded by the ctxAB genes) is the major factor in the pathogenesis 
of cholera, a polymerase chain reaction (PCR) method that selectively amplifies a DNA 
fragment within the ctxAB operon of V. cholerae has been developed and applied to various 
foods (19). 

>> The PCR was first described by Mullis et al. in 1985, and since then has revolutionized most of 
the biological sciences (25). In this technique, double-stranded target DNA is denatured to 
provide single-stranded templates to which specific oligonucleotide primers are hybridized, 
followed by primer extension with a thermostable DNA polymerase (26). Primer pairs 
complementary to opposite strands of a DNA region are chosen so that 5' to 3' directional 
extensions are toward one another. Thus repetitive denaturation, annealing, and primer 
extension cycles exponentially amplify a unique DNA fragment bordered by the primers. The 
process is extremely rapid (as little as 30 min for 25 cycles with certain thermocyclers) and 
sensitive (amplification of gene sequences from a single cell is possible). Further, the process 
can be designed to be specific for genus, species, or allele. 

>> Use of the PCR as a detection method for microbial pathogens in foods has been documented 
in approximately two dozen PCR-based, detection procedures published by early 1994 (Table 
1). PCR-based methods have been developed to detect a wide variety of foodborne pathogens, 
including Listeria monocytogenes, enterotoxigenic Escherichia coli (see Chapter 
4), V. vulnificus, V. cholerae, Shigella flexneri, Yersinia enterocolitica, 
various Salmonella and Campylobacter species, and the Hepatitis A (15) (see Chapter 26) and 
Norwalk viruses.

{% table(header="PCR methods developed for the detection of pathogenic microbes in foods", footer="aReverse transcription PCR (RT-PCR). ") %}
| Organism                        | Target gene/gene product                  | Reference                  |
|---------------------------------|-------------------------------------------|----------------------------|
| *Campylobacter* spp.            | 16S rRNA                                  | 14                         |
| *C. jejuni*                     | *flaA-flaB* intergenic sequences          | 32                         |
| *C. coli*                       | *flaA-flaB* intergenic sequences          | 32                         |
| *Escherichia coli*              | *malB*, LTI, ST1                          | 5                          |
| *Escherichia coli*              | LTI                                       | 34                         |
| *Escherichia coli*              | SLTI, SLTII                               | 13                         |
| *Escherichia coli*              | VT1, VT2 and VTE                          | 23                         |
| *Escherichia coli*              | plasmid invasion gene (*ial*)             | 1,20                       |
| *Listeria monocytogenes*        | listeriolysin O (*hly*)                   | 3,4,9,10,12,21,22,24,29,34 |
| *Listeria monocytogenes*        | 16S rRNA                                  | 30                         |
| *Listeria monocytogenes*        | Listeria cell surface protein             | 31                         |
| *Salmonella* spp.               | *oriC*, chromosomal origin of replication | 11                         |
| *Shigella flexneri*             | plasmid invasion gene                     | 20                         |
| *Vibrio cholerae*               | *ctxAB*                                   | 19                         |
| *V. vulnificus*                 | cytotoxin-hemolysin                       | 16                         |
| *Yersinia enterocolitica*       | virulence plasmid *virF* gene             | 35                         |
| *Yersinia enterocolitica*       | *yadA*                                    | 17                         |
| Hepatitis A virus<sup>(a)</sup> | polymerase gene                           | 2,15                       |
| Norwalk virus<sup>(a)</sup>     | polymerase gene                           | 2                          |
{% end %}


>> Many of these PCR methods have relied on extraction of DNA from contaminated foods, an 
additional step which adds several hours to the procedure and often requires modification of 
each diverse food matrix tested. An advantage of PCR is that the amplification reaction often 
proceeds well with crude lysates of cells, in some cases requiring only brief boiling of a bacterial 
suspension. 

>> Although the PCR method, in principle, can detect a single bacterial cell with extended cycle 
regimens (50-60), the detection limit of direct PCR is effectively confined to about 104 bacteria 
per gram of food. This limitation is due to reaction volume constraints (25-100 µl), the increased 
propensity to amplify nonspecific products at high cycle numbers, and the inhibitory effect of 
many food components on Taq polymerase. Thus, the coupling of enrichment procedures with 
the PCR has effectively served two purposes: 1) It increases the sensitivity of detection to as 
few as 0.1 organism per gram of food; 2) it demonstrates by comparison of pre- and post
enrichment inocula that the food contains viable organisms. The added sensitivity and 
information regarding cell viability warrants the additional 4-24 hours (depending on the growth 
characteristics of the organism) required for such a procedure, and overcomes an early criticism 
that PCR would give false-positive results because it amplifies any DNA, including that of dead 
or nonviable organisms. 

>> Results of amplification reactions are usually obtained by the resolution of products based on 
size via agarose gel electrophoresis and visualization by UV-induced fluorescence after staining 
with ethidium bromide. The complete PCR amplification and agarose gel analysis generally 
requires only about 2-4 hours after enrichment. In terms of sensitivity, specificity, and analysis 
time, selective enrichment followed by PCR is clearly a powerful, rapid, and robust methodology 
for detecting foodborne bacterial pathogens. 

>> V. cholerae of the Inaba and Ogawa serotypes which lack the cholera toxin genes have been 
isolated; however, such strains are generally nonpathogenic. Since the presence of the cholera 
toxin operon is a prerequisite for pathogenicity, various PCR methods for the detection of 
pathogenic V. cholerae have all used the ctxAB genes as a target for amplification (8,18,28); 
these and the PCR method described here, will not detect nontoxigenic V. cholerae. As a 
practical matter, this PCR detection method allows one to define food samples as negative for 
the presence of toxigenic V. cholerae much more quickly than by following the complete 
microbiological identification scheme. However, it is recommended that alkaline peptone water 
(APW) enrichment broths used for PCR analysis also be plated onto selective thiosulfate-citrate
bile salts-sucrose (TCBS) agar (see Chapter 9) for isolation and direct confirmation of the 
presence of V. cholerae in samples that give positive PCR results.

## A. Equipment and Materials

- For APW enrichment of V. cholerae (see Chapter 9). 
- Programmable automatic thermocyler 
- Horizontal gel electrophoresis apparatus 
- Electrophoresis constant-voltage power supply 
- Heating plate 
- Microcentrifuge tubes, 1.5 and 0.6 ml 
- Variable digital micropipettors (e.g., 0.5-20 µl, 20-200 µl) 
- Aerosol-resistant pipet tips 
- Microcentrifuge 
- UV transilluminator 
- Polaroid camera 
- Polaroid film


## B. Media and Reagents

- Alkaline peptone water (APW) (see Chapter 9) 
- Cholera toxin PCR primers, 10 pmol/µl stock solutions (5'-TGAAATAAAGCAGTCAGGTG-3', 5'-GGTATTCTGCACACAAATCAG-3'; see ref. 19) 
- Taq DNA polymerase (native available from various vendors) or Amplitaq® (Perkin-Elmer) 
- 2'-Deoxynucleoside-5'-triphosphates (dATP, dCTP, dGTP, dTTP); stock solution 1.25 mM of each dNTP 
- 10× PCR buffer (100 mM Tris-HCl, pH 8.3, 500 mM KCl, 15 mM MgCl2) 
- Light mineral oil 
- Sterile deionized water 
- 10× TBE (0.9 M Tris-borate, 0.02 M EDTA, pH 8.3) 
- Agarose (nucleic acid electrophoresis grade) 
- Ethidium bromide solution, 10 mg/ml 
- 6× sample loading buffer (see ref. 27) 
- DNA molecular weight markers (e.g., 123 bp ladder, Bethesda Research Laboratories, Gaithersburg, MD)


## C. Procedure for amplification of cholera toxin gene sequences from V. cholerae using APW enrichment broth

Food sample preparation and APW enrichment (see Chapter 9). 

**APW enrichment lysate preparation**
: Prepare APW washes or blends (see Chapter 9). 
Sample and freeze immediately (about 1 ml). After enrichment (6-24 h), prepare crude APW 
lysates for PCR by boiling 1 ml samples in 1.5 ml microcentrifuge tubes for approximately 5 min. 
Lysates may be used for PCR immediately or stored in a -20°C freezer until use. NOTE: Due to 
the enormous amplification possible with the PCR, minute levels of contamination can result in 
false positives. It is recommended that sample preparation, PCR reaction set-up, and PCR 
product analysis be physically separated from one another to minimize contamination. For an 
excellent discussion of considerations in setting up a PCR laboratory, see PCR Methods and 
Applications 3(2):S1-S14, (1993) A Manual Supplement, Section 1: Establishing PCR in the 
Laboratory (6,7). Minimally, use of aseptic technique in handling all PCR reagents and solutions 
is absolutely necessary. Use aerosol-resistant pipet tips for preparing samples and reagents for 
PCR reactions, and, if possible, a separate set of pipettors for analysis of PCR reaction 
products. 

**PCR reaction preparation**
: To minimize cross contamination of PCR reagents, it is 
recommended that master mix solutions be prepared, aliquoted, and stored frozen. Master 
mixes contain all necessary reagents except Taq polymerase and the lysates being amplified. 
The final reaction contains 10 mM Tris-HCl, pH 8.3; 50 mM KCl, 1.5 mM MgCl2, 200 µM each 
dATP, dCTP, dGTP, and dTTP; 2 to 5% (v/v) APW lysate; 0.5 µM of each primer and 2.5 
U Taq polymerase per 100 µl; reaction volumes of 25-100 µl may be used. Add Taq polymerase 
to the master mix and add APW lysate upon distribution to 0.6 ml microcentrifuge tube reaction 
vessels. Cover with approximately 50-70 µl of mineral oil. 

**Temperature cycling**
: While there is some variability in the heating and cooling dynamics of 
thermocylers from different manufacturers, use of the following temperature cycling regimen 
should yield efficient amplification of the ctx gene fragment: Denaturation for 1 min at 94°C, 
primer annealing for 1 min at 55°C, and primer extension 72°C for 1 min, repeated for no more 
than 35 cycles. Increasing the cycle number beyond 35 cycles often leads to the formation of 
nonspecific amplification products, including primer dimers. 

**Agarose gel analysis of PCR products**
: Mix 10-20 µl portions of PCR reactions with 6× gel 
loading buffer (choose one of four common buffers from Molecular Cloning: A Laboratory 
Manual by Sambrook et al. (27) and load into sample wells of 1.5-1.8% agarose gel submerged 
in 1× TBE containing 1 µg/ml ethidium bromide. After appropriate migration with a constant 
voltage of 5-10 V/cm, illuminate the agarose gel with a UV transilluminator and visualize bands 
relative to molecular weight marker migration. The primers listed above give rise to a 777 bp 
fragment (19). Take Polaroid photographs of gels to document results. Further details regarding 
gel electrophoresis analyses may be found in the above-mentioned Molecular Cloning 
Laboratory Manual (27). 

**Proper controls**
: The need for a number of control reactions to ensure accurate interpretation 
of PCR results cannot be overemphasized. Minimally, for PCR analysis of food types previously 
optimized for this method (e.g., vegetable washes, oyster, crab and shrimp blends; see ref. 19), 
include a master mix contamination control containing no lysate and a 
toxigenic V. cholerae APW positive control in every analysis. For every new food blend to be 
analyzed by this PCR method, determine the potential inhibitory effects of that food. Minimally, 
this entails spiking 1 ml of a 1:10 and 1:100 APW food blend post-enrichment with about 5 × 
106 organisms per ml (or an equivalent amount of positive control lysate). A direct comparison of 
these spiked samples with the APW (no food) lysate containing identical numbers of ctx+ cells, 
allows one to determine if any inhibition occurs at either of the two food concentrations and 
prevents the occurrence of false negatives. It is unlikely that food washes (e.g., fruits and 
vegetables) will inhibit the PCR reaction unless the fruits are bruised and washing releases 
excessive acidity to the APW wash.  