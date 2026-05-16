+++
title = "Floral Dip Transformation"
description = "Simplified from the Arabidopsis thaliana Floral Dip Transformation Method by Andrew Bent."
sort_by = "title"
weight = 970

[extra]
key_words = ["In planta transformation", "germline transformation", "Arabidopsis thaliana"]
authors = ["Andrew Bent"]
updated = 2027-01-01
toc_level = 3
see_also = [
  { title = "Review Article", href = "/doi/10.1385/1-59745-130-4-87.pdf" },
  { title = "Simplified Arabidopsis Transformation Protocol", href = "https://plantpath.wisc.edu/simplified-arabidopsis-transformation-protocol-2/" },
  { title = "Arabidopsis Biological Resource Center", href = "https://abrc.osu.edu/" },
  { title = "Arabidopsis Stock Center", href = "https://arabidopsis.info/" },
  { title = "The Arabidopsis Information Resource", href = "http://www.arabidopsis.org/index.jsp" },
]
+++

{{ hidden() }}


# Methodology

## Summary
_Arabidopsis_ floral dip transformation is notable for a number of reasons. First, it is
strikingly simple to perform. _Agrobacterium_ is applied to flowering _Arabidopsis_ plants
that subsequently set seed, and transgenic plants are then selected among the progeny
seedlings. Because no plant tissue culture is required, somaclonal variation is avoided,
and the procedure can be performed easily by nonspecialists. Success rates are high: it is
common that 1% of the progeny seedlings are transgenic. The biology behind the method
is interesting: _Arabidopsis_ and some related Brassicaceae are apparently unique in
allowing exogenously applied _Agrobacterium_ to colonize the interior of developing ovaries, 
where female gametophyte cell lineages are transformed. The availability of the
method has had a transformative effect on the overall practice of plant molecular biology, 
as the generation and analysis of large numbers of transgenic plants is now routine
in hundreds of laboratories. The method has been exploited in a genomics context to
make stable gene knockout plant lines for most _Arabidopsis_ genes.


## Introduction
The _Arabidopsis_ “floral dip” method stands out from other plant transformation methods because it requires minimal labor and no plant tissue culture and can be performed successfully by nonspecialists. 
Flowering plants are simply dipped in or sprayed with an appropriate strain of _Agrobacterium tumefaciens_, and then the seed collected from these “T0” plants is germinated
under selection to identify transgenic “T1” individuals. 
The method has been
used in hundreds of laboratories throughout the world, where it is common for
approximately 1% of T1 seedlings to be transgenic. (Rates of 0.1–3% are typical.) 
The floral dip method (1) is a variant of the in planta _Arabidopsis_ transformation method 
pioneered by Bechtold et al. (2), which offered major
improvements to the equally pioneering work of Feldmann and Marks (3).
For further background reading, see ref. 4.

Plant transformation has been possible for many years, but the floral dip
method provides an instructive example of the qualitative shift in research
progress that a simple, accessible transformation method can foster. 
Because transgenic plant lines can easily be generated for dozens of gene constructs,
map-based gene cloning, structure/function studies of genes and proteins, 
signal transduction research, and studies of plant development, stress responses,
and numerous other areas have all been significantly expedited. Investigators
must wait 2–3 mo to obtain stably transformed plants while the seed matures
on Agrobacterium-inoculated plants and selected T1 seedlings are then grown,
but this waiting time can be devoted to other research tasks. The most notable
shift associated with the method may have been the arrival of gene knockout
plant lines. High-throughput transformation capacity allows T-DNA to be used
as an insertional mutagen (5). This was pushed a significant step further by
sequencing the T-DNA insertion site for more than 340,000 transgenic
_Arabidopsis_ lines. Investigators can now obtain from stock centers a [gene knockout line for most _Arabidopsis_ genes](http://signal.salk.edu/cgi-bin/tdnaexpress).

In _Arabidopsis_ floral dip transformation, essentially all T1 transformants are
the product of germline transformation events, meaning that the plants are
uniformly transgenic in all cells. T1 transformants are hemizygous at any given
T-DNA insert locus because the T-DNA insertion events occur within the T0
plant after divergence of the male and female gametophyte cell lineages
(reviewed in ref. 4). The vast majority of transgenic plants arise from transfor
mation of a female gametophyte (7–10). Therefore, every T1 transgenic plant
harvested off of the same T0 individual carries a different T-DNA insertion.
Because the targeted plant cells remain in their normal context within the plant
and are not subjected to plant tissue culture before or after transformation,
somaclonal variation is rare and has not been an issue for most users (11,12).
Loci other than the site of a particular T-DNA insertion may undergo mutation,
owing to another T-DNA insertion or to apparent T-DNA insertion/deletion
events (13,14). However, the rate at which any particular gene is mutated
remains exceedingly low, and unintended mutations usually become a factor
only when large insertionally mutagenized populations are being used in
forward genetic screens. In a study in which two different Agrobacterium
strains carrying different T-DNA constructs were coinoculated onto Arabidopsis,
roughly 15% of the transgenic plant lines carried both T-DNAs, and if both
T-DNAs were present they almost always integrated together at the same
insertion site (15). It is also intriguing that bacteria other than Agrobacterium
have recently been used for floral dip transformation (16).

The floral dip transformation method has to date been successful only with
_Arabidopsis thaliana_ and some other Brassicaceae (17–21). Many concerted
attempts have been made to use the method in other plant species, but these have failed. 
A report of success with Medicago truncatula (22) has unfortunately not been reproducible. 
Apparently, one reason that _Arabidopsis_ is amenable to floral dip transformation is that the flower gynoecium is open and
accessible to exogenously applied _Agrobacterium_ during early stages of floral development (8). 
A sufficient population of _Agrobacterium_ can become established in the interior of the gynoecium as ovules (the target of transformation)
are beginning to develop. Subsequent closure of the gynoecium prevents transformation in flowers that are at later stages of development. 
Successful transformation also requires that the host not manifest a strong necrotic reaction to
the presence of Agrobacterium, which can cause abortion in flowers that have
been colonized by Agrobacterium. Apparently, _Arabidopsis_ and some other
Brassicaceae satisfy the above constraints.

## Materials
### Plant Materials
Any _Arabidopsis thaliana_ may be used. 
_Arabidopsis thaliana_ Col (“Columbia”) is the accession most commonly used by _Arabidopsis_ researchers and is the accession for which the first _Arabidopsis_ genome DNA sequence was determined (see [Note 1](#notes)). 
Ler (Landsberg erecta) and Ws (Wassilewskija) are also in widespread use. 
Most _Arabidopsis thaliana_ accessions or ecotypes can be transformed by the floral dip method, often at rates similar to (within 10-fold of) those stated for Col-0 (see [Note 2](#notes)).

### _Agrobacterium_ Strain and Constructs
**Strains**
1. 
: Many different _Agrobacterium tumefaciens_ strain backgrounds have been used
successfully in the floral dip method. GV3101 (23), more properly called GV3101
(pMP90), is the most commonly used strain, as it is particularly well suited for
_Arabidopsis_ transformation. Other strains of the C58 background carrying a dis
armed C58 Ti plasmid can often be substituted with similar results. LBA4404 is
also commonly used. LBA4404 generally works less well than GV3101, and
this aspect of LBA4404 can be exploited to reduce the proportion of trans
formants that carry more than one T-DNA insertion.

**Binary Vectors**
2. 
: A vast array of binary vectors has been used in floral dip transformation.
The [pCambia vectors](https://cambia.org/welcome-to-cambialabs/cambialabs-projects/cambialabs-projects-legacy-pcambia-vectors-pcambia-legacy-vectors-1/cambialabs-projects-legacy-pcambia-vectors-list-of-legacy-pcambia-vectors-3/) 
are a particularly convenient and useful set of vectors for Agrobacterium-mediated plant transformation. 
[Vectors that can be used with Gateway cloning](https://vectorvault.vib.be/) methods to make various transgene fusions are also available from a number of sources.

### Stock Solutions
**Kanamycin (50 mg/mL)**
: Dissolve powder in dH2O, filter-sterilize, and store frozen in 1-mL aliquots. 
: Other antibiotics or herbicides may also be used as appropriate, for selection of _Agrobacterium_ strains and plasmids, in _Agrobacterium_ or in plants (see [Notes 3–6](#notes)).

### Media
**LB broth or LB agar (for growth of Agrobacterium)**
: in 1 L deionized H2O, add 10 g Bacto tryptone, 5 g yeast extract, 5 g NaCl. 
Add 15 g agar if making solid media. 
Autoclave prior to use. Add antibiotics only after media has cooled to temperatures below 65°C.

**MS-agar (for selection of _Arabidopsis_ transformants)**
: 0.5X Murashige and Skoog macro- and micronutrients (example: Sigma, cat. no. M5524; use 2.15 g/L), 0.8% plant tissue culture agar (8 g/L). 
Autoclave, cool to 65°C, and then add 50 μg/mL kanamycin (or other appropriate selection agent; 
see [Notes 4–6](#notes) regarding other plant selection media).

### Other Solutions, Reagents and Supplies
**Sucrose**
1. 
: 5% Sucrose: dissolve 50 g sucrose in 1 L of water. 
: - If made fresh in clean water, it is not necessary to autoclave or work under sterile conditions.

**Surfactant**
2. 
: Silwet L-77 surfactant (GE Silicones/OSi Specialties, Wilton, CT). 
: - L-77 can be purchased in convenient quantities from [Lehle Seeds](http://www.arabidopsis.com/).

**Peat**
3. 
: Peat mixture (for growing Arabidopsis):
: - Sunshine Mix #1 (Sun-Gro Horticulture, Bellevue, WA) or Scott’s MetroMix 360 (Hummert International, Earth City, MO).

**Pots**
4. 
: Pots and plant flats (e.g., #F1020, no holes) can be purchased from Hummert International.

## Methods
All plans for the generation of transgenic plants should be approved by proper institutional authorities. 
Regulated transgenic materials should be collected and rendered biologically inactive (e.g., autoclaved) prior to disposal.

### Growing _Arabidopsis_ for Transformation
To avoid unintended delays, it is necessary to plant _Arabidopsis_ 4 to 8 wk in
advance of the date on which you expect your _Agrobacterium_ strains to be
constructed and ready for plant inoculation.
There are many acceptable ways of growing _Arabidopsis_ for floral dip transformation. 
The key is simply to grow healthy, vigorous plants that will produce plentiful seed. 
This is an important component of successful, reproducible floral dip transformation. 
If you have an _Arabidopsis_ growth protocol that works well, use it. 
The following is one of many methods for _Arabidopsis_ growth:

**Soil**
1.
: Grow _Arabidopsis_ in a peat mixture such as Sunshine Mix #1 or Scott’s MetroMix 360 (see [Note 7](#notes)). 
: Moisten soil mix before adding it to pots. It should be moist enough to release water when squeezed, but with capacity to still take up more water.

**Planting**
2.
: Plant one or two seeds per 5-cm pot, or 9 to 20 seeds per 9-cm pot.
: After plants are established you will be bottom-watering, so place the pots in a flat that has no holes (such as a 1020 flat with a ridged bottom).
: Pack each pot with premoistened soil mix so that the mix is not loose enough to collapse with top watering but also not overly compressed. 
: If you are planning to dip entire rosettes, grow plants through screen or mesh (see [Note 8](#notes)).

**Planting Cont.**
3. 
: Plant _Arabidopsis_ seeds by placing them on top of the moist soil mix. Do not bury the seed in the soil. 
: For planting single seeds, pick them up by touching them with the fine tip of a moistened artist’s 00 paintbrush. 
: For planting a batch of a single genotype, suspend seeds (there are roughly 50 seeds per mg) in room temperature 0.1% agarose and dispense onto soil one at a time using a long tipped Pasteur pipet. 
: To plant larger flats with less precision, add a fixed amount of seed to a fine dry carrier such as dry crushed peat, and then disperse the mix evenly over the moist soil mix.

**Germination**
4.
: Cover the flats with a close-fitting clear plastic dome to maintain humidity. Many
_Arabidopsis_ accessions germinate more uniformly if held on wet soil at 4°C
(dark is OK) for 2 to 5 d prior to being placed in the growth room. After flats are
moved from 4°C to the growth room, leave the dome on at least until seedlings
have emerged, cotyledons are green, and the first rosette leaf is clearly evident.

**Post-Germination**
5. 
: Then, over a few days, slightly displace (mis-seat) the domes to let in room air and reduce relative humidity gradually. 
: After a few days of acclimation, remove domes entirely.

**Growing**
6. 
: Grow plants at 22°C under long days (18+ h light/d) to encourage early bolting
and flowering. _Arabidopsis_ grows best at lower light levels than many plants
(50–200
E/m2/s; 100–150 is optimal). Relative humidity of 50–70% is best, but
lower humidity can be tolerated. Plants are likely to bolt (send up flowering
stalks) 4 to 5 wk after germination, but this varies depending on your growth
conditions. To grow larger plants that will generate more seed, see [Note 9](#notes).

**Watering**
7. 
: Pots should be watered from their base (add water to the flat; see [Note 10](#notes)).

**Fertilization**
8. 
: Provide mild fertilization (e.g., quarter-strength MiracleGro) once every week or two. 
: Many soil mixes contain a starter fertilizer that only lasts for the first week or two.

**Pests**
9. 
: Keep insects away. 
: Thrips especially, and aphids also, are serious pests on _Arabidopsis_ that must be avoided whenever possible. 
Marathon is one insecticide that is useful if needed—add granules to soil and top-water it in. 
However, the best approach with thrips or aphids is to purge the room of all plants, clean up
the room, dry heat it for a few days, and then start over with new plants. Fungus
gnats are OK at low population levels but can become a problem if not con
trolled. Fungus gnat numbers can be reduced by hanging yellow sticky paper in
the growth area and by taking care to let the soil mix dry a bit between waterings.
Spider mites tend to be more of a problem on older, neglected plants. To reduce
insect problems, it is good to move older plants to a separate growth room for
seed maturation and drying down.

> [!TIP]
> No one likes to repeat experiments that fail for preventable reasons. 
> Healthy plants and a green thumb are essential components to successful work!

### Preparation of _Agrobacterium_ Culture
Standard microbiological techniques can be used; see, for example, ref. 25.
A great deal of flexibility exists in the methods used to prepare _Agrobacterium_ cultures for floral dip transformation of Arabidopsis. 
Cultures can be grown in LB, YEP, or other growth media. 
They can be grown to various stages of saturation and be resuspended at a variety of densities prior to plant inoculation (see [Note 11](#notes)). 
The following is one common and successful approach.

**Preparation**
1. 
: Prepare an _Agrobacterium tumefaciens_ strain that carries the gene or genes of interest on a binary vector (see [Note 12](#notes)).

**Inoculation**
2. 
: Use a single colony to inoculate and grow a small (1–5 mL) overnight culture in
LB broth with antibiotic to select for the binary plasmid. If the strain has already
been single-colony purified and you are in a hurry, a larger clump of cells can be
used as starter inoculum (see [Note 13](#notes)).

**Dilution**
3. 
: The next day, dilute this starter culture approximately 1:100 into a larger volume
of LB broth, with antibiotics added to select for the binary plasmid. For example,
add 2.5 mL of starter to 250 mL in a 1-L flask and grow overnight at 28°C and
200 rpm.

**Growth**
4. 
: The following day the culture should have grown at least to midlogarithmic phase
and more likely will be approaching or at stationary phase (either is OK—grow
longer if more cells are needed).

**Transfer**
5. 
: Transfer the liquid culture to a centrifuge bottle, and pellet cells by spinning for
10–20 min at room temperature at approximately 5500g.

**Supernatant**
6. 
_The liquid_
: Pour off supernatant into a flask or other waste container to which bleach can be
added to kill stray _Agrobacterium_ organisms.

**Resuspension**
7. 
: Resuspend the pelleted cells in an equal volume of freshly made 5% sucrose solution.

**Dilution**
8. 
: Adjust by further dilution if necessary, to achieve OD600 = 0.8. (This is approximate: densities between 0.2 and 2.0 can work.) 
: You will need 100–200 mL of _Agrobacterium_ in sucrose for every two or three small pots to be dipped, or 400–500 mL for every two or three 3.5-inch (9-cm) pots. 
: See [Note 11](#notes) regarding another possible shortcut.

**Preparation**
9. 
: Before dipping or spraying plants, add Silwet L-77 to a concentration of 0.05% (500 μL L-77 per L of Agrobacterium) and mix well. 
: If there are problems with L-77 toxicity, use 0.02% or as low as 0.005% L-77.

### Plant Transformation
Transformation occurs within very young flowers. _Agrobacterium_ is applied to
floral buds by dipping the plant tissue in Agrobacterium, or by spraying the
Agrobacterium onto the plant. Inoculated plants are kept at high humidity for the
many ensuing hours and then grown to seed normally. Use of a surfactant enhances
reproducibility by ensuring penetration of _Agrobacterium_ into the flower interior.
1. Use plants that are bolting. Plants should carry many young unopened flower
buds and only a few open or fertilized flowers. See [Note 14](#notes) regarding plant
growth stages and Note 15 for a discussion of plant numbers.
2. Dip plants into _Agrobacterium_ solution prepared according to the [Preparation of _Agrobacterium_ Culture](#preparation-of-agrobacterium-culture). 
The _Agrobacterium_ can be placed in a large beaker, disposable plastic soup bowl, or any other convenient container.
3. Swirl the plant tissues gently in the liquid for 1 or 2 s to remove bubbles and
achieve full coverage, and then remove plant. 
It is only necessary to dip the inflorescence and not the rosette leaves, 
but you may wish to dip all above-ground
plant tissues if some plants carry only very short inflorescences, or if the plants
have been trimmed and shorter axillary inflorescences are being targeted. It is
OK to reuse the _Agrobacterium_ solution, but only for two or three different pots.
See [Note 16](#notes) regarding spray-inoculation.
4. After dipping or spraying, it is preferable to maintain the plants at high relative
humidity for a number of hours. This can be accomplished by placing plants
under a clear plastic dome. If plants are too tall when inoculated they can be laid
on their side in a clean flat and then covered with an inverted flat, some plastic
wrap, or a clear plastic dome. The plants can then be left on a lab bench or returned
to their normal growth room, but to avoid excessive heating, do not expose plants
under a dome to direct sunlight.
5. The next day, remove the dome or other humidifying setup and return plants to
their previous growing conditions.


### Plant Care, Seed Harvest, and Storage
1. After plants have been inoculated with _Agrobacterium_ and held at high humidity
for 1 d, simply return the plants to their normal growing conditions and continue
watering until the siliques start to lose their green color and become yellow.
When most of the siliques on the plant are yellowing, it is OK to stop watering.
2. To reduce tangling and lodging, the bolts (flowering inflorescences) from a single
pot can be tied together with string or twist-ties, with or without a small stake for
support, or the bolts can be held by wrapping the pot in wax paper with the ends
taped to form an open-topped tube. Plastic tubes for this purpose are commer
cially available (see [Note 17](#notes)).

3. Harvest seed once the siliques are notably brown and dry but before many siliq
ues are spontaneously opening and dropping seed.
4. To harvest, hold the bolts from one pot over a clean piece of paper, and pull them
gently between your fingers a few times to dislodge the seeds. Then pick up the
paper and separate the siliques and stray stems from the seed, throw the siliques
away, and pour the seeds into a 1.5-mL plastic tube or other container for storage.
Use a new piece of paper for each seed lot. You can also cut the bolts off and
place them unthreshed into an envelope, and then return at a convenient time to
release seeds by gently crushing the envelope, tapping the heavy seeds into one
corner, and then tearing off that corner of the envelope to transfer seeds into a
container. Seeds do not have to be perfectly cleaned of plant debris, but they do
need to be quite dry. Avoid harvesting moist seed by waiting for full maturity, or
by only very gently agitating the bolts so that the moister seed remains adherent
to the bolts (see [Note 17](#notes)).
5. Dry seeds can be stored at room temperature for many years with no dessication,
but will keep better if stored at lower temperature and humidity. If some seeds
are moist, store in paper envelopes in a sealed plastic box over dessicant, or punch
a hole in the top of plastic tubes and store in a sealed box over dessicant.


### Selecting Transformants
As with other steps, many different selection protocols may be used. The fol
lowing protocol selects for kanamycin resistance. See [Note 5](#notes) for Basta and
Note 6 for hygromycin selection methods.
1. Prepare 15 
 150-mm Petri dishes containing approximately 65 mL of 50 mg/L
kanamycin and 0.5X MS macro- and micronutrients (no sugar) in 0.8% plant
tissue culture-tested agar.

**Surface-Sterilization**
2. 
: Surface-sterilize 2000–6000 _Arabidopsis_ seeds (40–120 mg):
: - a. Place seed in a 15-mL plastic centrifuge tube.
: - b. Add isopropanol, mix briefly, and then decant within 15 to 60 s.
: - c. Immediately add 50% bleach/50% water/0.05% Tween-20. Mix occasionally, and then, after 5 min, decant (see [Note 18](#notes)).
: - d. Rinse seed three to four times with sterile water, and decant.
: See [Note 19](#notes) for an alternative, vapor-phase surface sterilization method.

3. To aid in seed dispersal across the selection plate, add sterile room temperature
0.1% agarose, using approximately 1.0 mL agarose for every 500 to 800 seeds.
4. Pour 3.5 to 4 mL resuspended seed onto each 150 
 15-mm selection plate. Gen
tly tilt the plate and use a sterile curved glass rod spreader to guide the edge of the
liquid evenly across the plate. Avoid the edge of the plate (the outmost 1 cm),
since selection tends to fail in this zone. To avoid clumping of seed, do not move
spreader around within the puddle of seeds on the selection plates—just use it to
guide the edge of the puddle. Rinse spreader in 95% ethanol between seed batches
to avoid cross-contamination.

5. Dry plates in sterile laminar flow hood until seeds no longer slide when plates are
tipped. Cover plates. It is generally not necessary to wrap plates, but if this is
desired, wrap with porous surgical tape.
6. Stratify seed on plates for 2 nights in refrigerator or cold room.
7. Move plates to growth chamber (50–100 
E/m2/s, 18–24 h light, 21–24°C).
8. After 6 to 10 d, transformants should be clearly identifiable as dark green plants with
healthy green secondary leaves and roots that extend well into the selective medium.
9. Using a pair of tweezers, gently remove plants from agar and transplant to previ
ously moistened soil. Grow plants under a dome for roughly 1 wk, and then grow
normally (see [Note 20](#notes)).
10. The phenotype of interest can often be scored directly on these primary
transformants (the T1
 plants).


### Zygosity, Progeny Testing, and Identification of Homozygous Transgenic Lines
After transgenic seedlings have been identified, the following points all
merit consideration:
3.6.1. When to Start Using the Transgenic Plants
It is often not only possible but also desirable to do phenotypic tests on T1
plants. Barring obvious problems (i.e., apparent 40 or 98% transformation suc
cess rate), the above selection protocols typically allow false positives (propa
gation of nontransgenic plants) at a rate below 1%. If your phenotype of interest
is not affected by the selection and transplanting process, assay of a set of 10 to
20 T1
 plants has the added advantage that multiple independent transgenic lines
will be tested, and a result will be obtained quickly. However, for important
lines, the presence of the transgene and the phenotype must be confirmed in
subsequent plant generations.
3.6.2. How to Identify True-Breeding Transgenic Lines
Because the T1
 plants are hemizygous, some T2
 progeny of self-fertilized T1
plants will lack the transgene. Germination of T2
 plants under antibiotic/herbi
cide selection should remove nontransgenic plants and will also select for plants
in which the selectable marker gene has not been silenced, allowing use in
phenotypic testing, but this will not remove hemizygous plants from the popu
lation. Stable nonsegregating transgenic lines are often identified by pushing
T1
 and T2
 generations through quickly and identifying the T3
 families in which
no individuals lack expression of the selectable marker.
3.6.3. Are the Insertion Events Simple or Complex?
Many T1
 plants are likely to carry multiple insertion loci, and for this and
other reasons these plants will not produce T2
 progeny families that exhibit

3:1 segregation for the transgene (see also [Agrobacterium Strain and Constructs](#agrobacterium-strain-and-constructs)). Even if a single
locus T-DNA insert is present, the locus may carry a complex T-DNA struc
ture with duplications, inverted repeats, T-DNA derived from transfer that
extended beyond the right T-DNA border of the binary plasmid, and other
things. Gene silencing is less likely to be an issue in lines that carry a single
locus insert with one T-DNA copy at that locus, for reasons related to gene
expression level as much as the absence of inverted repeat T-DNA inserts (13,26).
3.6.4. How to Identify Lines with Single-Copy Inserts
Isolate genomic DNA, cut with restriction enzyme (as described next), make
a Southern blot, and probe the blot with a probe that matches insert DNA near
the left T-DNA border. Choose a restriction enzyme and probe to detect
restriction fragments that are generated by one cut within the T-DNA and by a
second, unknown site outside the left T-DNA border in the host genomic DNA
that flanks the insertion site. Note that this second site may be supplied by
plant genomic DNA that flanks the T-DNA, or by adjacent T-DNA in a
multimeric insert. If the transgenic line is likely to be of interest in many future
experiments, it is often most efficient to identify simple insertion lines using T1
leaf tissue, allowing disposal of less desirable T1
 lines prior to seed harvest and
further expenditure of effort. Alternatively, one can use genomic DNA pooled
from multiple T2
 individuals within a family and test only those T2
 families
that exhibited 3:1 segregation for the selectable marker or the gene of interest.
3.6.5. How Many Different Transgenic Lines
to Save for a Given Construct
There is no single correct answer to this; the answer depends in part on the
importance of that particular transgene in your research and on the effort spent
to identify simple insertion events. Owing to variations in transgene expres
sion caused by site of chromosomal insertion and owing to the possibility of
secondary unintentional mutations in the genome of any single transgenic line,
at least three independent lines with a simple insert structure should be saved.
If work has not been done to identify lines that carry a simple insertion, the
likelihood of future gene silencing makes it wise to save a few dozen indepen
dent transgenic lines.


## Notes
1. Col accessions with different numbers (e.g., “Col-4”) are progeny from the original Col-0 line, and are for the most part identical to each other. 
_Arabidopsis_ seed stocks and other resources can be obtained from the [Arabidopsis Biological Resource Center](https://abrc.osu.edu/) 
or from the [European _Arabidopsis_ Stock Center](https://arabidopsis.info/). 
Numerous other _Arabidopsis_ resources can be accessed online through [The Arabidopsis Information Resource](http://www.arabidopsis.org/index.jsp), which is a highly recommended site.

2. Most _Arabidopsis_ ecotypes (wild-type accessions) have been transformable by this method. 
Some accessions are more difficult to transform than others, 
but as long as the transformation rate is above roughly 1 in 10,000 T1 seedlings, 
the stated protocols can be carried out with minimal added burden. 
Reports of transformation recalcitrance can vary from laboratory to laboratory, 
and the causal variables have generally not been identified. 
If working with novel accessions or with mutations that may impact transformation rate, 
include wild-type Col-0 as a control to establish a baseline transformation rate that is specific to your experiment. 
If a recessive mutation is responsible for poor transformation, transform a heterozygote and then identify progeny with the desired genotype.

**Antibiotics**
3. 
: For selection of _Agrobacterium tumefaciens_ carrying an appropriate antibiotic resistance gene, 
the following antibiotics can be used with only normal care:
: - Kanamycin: 25–100 μg/mL.
  - Rifampicin: 50–100 μg/mL (Rifampicin stocks can be made at 20 mg/mL in methanol. They are light sensitive and should be stored in the dark.)
  - Gentamicin: 50–100 μg/mL.
  - Erythromycin: 150–200 μg/mL.
  - Carbenicillin: 100 μg/mL.
  - Spectinomycin: 100 μg/mL.
: Other antibiotics require more caution:
  - Tetracycline: 2–2.5 μg/mL. If possible, avoid this antibiotic with Agrobacterium. 
    Higher levels of tetracycline will kill strains expressing only the
    plasmid-derived resistance and with C58-derived strains such as GV3103 will
    select for the spontaneous tetracycline resistant isolates that do not carry the
    binary plasmid (27). Mutations to tetracycline resistance arise spontaneously
    at high frequency (10–6–10–5). 
    Because this spontaneous resistance is typically more effective than the resistance expressed from binary plasmids, 
    the smaller tetracycline-resistant colonies are often the ones to pick—they are
    more likely to contain the strain + plasmid that you probably seek, whereas
    the larger colonies are spontaneous mutants. 
      - If your binary plasmid encodes tetracycline resistance but also contains a 35S-nptII construct (for kanamycin resistance in plants), the latter is often expressed effectively in _Agrobacterium_ (but not in E. coli). 
    So, with this type of plasmid, you may be able to select for tetracycline resistance in E. coli (10 μg/mL) and then kanamycin resistance (50 μg/mL) in Agrobacterium.
  - Chloramphenicol: it is generally a good idea to avoid use of chloramphenicol entirely with Agrobacterium.
  - Streptomycin: use with some care, at 100–200 μg/mL. Some strains give rise to spontaneous streptomycin-resistant mutants at relatively high frequency.

If in doubt about the presence of your binary plasmid in Agrobacterium, this
can be checked by polymerase chain reaction (using appropriate positive and
negative controls), or by Southern blots, or by successful rescue of the plasmid
back into E. coli (see Chapter 5).

4. For kanamycin selection and other plate-based selections, plant tissue culture
vitamins are not needed for the brief period that _Arabidopsis_ will grow on these
plates. However, if present, the vitamins can be autoclaved (e.g., Sigma, cat.
no. M6899).

**Basta Selection**
5. 
: With _Arabidopsis_ floral dip, a common alternative to kanamycin
selection is Basta selection. Basta is a commonly used trade name for phos
phinothricin, which is also called glufosinate. One advantage of Basta selections
is that they can be carried out in a greenhouse using plants grown in soil.
To identify _Arabidopsis_ plants expressing a Basta resistance gene, Liberty her
bicide (AgrEvo USA Company, active ingredient glufosinate, 200 mg/L) can be
diluted 1:1000 (1 mL/L) and then sprayed on germinated _Arabidopsis_ seedlings
once every 3 d for approximately 2 wk after seedlings germinate and emerge.
Basta selections can also be done on 0.5X MS/0.8% agar plates.

**Hygromycin Selection**
6. 
: Although kanamycin or Basta is preferable for Arabidopsis, hygromycin selection is another option. 
: However, past hygromycin selection protocols for _Arabidopsis_ have been variable and problematic for many researchers. 
: The following greatly improved protocol was supplied by Dr. Zhiyong Wang (Carnegie Institute of Washington, Stanford, CA):
: 1. Pour 0.5X MS/0.8% agar plates containing 25 mg/L hygromycin.
  1. Sow surface-sterilized _Arabidopsis_ seeds (up to 4000 seeds per 150-mm plate).
  1. Stratify in cold for 2 to 3 d.
  1. Put plates at room temperature in light for 4–12 h to promote germination.
  1. Move plates into the dark at room temperature (wrap in foil, and put in a cupboard). Grow in the dark for 5 d after the brief light treatment.
  1. After 5 d, hygromycin-sensitive seedlings will be lying on the growth medium and have short hypocotyls and open cotyledons. 
    Hygromycin-resistant seedlings will be standing up, with elongated hypocotyls and closed cotyledons. 
    Mark the resistant seedlings and then transfer the plate to the lab benchtop for 2 d to allow seedlings to green up and recover in gentle light.
  1. Transfer hygromycin-resistant seedlings to moist soil and harden off gradually over a few weeks. (Grow under a dome with high humidity initially.)

**Potting Mixes**
7.
: Sunshine Mix #1 or Scott’s MetroMix 360 are good potting mixes to use. 
: Other mixes can work, but note that many mixes do not work well for Arabidopsis.

8. For some experiments it is desirable to immerse entire low-lying rosettes into an
Agrobacterium suspension, to achieve inoculation of shorter young inflores
cences. In this case you may want to grow plants through screen or mesh (tulle,
bridal veil, cheesecloth) that holds the soil in when you immerse the plants in
liquid. When initially planting, mound the moistened soil in a smooth, relatively
flat dome that extends roughly 1 cm above the top rim of the container, and then
cover with mesh held around the edges by a strong rubber band so that the mesh
stays very close to the soil surface. Otherwise, young germinating seedlings will
expand their cotyledons prior to penetrating the mesh and will get stuck under
neath the mesh.

9. To delay bolting and to encourage sustained growth of larger plants that will
produce more seed when they bolt, grow under short days (8–10 h light/d, with
no light allowed to disrupt the 14+ h dark periods) and then shift to longer days
(18+ h light/d). Allow a transition period to avoid plant stress caused by the shift
to more light, for example, by using shade cloth for the first few days after the
shift, or, if using a controlled environment chamber, simply interrupt the dark period
with a 15-min light interval once every 4 h so that the plants initiate bolting.

**Do Not Overwater**
10.
: Soil should become thoroughly wetted, but excess water should be gone from the tray within a day, 
and soil should start to dry slightly prior to the next watering. Excessive watering will encourage fungus gnats.

**No Centrifugion**
11. 
: U.S. patent no. 6,353,155 B1 (Klöti, A. S. and Mulpuri, R., 2002. “Method for transforming plants”) describes floral dip transformation 
using liquid LB cultures of _Agrobacterium_ that are diluted approximately three- or fourfold in 5% sucrose/0.05% L-77, with no centrifugation to remove the LB. 
: This is particularly useful if many _Agrobacterium_ strains will be used.

**Agrobacterium**
12. 
: _Agrobacterium_ is typically grown at 28 to 30°C (growth at temperature closer to 37°C can cause Ti plasmid loss or lethality). 
: Be sure to work with a single colony purified isolate. Strains may be stored temporarily at 4°C for 1 to 3 wk as a Petri dish culture (wrapped to maintain humidity). 
: If you will be saving and reusing a strain, make a frozen permanent stock that is stored in 14% glycerol or 7% dimethyl sulfoxide at –70°C. 
: - (Example: add 0.33 mL sterile 40% glycerol to 0.67 mL of a recently saturated overnight culture grown in liquid LB, mix well, and place in freezer.) 
: Do not serially propagate a strain from plate to plate over many passages. 
: - Work with Petri dish cultures that are started fresh every few weeks from your frozen permanent stock.

13. _Agrobacterium_ grows more slowly than E. coli, usually taking more than over
night to form single colonies of significant size on a plate. Use of multiple
antibiotics may slow the growth of _Agrobacterium_ further, even though the Agro
bacterium is resistant to those antibiotics. If you want liquid cultures to be ready
the next day, use a bit more starter inoculum than you might with E. coli and
make sure that the cultures are well aerated. It is also possible to skip the over
night starter culture and inoculate a larger volume of liquid media with cells from
a plate or from a freezer stock, although the rate of culture growth may be quite
unpredictable. If only a few plants will be inoculated, a fresh lawn of bacteria
from a Petri dish can be resuspended in liquid to provide sufficient inoculum.

14. Keep in mind that the targets for inoculation are immature flower buds that will
open (reach anthesis) 4 to 10 d after the date of inoculation. These buds should
directly contact the _Agrobacterium_ solution. Although there is an “optimal” date
for inoculation, you will probably have a period of 10+ d across which inocula
tion can successfully produce transformants. Inoculate the plants only once, or if
percent efficiency is important, no more than twice, with a 7-d interval between
inoculations. To delay use of plants that are bolting before your Agrobacterium
strains are ready, young inflorescences can be clipped off to promote growth of
secondary inflorescences, providing an extra 5 to 7 d with each clipping. This can
be done a few times if needed. If you are clipping, be sure the plants remain well
fertilized and healthy.

15. How many plants do you inoculate to get 10 transformants? If you assume a
transformation rate of only 0.1%, then you will need 10,000 seeds to get
10 transformants. You can expect to harvest a few thousand seeds off of every
_Arabidopsis_ plant if the plants are well spaced and healthy. Plants grown at high
density and plants that flower rapidly (for example, owing to growth under 24 h/d
lighting) may produce only 500–1000 seeds. In our laboratory, a single pot of
nine _Arabidopsis_ plants is often dipped for each binary plasmid construct, with
all the seed from that pot harvested together into a single tube. Beginners may
want to dip three pots for each construct.

16. For high-throughput transformation projects in which many plants will be inocu
lated with only one or a few _Agrobacterium_ strains, spraying may be preferable
to dipping. Prepare bacteria + surfactant as described for dip inoculation, but
place in a small pressure sprayer or atomizer and spray this directly onto inflores
cences, targeting clusters of young unopened flower buds. An advantage of spray
ing is that fewer bacteria need to be grown; however, the sprayer can be less
convenient than simple dipping. Note that cross-contamination is possible if you
are spraying adjacent plants with more than one _Agrobacterium_ strain. Note also
that Silwet L-77 can injure corneal tissues—this is especially an issue if you wear
contact lenses.

17. Cross-fertilization (unintended outcrossing) of adjacent _Arabidopsis_ plants is
very rare (1:10,000 or less). However, cross-contamination of seed lots is likely
if plants that were inoculated with different _Agrobacterium_ strains become
tangled during subsequent growth, or if seed harvest is not carried out in a tidy
fashion with care and constant attention to avoid stray seeds. Contamination is
quite easy to accomplish; discovering and correcting a contamination event can
be very costly.

18. During seed surface-sterilization, it is convenient to remove liquids using a disposable yellow pipet tip attached to a continuous suction device (such as a Pasteur pipet-rubber tubing-liquid trap-house vacuum device). 
Use a new tip for each tube, and use additional care to avoid accidental transfer of seed between tubes.
A brief centrifugation in a clinical centrifuge may help to minimize seed loss
during decanting if necessary. Sterilize only the seed that you will plate. It is
advisable to include, as a positive control for selection, sterilized seed from a
known transformed variety. (Place a few positive control seeds onto a marked
location on a few of the selection plates.) Sterile seed should not be kept in the
0.1% agarose solution for more than 24 h.

19. Vapor-phase surface sterilization of _Arabidopsis_ seed: the following protocol
contains a convenient method for surface sterilization of plant seeds. In particular, 
the method does not require all the soaking and rinsing of liquid-phase bleach
sterilization methods. Although this protocol substantially reduces hands-on
manipulations, it does require some incubation time (a few hours to overnight).
This vapor-phase sterilization protocol was adapted from a version supplied by
Maud Hinchee and colleagues at Monsanto.
    1. Obtain a vessel for seed sterilization, typically a dessicator jar. Place in fume hood.
    1. Place seed that is to be sterilized into appropriate resealable containers (for example, microcentrifuge tubes).
    1. Place open containers of seed into a rack or stand inside the dessicator jar.
    1. Place a 250-mL beaker containing 100 mL bleach into the dessicator jar.
    1. Immediately prior to sealing the jar, carefully add 3 mL concentrated HCl to the bleach.
    1. Seal jar and allow sterilization by chlorine fumes to proceed for a period of between 3 and 16 h. The time needed will vary based on the configuration of seed and the extent to which seed is contaminated. Three to four hours is often sufficient for reasonably clean seed. Overnight is usually acceptable, although some seed killing may occur, especially if seed is not fully mature and dry.
    1. Depending on the application, open container in fume hood or in sterile laminar flow hood, seal microfuge tubes or other seed containers, and remove surface-sterilized seed for use.

> [!CAUTION]
> Chlorine gas is poisonous to humans—work with proper ventilation.

**Transplanting Success**
20.
: Is improved:
: - by using tweezers to break up the agar around the root prior to pulling on the plantlet, 
: - by using your fingers to gently remove any adhering chunks of agar from the root before planting, 
: - by using a squirt bottle to saturate the soil with water immediately after transplanting (keep the rosette leaves up above the soil), 
: - and by growing plants under a dome (for high humidity) for the first several days. 
: Larger (older) plants are often more robust for transplanting, but larger root systems can be more difficult to remove from the agar. 
: If you break up the roots severely, put the plantlet onto a new selection plate or a sucrose/MS plate for a few days to allow new root growth before transplanting.

