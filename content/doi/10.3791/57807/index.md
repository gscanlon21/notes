+++
title = "Small-Scale Colorimetric Assays of Intracellular Lactate and Pyruvate in the Nematode Caenorhabditis elegans"
description = ""
authors = ["Sumino Yanase", "Kayo Yasuda", "Naoaki Ishii"]
sort_by = "title"
weight = 970

[extra]
updated = 2026-06-01
see_also = [
  { title = "Research Article", href = "/doi/10.3791/57807.pdf" },
  { title = "Video Link (JoVE)", href = "https://www.jove.com/video/57807/" },
]
map = [
  { key = "DOI", title = "10.3791/57807" },
  { key = "Ref", title = "Yanase et al. 2018" },
]
+++

{{ hidden() }}


# Abstract
Lactate and pyruvate are key intermediates of intracellular energy metabolic pathways. Monitoring the lactate/pyruvate ratio in cells helps to
determine whether there is an imbalance in age-related energy metabolism between mitochondrial oxidative phosphorylation and aerobic
glycolysis. Here, we show the utilization of commercial colorimetric assay kits for lactate and pyruvate in the model organism C. elegans.
Recently, the sensitivity and accuracy of the colorimetric/fluorimetric assay kits have been improved greatly by the research and development
conducted by reagent manufacturers. The improved reagents have enabled the use of small-scale assays with a 96-well plate in C. elegans.
In general, a fluorimetric assay is superior in sensitivity to a colorimetric assay; however, the colorimetric approach is more suitable for the
use in common laboratories. Another important issue in these assays for quantitative determination is protein precipitation of homogenized C.
elegans samples. In our protein precipitation method, common precipitants (e.g., trichloroacetic acid, perchloric acid and metaphosphoric acid)
are used for sample preparation. A protein-free assay sample is prepared by directly adding cold precipitant (final concentration of 5%) during
homogenization.


# Introduction
Lactate and pyruvate concentrations are widely regarded as intermediates of energy metabolism, and are related to the states of glycolysis,
tricarboxylic acid (TCA) cycle, and electron transport chain in the cells of aerobic organisms. A series of reactions in glycolysis oxidize glucose
to pyruvate, which lies at a metabolic crossroads and can be converted to carbohydrates through gluconeogenesis, to fatty acids and energy
metabolism through acetyl-CoA, and to the amino acid alanine. The TCA cycle occurs under the presence of sufficient dissolved oxygen and
is fundamental for the conversion of glucose to energy. Especially, the alteration of secondary metabolism is an interesting phenomenon in
which glycolysis is used predominantly for energy production and aerobic mitochondrial respiration, which involves the TCA cycle and electron
transport chain, is downregulated in mammalian cancer cells1,2. We showed recently that the lactate levels and the consequent lactate/pyruvate
(L/P) ratio decreased during aging in the model organism Caenorhabditis elegans (C. elegans). Likewise, we found that the mammalian tumor
suppressor p53 ortholog CEP-1 in C. elegans has an important role in the age-related alterations of energy metabolism through the activation of
its transcriptional targets3.
In biological assays, such as the measurement of lactate and pyruvate concentrations in cells, the sensitivity, accuracy, sample size, and
incubation time of colorimetric/fluorimetric assay kits have been improved dramatically. Owing to technological innovations, we are now able
to analyze various metabolites and intermediate metabolites without the large-scale culture of C. elegans, which is difficult given its small size.
In general, the sensitivity of a colorimetric assay is an order of magnitude smaller than that of a fluorimetric assay; however, the colorimetric
approach is more suitable in the setting of common laboratories. Furthermore, an extraction technique containing homogenization and protein
precipitation is crucial for the quantitative determination of lactate and pyruvate concentrations in C. elegans cells because this nematode
is enclosed in an exoskeleton called the cuticle, unlike mammalian cultured cell lines4,5. Here, we describe a protocol to analyze lactate and
pyruvate concentrations using commercial colorimetric assay kits including tips for sample extraction from C. elegans.


# Protocol
## 1. Synchronized Culture of C. elegans
**Culture E. coli**
1.
: Before seeding, culture the Escherichia coli (E. coli) strain OP50 overnight at 37 °C in 300 mL of Luria-Bertani (LB) broth liquid medium. Store the cultured OP50 at -4 °C.
: - To make LB broth liquid medium, use 10 g of tryptone, 5 g of yeast extract, 10 g of NaCl and 1.5 mL of 1 N NaOH, and add to 1 L with deionized water. Autoclave.
: > [!NOTE] 
  > OP50 and C. elegans strains are available from the Caenorhabditis Genetics Center (University of Minnesota, St. Paul, MN, USA).

**Nematode Growth Medium**
2.
: To make nematode growth medium (NGM) agar, use 3 g of NaCl, 2.5 g of peptone, 17 g of agar, and 975 mL of deionized water. Autoclave.
: Cool to 55 °C, then sterilely add, in order, 1 mL of 1 M MgSO4, 1 mL of 1 M CaCl2, 1 mL of 5 mg/mL cholesterol in EtOH, and 25 mL of 1 M potassium phosphate pH 6.0 in 90-mm Petri dishes.
: - For 1 M potassium phosphate pH 6.0, use 108.3 g of KH2PO4 and 46.6 g of K2HPO4, and add deionized water to 1 L. Autoclave6.

**OP50**
3.
: Spread 1-2 mL of the cultured OP50 on the NGM agar plates. 
: To make a thin layer of OP50, incubate the plates overnight at room temperature before adding any nematodes.
: > [!NOTE]
  > The NGM agar plates inoculated OP50 can be stored at room temperature for 2-3 weeks.

**Add Worms**
4.
: Add at least 100 worms onto an NGM agar plate with OP50, and culture at 20 °C until the adult stage. At least three plates are required.

**Collect Eggs**
5.
: To collect eggs in utero, transfer gravid hermaphrodites from the three NGM agar plates each with 5 mL of S buffer in a 15-mL conical tube, and wash the worms 3 times with 15 mL of S buffer using centrifugation at 300 x g for 30 s at room temperature.
: - To make S buffer, use 5.9 g of NaCl and 50 mL of 1 M potassium phosphate pH 6.0, add to 1 L with deionized water. Autoclave6.

**Dissolve Worms**
6.
: Dissolve the worms in an alkaline hypochlorite solution for axenization and bulk egg isolation (0.5 mL of fresh bleach or equivalent: 5-6% sodium hypochlorite, 0.1 mL of 10 M NaOH, approximately 4.5 mL of S buffer)6, and stand the solution for 10-15 min at room temperature with mixing by inverting.
: > [!NOTE] 
  > Within 15 min, adult worms should dissolve, leaving a hazy solution of eggs liberated from their carcasses (the liberated eggs should
    be confirmed using a stereoscopic microscope). Instead of 0.1 mL of 10 N NaOH, 0.2 mL of 5 N NaOH can also be used.

**Wash Eggs**
7.
: After hypochlorite treatment, wash the egg pellet 3 times with 15 mL of S buffer, and resuspend in 5-6 mL of S buffer. 
: Hatch the released eggs during an overnight incubation at 20 °C in S buffer without E. coli for an age-synchronous culture of L1 stage larvae.

**Larvae**
8.
: To determine the approximate number of L1 stage larvae, count the worms using a stereoscopic microscope in 10 µL of S buffer after
resuspending the larvae at least 3 times, and calculate the average. Then, transfer the L1 stage larvae to five NGM agar plates with OP50
(1,500-3,000 worms per plate using a 90-mm Petri dish), and culture at 20 °C until they have grown to the young adult stage, when the self
fertilization begins and a few eggs are laid (ordinarily after 3 days).

## 2. Extraction of Cellular Fraction from C. elegans
**Collect**
1.
: Collect the young adult stage (5-day-old animals) worms from the five NGM agar plates with S buffer (Figure 1A).
: - To select only living worms using the sucrose method6 for flotation on 30% (w/v) sucrose, mix the worms suspended in 3-4 mL of S
buffer with an equal volume of ice-cold 60% (w/v) sucrose in a 15-mL conical tube. Spin the tube at 1,500 x g for 15 s at 4 °C and
remove the floating worms into a fresh tube by moving them off the wall of the tube with a Pasteur pipette.

**Wash**
2.
: Wash the worms 3 times with S buffer by centrifugation at 1,500 x g for 30 s at 4 °C. Check the wet volume of washed worms after
centrifugation using a 1,000 µL micropipette tip (Figure 1B).

**Add**
3. 
: Add the washed worms to an equal volume of ice-cold 10% (w/v) trichloroacetic acid (TCA; final concentration of 5%) for protein precipitation
(Figure 1C). Instead of TCA, perchloric acid (PCA) or metaphosphoric acid can be used.

**Homogenize**
4. 
: Homogenize the worms with the precipitant using 40 strokes of a pestle in a Teflon homogenizer (Potter-Elvehjem tissue grinder) with rotation
at up to 1,300 rpm on ice.

**Transfer the homogenate**
5. 
: Transfer the homogenate into a fresh 1.5-mL microtube with a Pasteur pipette, and sonicate using an ultrasonic homogenizer for 3 min (3
times of 1 min) with a 20% duty cycle on ice.

**Clarify the homogenate**
6. 
: Clarify the homogenate by centrifugation at 8,000 x g for 10 min at 4 °C. Neutralize the supernatants with 4 M KOH (0.25 volume to 10%
TCA) for 20 min on ice, and centrifuge at 8,000 x g for 10 min at 4 °C. The supernatant (as a test sample) can be stored at -80 °C until the
following assays.

## 3. Lactate Assay Using a Colorimetric Assay Kit

**Measure the concentration**
1. 
: Measure the concentration of lactate in the test samples using a [colorimetric assay kit](#materials). Carry out duplex examinations
for the test samples. Add 5 or 10 µL of the test samples to a 96-well plate and adjust the volume to 50 µL per well with the Lactate Assay
Buffer provided with the kit.

**For the lactate**
2. 
: For the lactate standard curve, dilute 100 mM L(+)-Lactate Standard to 1 mM with Lactate Assay Buffer. Add 0, 2, 4, 6, 8, and 10 µL of the 1
mM L(+)-Lactate Standard, which is provided with the kit, into a series of wells.

**Add 50**
3. 
: Add 50 µL of Reaction Mix (containing 46:2:2 of Lactate Assay Buffer, Lactate Enzyme Mix and Lactate Probe in DMSO, anhydrous; all
reagents are provided with the kit) or Background Control Mix (containing 48:2 of Lactate Assay Buffer and Lactate Probe) into each well and
incubate at room temperature for 30-60 min while the samples are protected from light.

**Measure the absorbance**
4. 
: Measure the absorbance of each well at 570 nm using a microplate reader and subtract the absorbance of the Background Control Mix from
the absorbance of the Reaction Mix.

**Plot the lactate**
5. 
: Plot the lactate standard curve. Calculate the lactate concentrations of the test samples from the lactate standard curve.

## 4. Pyruvate Assay Using a Colorimetric Assay Kit
**???**
1. 
: Measure the concentration of pyruvate in the supernatants (test samples) using a [colorimetric assay kit](#materials). Carry out
duplex examinations for the test samples. Add 10 µL of the test samples and 90 µL of Working Reagent (containing 94:1 of Enzyme Mix
and Dye Reagent, which are provided with the kit) into a 96-well plate and incubate at room temperature for 30 min while the samples are
protected from light.

**???**
2. 
: Measure the absorbance of each well at 570 nm using a microplate reader.

**???**
3. 
: Plot the pyruvate standard curve. Calculate the pyruvate concentrations of the test samples from the pyruvate standard curve.

## 5. Protein Assay for Normalization with Protein Content
**???**
1. 
: Measure the protein concentration in the supernatants (test samples) using a [colorimetric assay kit](#materials). However, this step is not limited to an assay kit, and other approaches can be utilized to measure the protein concentration.

**???**
2. 
: Normalize the values of lactate and pyruvate concentrations among the test samples using each total protein concentration.
: > [!NOTE] 
  > Protein concentration in the test samples is sufficiently detected even after protein precipitation and is utilized for the normalization step among samples.

# Representative Results
Using the colorimetric assays for the quantitative determination of lactate and pyruvate concentrations, we showed the accuracy of these assays
compared with previous reports in C. elegans7,8. Here, the process of protein precipitation during sample extraction was the most crucial step to
generate accurate values. For protein precipitation, common precipitants (e.g., TCA, PCA, or metaphosphoric acid) can be used to prepare the
test samples (Figure 1). In C. elegans, however, it was necessary to perform protein precipitation during homogenization of the worms (Table 1).
In addition to accuracy, these assays were sufficiently sensitive to measure lactate and pyruvate concentrations in small-scale samples and were
able to detect them in a short period of time (the reactive incubation time of both assays is at least 30 min) (Figure 2-3). Actually, we presented
the data in a recent report3. Thus, we could detect age-related metabolic alterations indicating that cellular lactate levels and the consequent L/P
ratio decreased during aging, and we also showed different energy metabolism in a cep-1 mutant3.


Figure 1. Process for the extraction of cellular metabolites. (A) 1,500-3,000 worms were placed on an NGM agar plate (90-mm Petri dish).
Extraction from worms on five plates was sufficient for the colorimetric assays. (B) Worms collected from the five plates of 3,000 and 1,500
worms per plate are indicated on the left and right side of panel, respectively. Both the wet volumes in each 15-mL tube are < 0.5 mL, which were
sufficient for detection. (C) Protein precipitation using 10% TCA during homogenization of the worms. Adding the worms into ice-cold 10% TCA
in a homogenizer has to be performed before the worms are homogenized. Otherwise, cellular lactate and pyruvate cannot be detected in test
samples using a colorimetric assay kit (data are shown in Table 1).


Figure 2. Colorimetric pigmentation patterns of the lactate standards using a colorimetric assay kit. (A) Wells of the 96-well plate used
in the colorimetric assay, and a dilution series of the L(+)-lactate standard. Increasing the lactate concentration resulted in a more intense pink
color. BG indicates the background of a lactate probe against the dilution series. (B) Lactate standard curve for the colorimetric assay. Please
click here to view a larger version of this figure.
Figure 3. Colorimetric pigmentation patterns of the pyruvate standards using a colorimetric assay kit. (A) Wells of the 96-well plate using
the colorimetric assay, and dilution series of pyruvate standard. Increasing of the pyruvate concentration resulted in increased light pink coloring.
(B) Pyruvate standard curve for the colorimetric assay.


{% table(header="", footer="") %}
| Test Samples                                                            | Lactate (mM) | Pyruvate (mM) |
|-------------------------------------------------------------------------|--------------|---------------|
| Protein-precipitated samples during homogenization                      | 3.07 ± 0.94  | 0.22 ± 0.08   |
| Protein-precipitated samples after homogenization                       | ND           | ND            |
| Intact cytosolic fraction after homogenization and ultracentrifugation* | 1.12         | 0.06          |
{% end %}

Table 1. Effects of protein precipitation on different timings for the detection of cellular lactate and pyruvate in 5-day-old animals
of wild-type N2. Data indicate means + standard deviation (SD) of at least three determinations. ND indicates not detected. *The extraction
process was performed preliminarily using ultracentrifugation without protein precipitation.

# Discussion
When utilizing these colorimetric assay kits, the most critical step in sample extraction to detect cellular lactate and pyruvate accurately in C.
elegans is the process of protein precipitation during homogenization (Figure 1). It is not strictly necessary to use a Teflon homogenizer, as
other homogenizers (e.g., Dounce and tapered tissue grinders, or bead mills) are also suited to the small-scale extraction of worms. We did
not detect cellular lactate and pyruvate in test samples that were extracted using a homogenizer before protein precipitation. Furthermore, both
lactate and pyruvate levels decreased drastically in the cytosolic fraction separated using ultracentrifugation instead of protein precipitation
(Table 1). These suggest that the sample extraction is crucial to detect the cellular metabolites in biochemical methodology using a nematode
C. elegans. For protein precipitation, not only TCA but also several other precipitants (PCA or metaphosphoric acid) can be utilized to the
biochemical methodology7,9. According to a previous report, the use of TCA resulted in the disappearance of approximately 12% of NADH in the
enzymatic measurement of blood lactate and pyruvate. Therefore, the authors concluded that 5% metaphosphoric acid should be selected as the
protein precipitant for both lactate and pyruvate when using enzymatic assays9. It suggests that TCA partially denatures proteins including many
enzymes.However, we had no problems regarding the protein precipitants when using colorimetric assays to detect cellular lactate and pyruvate.
In this study, we used commercial colorimetric assay kits for the quantitative determination of lactate and pyruvate (Figure 2 and Figure 3). Their
sensitivities and sample sizes were superior in comparison with previous assay kits7; therefore, we prepared the test samples using a smaller
scale extraction and reported the differences in the cellular lactate and pyruvate concentrations in C. elegans3. We detected an age-related
decrease in lactate and consequent L/P ratio in wild-type C. elegans and found that the p53/CEP-1 has an important role in the age-related
alteration of energy metabolism through the activation of its transcriptional targets2,3. Thus, the analysis of energy metabolism in nematode C.
elegans advantageously proceeds due to using the improved colorimetric assay kits, at least in part.
As shown in Figure 3B, lactate concentration below 2 mM tend to be indeed larger in this colorimetric assay (not the fluorometric assay).
Therefore, the fluorometric assay may be suitable for a more accurate measurement of lactate. The capabilities of these assay kits support both
colorimetric and fluorometric assays, so that the assay is selected in response to the appliance in laboratory of the user. It is still more expensive
to use the present commercial colorimetric assay kits to determine quantitatively the concentration of cellular metabolites. However, trials can be
adequately performed in smaller laboratories using common instruments and a spectrophotometric plate reader.
Hitherto, there are relatively few reports using conventional biochemical approaches in a model organism C. elegans, which typically need
the large-scale culture of worms, compared with genetic studies5. However, the recent remarkable progress of biological assay systems (e.g.,
improvement of the sensitivity and stability of assay kits) makes studies using the nematode C. elegans, which is small and consists of fewer
than 1,000 cells, more attractive and performed easily in the laboratory. Henceforth, effective metabolomic analysis using mass spectrometry
(MS) and gas chromatography/mass spectrometry (GC/MS) can help to reduce certain problems, such as large-scale culture, analytical
sensitivity, and specificity, and will help to elucidate the role of cellular metabolism in aging and human diseases including cancer10. Looking
ahead, easier methodology, such as colorimetric assay kits, would be effective as a screening tool prior to more precise instrumental analyses.


# Materials

{% table(header="Materials", footer="[Small-Scale Colorimetric Assays of Intracellular Lactate and Pyruvate in the Nematode Caenorhabditis elegans](/doi/10.3791/57807.pdf)") %}
| Name                                        | Company            | Catalog Number    | Comments                                              |
|---------------------------------------------|--------------------|-------------------|-------------------------------------------------------|
| Lactate Colorimetric/Fluorimetric Assay kit | BioVision          | #K607-100         | colorimetric/fluorimetric 100 assays; Store at -20oC  |
| EnzyChrom Pyruvate Assay Kit                | BioAssay Systems   | #EPYR-100         | colorimetric/ fluorometric 100 assays; Store at -20oC |
| BCA Protein Assay Kit                       | Thermo Scientific  | #23225            | colorimetric assay; store at room temperature         |
| Trichloroacetic Acid                        | Wako Pure Chemical | #207-04955        | store at room temperature                             |
| Teflon homogenizer                          | Iwaki/Pyrex        | #358034 (Wheaton) | Instead of Iwaki/Pyrex, available by Wheaton          |
{% end %}


