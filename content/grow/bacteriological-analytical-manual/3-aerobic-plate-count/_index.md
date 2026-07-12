+++
title = "Aerobic Plate Count"
description = ""
weight = 3

[extra]
authors = ["Guodong Zhang", "Martine Ferguson", "Robert J. Blodgett"]
updated = 2026-06-01
site_version = 1
toc_level = 3
see_also = [
  { title = "Chapter 3", href = "https://www.fda.gov/food/laboratory-methods-food/bam-chapter-3-aerobic-plate-count" },
]
+++

{{ hidden() }}


# Terminology
?

# Overview
?


# Chapter 3
## Introduction
>> The aerobic plate count (APC) is intended to indicate the level of microorganism in a product. 
See references (6), (5), (10), (13), (3), (14), and (11) for detailed descriptions and explanations. 
Detailed procedures for determining the APC of foods using pour plate method have been 
described by the American Public Health Association (APHA) (1, 2), the Association of Official 
Analytical Chemists (AOAC) (3), the United States Department of Agriculture (USDA) (14) and 
the International Organization for Standardization (ISO) (11). Colony counting range (per plate) 
using pour plate method is 30-300 by USDA (14) and AOAC (3). 
25-250 by APHA (1) and APHA (2) and 15-300 by ISO (11). In most scientific publications,
scientists presented as low as 0 colony count per plate. Considering ISO is internationally
accepted in regulatory affairs and most publications do present results with low colony numbers
per plate, in this protocol, the suitable colony counting range is 15-300 per plate. The automated
spiral plate count method outlined below conforms to the AOAC Official Methods of Analysis,
sec. 977.27 (4).

## Conventional Plate Count Method

### Equipment and Materials
1. The work bench should be leveled, clean and with ample surface. The laboratory should be free of dust and drafts. The microbial density of air in working area, measured in fallout pour plates taken during plating, should not exceed 15 colonies/ plate during 15 min exposure.
2. Storage space, free of dust and insects and adequate for protection of equipment and supplies
3. Petri dishes, glass, or plastic (at least 15 × 90 mm)
4. Pipets with pipet aids (no mouth pipetting) or pipettors, 1, 5, and 10 ml, graduated in 0.1 ml units
5. Dilution bottles, 6 oz (160 ml), borosilicate-resistant glass, with rubber stoppers or plastic screw caps
6. Pipet and petri dish containers, adequate for protection
7. Circulating water bath, for tempering agar, thermostatically controlled to 45 ± 1°C
8. Incubator, 35 ± 1°C; milk, 32 ± 1°C
9. Colony counter, dark-field, Quebec, or equivalent, with suitable light source and grid plate
10. Tally register
11. Dilution blanks, 90 ± 1 ml Butterfield's phosphate-buffered dilution water (R11); milk, 99 ± 2 ml
12. Plate count agar (standard methods) (M124)
13. Refrigerator, to cool and maintain samples at 0-5°C; milk, 0-4.4°C
14. Freezer, to maintain frozen samples from -15 to -20°C
15. Thermometers with appropriate range; accuracy checked with a thermometer certified by the National Institute of Standards and Technology (NIST)

### Procedure for analysis of frozen, chilled, precooked, or prepared foods
>> Using separate sterile pipets, prepare decimal dilutions of 10-2, 10-3, 10-4, and others as 
appropriate of food homogenate (see Chapter 1 for sample preparation) by transferring 10 ml of 
previous dilution to 90 ml of diluent. Avoid sampling foam. Shake all dilutions 25 times in 30 cm 
(1 ft) arc within 7 s. Pipet 1 ml of each dilution into separate, duplicate, appropriately marked 
petri dishes. Reshake dilution bottle 25 times in 30 cm arc within 7 s if it stands more than 3 min 
before it is pipetted into petri dish. Add 12-15 ml plate count agar (cooled to 45 ± 1° C) to each 
plate within 15 min of original dilution. For milk samples, pour an agar control, pour a 
dilution water control and pipet water for a pipet control. 

>> Add agar to the latter two for each series of samples. Add agar immediately to petri dishes when 
sample diluent contains hygroscopic materials, e.g., flour and starch. Pour agar and dilution 
water control plates for each series of samples. Immediately mix sample dilutions and agar 
medium thoroughly and uniformly by alternate rotation and back-and-forth motion of plates on 
flat level surface. Let agar solidify. Do not stack plates when pouring agar or when agar is 
solidifying. Invert solidified petri dishes, and incubate promptly for 48 ± 2 h at 35°C.

### Maximum likelihood method background and examples

#### Background
>> The number of colonies is assumed to be Poisson distributed with mean APC density (CFU/
ml) Maximum likelihood (ML) is used to estimate the Poisson mean APC (CFU/ml) using
the plates for which exact counts are available and the too numerous to count (TNTC) plates. 

>> See reference (11) and the Appendix for detailed descriptions and explanations. The likelihood 
ratio method is used to assess confidence limits (10). 

>> The lower bound is a threshold above which inhibition is suspected for colonies of the target 
microbe, e.g. 300 colonies. 

>> When there are no TNTC plates, the ML estimate of APC equals a weighted average of the 
counts as in examples (2.1a, 2.1b, 2.1c, 2.2a), below. 

>> APC = CFU/ml =∑j i=1 wiRi where wi = Vi / ∑j i=1 Vi and R=i   Ni /Vi 

>> Where Ni is the colony count (CFU) on plate i 
>> - Vi is the volume of original homogenate received by plate i 
>> - Ri is the concentration or CFU/ml in the ith plate = Ni /Vi 
>> - wi denotes the weight value of plate i (see below) 
>> - j is the number of countable plates 

>> The amount of the original homogenate put on a plate, V, equals its dilution ratio times the size 
of its inoculum. For example: with dilution ratio of 1:100 and an inoculum size of 1 ml, 

>> V = amount of the original homogenate = (1/100)*1ml = 0.01ml. 

>> R, the concentration (CFU/ml), equals the plate colony count (CFU) divided by its homogenate 
volume (V). For example, if plate i has Ni =150 CFU and Vi =0.01 ml, then Ri =150/0.01=15,000 
CFU/ml. 

>> The contribution of each plate to the APC estimate must be weighted (w) by the proportion of the 
original homogenate that it received. In other words, wi equals the amount of the original 
homogenate the ith plate received divided by the total amount of the original homogenate all 
plates received. For example, for a two-plate experiment, if plate 1 has a homogenate value V1 
=0.001 ml and plate 2 has a homogenate volume V2=0.01 ml, and the weight w1 for plate 1 is 
0.001 / (0.001+0.01) = 0.091.

#### Examples of APC Calculations

##### 2.1 Examples from Common Scenarios

{% table(header="Example 2.1a: Four plates and two dilutions") %}
| Plate   | Colony Count (N, CFU) | Dilution Ratio | Inoculum Size | Original Homogenate (V, ml) | Ratio (R, CFU/ml) |
|---------|-----------------------|----------------|---------------|-----------------------------|-------------------|
| Plate 1 | 144 CFU               | 1:100          | 1 ml          | 0.01 ml                     | 14,400            |
| Plate 2 | 118 CFU               | 1:100          | 1 ml          | 0.01 ml                     | 11,800            |
| Plate 3 | 26 CFU                | 1:1000         | 1 ml          | 0.001 ml                    | 26,000            |
| Plate 4 | 20 CFU                | 1:1000         | 1 ml          | 0.001 ml                    | 20,000            |
{% end %}

<h6>
The total amount of the original homogenate received by all plates is 2*0.01ml+2*0.001ml = 0.022 ml. 
The APC estimate, using MLE, equates to the weighted average of plate R’s. 
The weight for plates 1 and 2 is 0.01/0.022=10/22. 
The weight for plates 3 and 4 is 0.001/0.022=1/22. 
APC = ΣwiRi. = 1 0/22 (14,400 CFU/ml) + 10/22 (11,800 CFU/ml) + 1/22 (26,000 CFU/ml) + 1/22 (20,000 CFU/ml) = 308,000/22 CFU/ml = 14,000 CFU/ml.
</h6>

{% table(header="Example 2.1b: Two plates with the same dilution") %}
| Plate   | Colony Count (N, CFU) | Dilution Ratio | Inoculum Size | Original Homogenate (V, ml) | Ratio (R, CFU/ml) |
|---------|-----------------------|----------------|---------------|-----------------------------|-------------------|
| Plate 1 | 27 CFU                | 1:100          | 1 ml          | 0.01 ml                     | 2,700             |
| Plate 2 | 51 CFU                | 1:100          | 1 ml          | 0.01 ml                     | 5,100             |
{% end %}

<h6>
The amount of the original homogenate received by all plates is 0.02 ml. 
The weight for each plate is 0.01/0.02 = 1/2. 
Concentration = 1/2 (2700 CFU/ml) + 1/2 (5100 CFU/ml) = 7800/2 CFU/ml = 3900 CFU/ml. 
</h6>

{% table(header="Example 2.1c: Two plates with different dilutions") %}
| Plate   | Colony Count (N, CFU) | Dilution Ratio | Inoculum Size | Original Homogenate (V, ml) | Ratio (R, CFU/ml) |
|---------|-----------------------|----------------|---------------|-----------------------------|-------------------|
| Plate 1 | 120 CFU               | 1:100          | 1 ml          | 0.01 ml                     | 12,000            |
| Plate 2 | 23 CFU                | 1:1000         | 1 ml          | 0.001 ml                    | 23,000            |
{% end %}

<h6>
The amount of the original homogenate received by all plates is 0.011 ml. 
The weight for plate 1 is 0.01/0.011=10/11. 
The weight for plate 2 is 0.001/0.011=1/11. 
Concentration = 10/11 (12,000 CFU/ml) + 1/11 (23,000 CFU/ml) = 143,000/11 CFU/ml = 13,000 CFU/ml. 
</h6>

##### 2.2 Examples from Other Scenarios

###### Example 2.2a: One plate
?

###### Example 2.2b: Several plates, one TNTC
?

###### Example 2.2c: Several TNTC plates
?

#### Recording counts
**Plates with Spreading Colonies**
: > Spreading colonies are usually of 3 distinct types: 1) a chain 
of colonies, not too distinctly separated, that appears to be caused by disintegration of a 
bacterial clump; 2) one that develops in film of water between agar and bottom of dish; and 3) 
one that forms in film of water at edge or on surface of agar. If plates prepared from sample 
have excessive spreader growth so that (a) area covered by spreaders, including total area of 
repressed growth, exceeds 50% of plate area, or (b) area of repressed growth exceeds 25% of 
plate area, report plates as spreaders. When it is necessary to count plates containing 
spreaders not eliminated by (a) or (b) above, count each of the 3 distinct spreader types as one 
source. For the first type, if only one chain exists, count it as a single colony. If one or more 
chains appear to originate from separate sources, count each source as one colony. Do not 
count each individual growth in such chains as a separate colony. Types 2 and 3 usually result 
in distinct colonies and are counted as such. Combine the spreader count and the colony count 
to compute the APC. 

**Plates with no CFU**
: > When plates from all dilutions have no colonies, report APC as less 
than 1 times the corresponding lowest dilution used. Mark calculated APC with asterisk to 
denote that it was estimated from counts outside the 15-300 per plate range. When plate(s) from 
a sample are known to be contaminated or otherwise unsatisfactory, record the result(s) as 
laboratory accident. 

**Rounding of APC result**
: > Report only the first two significant digits. Round off to two 
significant figures only at the time of conversion to APC. Round by raising the second digit to 
the next highest number when the third digit is 6, 7, 8, or 9 and use zeros for each successive 
digit toward the right from the second digit. Round down when the third digit is 1, 2, 3, or 4. 
When the third digit is 5, round up when the second digit is odd and round down when the 
second digit is even. Report APC as estimated results when the colony counts are outside the 
range of 15-300 per plate

**APC calculations using software**
: > The R package, MPN (8) and its function ‘apc’, calculates the APC (CFU per mL) via 
maximum likelihood estimation and accompanying confidence interval. Adjustments for 
TNTC plates are included in the ‘apc’ function. A web application implementing the R 
package APC function is available [here](https://pub-connect.foodsafetyrisk.org/microbial/apccalc/).

{% table(header="Examples", class="narrow no-wrap") %}
| Calculated Count | APC    |
|:----------------:|:------:|
| 12,700           | 13,000 |
| 12,400           | 12,000 |
| 15,500           | 16,000 |
| 14,500           | 14,000 |
{% end %}

## Spiral Plate Method
>> The spiral plate count (SPLC) method for microorganisms in milk, foods, and cosmetics is an 
official method of the APHA (2) and the AOAC (3). In this method, a mechanical plater 
inoculates a rotating agar plate with liquid sample. The sample volume dispensed decreases as 
the dispensing stylus moves from the center to the edge of the rotating plate. The microbial 
concentration is determined by counting the colonies on a part of the petri dish where they are 
easily countable and dividing this count by the appropriate volume. One inoculation determines 
microbial densities between 500 and 500,000 microorganisms/ml. Additional dilutions may be 
made for suspected high microbial concentrations.

### Equipment and Materials
1. Spiral plater 
2. Spiral colony counter with special grid for relating deposited sample volumes to specific 
portions of petri dishes 
3. Vacuum trap for disposal of liquids (2-4 liter vacuum bottle to act as vacuum reservoir 
and vacuum source of 50-60 cm Hg) 
4. Disposable micro beakers, 5 ml 
5. Petri dishes, plastic or glass, 150 × 15 mm or 100 × 15 mm 
6. Plate count agar (standard methods) (M124) 
7. Calculator (optional), inexpensive electronic hand calculator is recommended 
8. Polyethylene bags for storing prepared plates 
9. Commercial sodium hypochlorite solution, about 5% NaOCl (bleach) 
10. Sterile dilution water 
11. Syringe, with Luer tip for obstructions in stylus; capacity not critical 
12. Work area, storage space, refrigerator, thermometers, tally, incubator, as described for 
Conventional Plate Count Method, above

### Preparation of agar plates
>> Automatic dispenser with a sterile delivery system is recommended to prepare agar plates. 
Agar volume dispensed into plates is reproducible and contamination rate is low compared to 
hand-pouring of agar in open laboratories. When possible, use laminar air flow hood along 
with automated dispenser. Pour the same quantity of agar into all plates so that same height of 
agar will be presented to spiral plater stylus tip to maintain contact angle. Agar plates should be 
level during cooling. 

>> The following method is suggested for pre-pouring agar plates: Use automatic dispenser or pour 
constant amount (about 15 ml/100 mm plate; 50 ml/150 mm plate) of sterile agar at 60-70°C into 
each petri dish. Let agar solidify on level surface with poured plates stacked no higher than 10 
dishes. Place solidified agar plates in polyethylene bags, close with ties or heat-sealer, and 
store inverted at 0-4.4°C. Bring pre-poured plates to room temperature before inoculation.

### Preparation of samples
>> As described in Chapter 1, select that part of sample with the smallest amount of connective tissues 
and avoid any visible fat layer.

### Description of spiral plater
>> Spiral plater inoculates surface of prepared agar plate to permit enumeration of microorganisms 
in solutions containing between 500 and 500,000 microorganisms per ml. Operator with 
minimum training can inoculate 50 plates per h. Within range stated, dilution bottles or pipets 
and other auxiliary equipment are not required. Required bench space is minimal, and time to 
check instrument alignment is less than 2 min. Plater deposits decreasing amount of sample in 
Archimedean spiral on surface of pre-poured agar plate. Volume of sample on any portion of 
plate is known. After incubation, colonies appear along line of spiral. If colonies on a portion of 
plate are sufficiently spaced from each other, count them on special grid which associates a 
calibrated volume with each area. Estimate number of microorganisms in sample by dividing 
number of colonies in a defined area by volume contained in same area. Studies have shown 
the method to be proficient not only with milk (7) but also with other foods(12, 15).

### Plating Procedure
>> Check stylus tip angle daily and adjust if necessary. (Use vacuum to hold microscope cover slip 
against face of stylus tip; if cover slip plane is parallel at about l mm from surface of platform, tip 
is properly oriented). Liquids are moved through system by vacuum. Clean stylus tip by rinsing 
for 1 s with sodium hypochlorite solution followed by sterile dilution water for 1 s before sample 
introduction. This rinse procedure between processing of each sample minimizes cross
contamination. After rinsing, draw sample into tip of Teflon tubing by vacuum applied to 2-way 
valve. When tubing and syringe are filled with sample, close valve attached to syringe. Place 
agar plate on platform, place stylus tip on agar surface, and start motor. During inoculation, 
label petri plate lid. After agar has been inoculated, stylus lifts from agar surface and spiral 
plater automatically stops. Remove inoculated plate from platform and cover it. Move stylus 
back to starting position. Vacuum-rinse system with hypochlorite and water, and then introduce 
new sample. Invert plates and promptly place them in incubator for 48 ± 3 h at 35 ± 1°C.

### Sterility controls
>> Check sterility of spiral plater for each series of samples by plating sterile dilution water. 
CAUTION: Pre-poured plates should not be contaminated by a surface colony or be below room 
temperature (water can well-up from agar). They should not be excessively dry, as indicated by 
large wrinkles or glazed appearance. They should not have water droplets on surface of agar or 
differences greater than 2 mm in agar depth, and they should not be stored at 0-4.4°C for 
longer than one month. Reduced flow rate through tubing indicates obstructions or material in 
system. To clear obstructions, remove valve from syringe, insert hand-held syringe with Luer 
fitting containing water, and apply pressure. Use alcohol rinse to remove residual material 
adhering to walls of system. Dissolve accumulated residue with chromic acid. Rinse well after 
cleaning.

### Counting grid
?

### Examination and reporting of spiral plate counts
>> Counting rule of 20. After incubation, center spiral plate over grid by adjusting holding arms on 
viewer. Choose any wedge and begin counting colonies from outer edge of first segment toward 
center until 20 colonies have been counted. Complete by counting remaining colonies in 
segment where 20th colony occurs. In this counting procedure, numbers such as 3b, 4c (Fig. l) 
refer to area segments from outer edge of wedge to designated arc line. Any count irregularities 
in sample composition are controlled by counting the same segments in the opposite wedge 
and recording results. Example of spirally inoculated plate (Fig. l) demonstrates method for 
determining microbial count. Two segments of each wedge were counted on opposite sides of 
plate with 31 and 30 colonies, respectively. The sample volume contained in the darkened 
segments is 0.0015 ml. To estimate number of microorganisms, divide count by volume 
contained in all segments counted. See example under Fig. l. 

>> If 20 CFU are not within the 4 segments of the wedge, count CFU on entire plate. If the number 
of colonies exceeds 75 in second, third, or fourth segment, which also contains the 20th colony, 
the estimated number of microorganisms will generally be low because of coincidence error 
associated with crowding of colonies. In this case, count each circumferentially adjacent 
segment in all 8 wedges, counting at least 50 colonies, e.g., if the first 2 segments of a wedge 
contain 19 colonies and the third segment contains the 20th and 76th (or more), count colonies 
in all circumferentially adjacent first and second segments in all 8 wedges. Calculate contained 
volume in counted segments of wedges and divide into number of colonies. 

>> When fewer than 20 colonies are counted on the total plate, report results as "less than 500 
estimated SPLC per ml." If colony count exceeds 75 in first segment of wedge, report results as 
"greater than 500,000 estimated SPLC per ml." Do not count spiral plates with irregular 
distribution of colonies caused by dispensing errors. Report results of such plates as laboratory 
accident (LA). If spreader covers entire plate, discard plate. If spreader covers half of plate 
area, count only those colonies that are well distributed in spreader-free areas. Compute SPLC 
unless restricted by detection of inhibitory substances in sample, excessive spreader growth, or 
laboratory accidents. Round off counts as described in I-D, above. Report counts as SPLC or 
estimated SPLC per ml

## Appendix
?
