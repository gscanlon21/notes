+++
title = "Most Probable Number Determination from Serial Dilutions"
description = ""
weight = 37

[extra]
authors = ["Robert Blodgett"]
updated = 2026-06-01
site_version = 1
toc_level = 2
see_also = [
  { title = "Appendix 2", href = "https://www.fda.gov/food/laboratory-methods-food/bam-appendix-2-most-probable-number-serial-dilutions" },
]
+++

{{ hidden() }}


## Introduction 
>> Serial dilution tests measure the concentration of a target microbe in a sample with an estimate 
called the most probable number (MPN). The MPN is particularly useful for low concentrations 
of organisms (<100/g), especially in milk and water, and for those foods whose particulate 
matter may interfere with accurate colony counts. The following background observations are 
adapted and extended from the article on MPN by James T. Peeler and Foster D. McClure in 
the Bacteriological Analytical Manual (BAM), 7th edition. 

>> Only viable organisms are enumerated by the MPN determination. If, in the microbiologist's 
experience, the bacteria in the prepared sample in question can be found attached in chains 
that are not separated by the preparation and dilution, the MPN should be judged as an 
estimate of growth units (GUs) or colony-forming units (CFUs) instead of individual bacteria. For 
simplicity, however, this appendix will speak of these GUs or CFUs as individual bacteria. If a 
confirmation test involves selecting colonies to test, then a statistical adjustment not discussed 
in this appendix should be used (see Blodgett 2005a.) 

>> The following assumptions are necessary to support the MPN method. The bacteria are 
distributed randomly within the sample. The bacteria are separate, not clustered together, and 
they do not repel each other. Every tube (or plate, etc.) whose inoculum contains even one 
viable organism will produce detectable growth or change. The individual tubes of the sample 
are independent. 

>> The essence of the MPN method is to dilute the sample to such a degree that inocula in the 
tubes will sometimes but not always contain viable organisms. The "outcome", i.e., the number 
of tubes and the number of tubes with growth at each dilution, will imply an estimate of the 
original, undiluted concentration of bacteria in the sample. In order to obtain estimates over a 
broad range of possible concentrations, microbiologists use serial dilutions incubating tubes at 
several dilutions. 

>> The MPN is the number which makes the observed outcome most probable. It is the solution 
for λ, concentration, in the following equation 
where exp(x) means ex, and 
K denotes the number of dilutions, 
gj denotes the number of positive (or growth) tubes in the jth dilution, 
mj denotes the amount of the original sample put in each tube in the jth dilution, 
tj denotes the number of tubes in the jth dilution. 

>> In general, this equation can be solved by iteration. 

>> McCrady (1915) published the first accurate estimation of the number of viable bacteria by the 
MPN method. Halvorson and Ziegler (1933), Eisenhart and Wilson (1943), and Cochran (1950) 
published articles on the statistical foundations of the MPN. Woodward (1957) recommended 
that MPN tables should omit those combinations of positive tubes (high for low concentrations 
and low for high concentrations) that are so improbable that they raise concerns about 
laboratory error or contamination. De Man (1983) published a confidence interval method that 
was modified to make the tables for this appendix. 


## Confidence Intervals 
>> The 95 percent confidence intervals in the tables have the following meaning:  

>> Before the tubes are inoculated, the chance is at least 95 percent that the confidence interval 
associated with the eventual result will enclose the actual concentration. 

>> It is possible to construct many different sets of intervals that satisfy this criterion. This manual 
uses a modification of the method of de Man (1983). De Man calculated his confidence limits 
iteratively from the smallest concentrations upward. Because this manual emphasizes 
pathogens, the intervals have been shifted slightly upward by iterating from the largest 
concentrations downward. 
>> The confidence intervals of the spreadsheet and the tables associated with this appendix may 
be different.  The MPN Excel spreadsheet uses a normal approximation to the log (MPN) to 
calculate its confidence intervals.  This approximation is similar to a normal approximation 
discussed in Haldane (1939).  This approximation is less computationally intense so more 
appropriate for a spreadsheet than de Man's confidence intervals. 


## Precision, Bias, and Extreme Outcomes  
>> The MPNs and confidence limits have been expressed to 2 significant digits. For example, the 
entry "400" has been rounded from a number between 395 and 405. 

>> Numerous articles have noted a bias toward over-estimation of microbial concentrations by the 
MPN. Garthright (1993) has shown, however, that there is no appreciable bias when the 
concentrations are expressed as logarithms, the customary units used for regressions and for 
combining outcomes. Therefore, these MPNs have not been adjusted for bias. 

>> The outcome with all positive tubes in each dilution gives no upper bound on the concentration. 
The tables in this appendix list the MPN for this outcome as greater than the highest MPN for an 
outcome with at least one negative tube. Similarly, the outcome with all negative tubes is listed 
as less than the lowest MPN for an outcome with at least one positive tube

## Cautionary Notes  
##### Improbable Outcomes 
>> Several potential problems may cause improbable outcomes. For example, there may be 
interference at low dilutions or selecting too few colonies at low dilutions for a confirmation test 
may overlook the target microbe. If the problem is believed limited to the low dilutions, then 
using only the high dilutions with positive tubes might be more reliable. If the cause of the 
problem is unknown, then the estimate may be unreliable. 

>> When excluding improbable outcomes, de Man's (1983) preferred degree of improbability was 
adopted. The outcomes included are among the 99.985 percent most likely outcomes if their 
own MPNs were the actual bacterial concentrations. Therefore, among 10 different outcomes, 
all will be found in these tables at least 99 percent of the time. 

##### Inconclusive Tubes 
>> In special cases where tubes cannot be judged either positive or negative (e.g., plates 
overgrown by competing microflora at low dilutions), these tubes should be excluded from the 
outcome. The resulting outcome may have different numbers of tubes than any of the tables in 
this appendix. Its MPN can be solved by computer algorithms or estimated by Thomas's Rule 
below. Haldane's method can find the confidence limits as described below Thomas's rule.


## Using Tables  
##### Selecting Three Dilutions for Table Reference  
>> An MPN can be computed for any positive number of tubes at any positive number of dilutions, 
but often serial dilutions use three or more dilutions and a decimal series (Each dilution has one 
tenth as much of the original sample as the previous dilution.) The tables in this appendix 
require reducing an outcome to three of its decimal dilutions. This procedure for selecting three 
dilutions was developed for the designs (numbers of tubes per dilution and ratio of dilutions) in 
these tables. They all have decimal dilutions and a fairly small number of tubes per dilution. For 
other designs, other procedures may be needed. When the MPN model holds, the three decimal 
dilutions are chosen to give a good approximation to the MPN of the entire outcome. Otherwise, 
the reduction may remove interference (possible from another species of microbe or a toxic 
substance) that can be diluted out. The remainder of this section tells how to select the three 
dilutions. 

>> For serial dilution experiments with more than three dilutions, attached is a dilution selector 
tool which selects the three dilutions which give a good approximation to the MPN. 

>> First, remove the highest dilution (smallest sample volume) if it and the next lower dilution have 
all negative tubes. As long as this condition holds and at least four dilutions remain, continue 
removing these dilutions. 

>> Next, if only three dilutions remain, use them as illustrated in example A. In each example there 
are five tubes in each dilution. In example A, removing the two highest dilutions (0.001 and 0.01 
grams) leaves three dilutions. 

>> If more than three dilutions remain, then find the highest dilution with all positive tubes. There 
are three cases. In the first case, the highest dilution with all positive tubes is within the three 
highest remaining dilutions. Then use the three highest remaining dilutions. In example B, the 
first step removes the highest dilution (0.001 grams.) Since the highest dilution with all positive 
tubes (1 gram) is within the three highest remaining dilutions, (1, 0.1, and 0.01 grams,) use 
them. In example C, the highest dilution with all positive tubes (0.01 g) is within the three 
highest remaining dilutions (0.1, 0.01, and 0.001.) 

>> In the second case, the highest dilution with all positive tubes is not within the three highest 
remaining dilutions. Then select the next two higher dilutions than the highest dilution with all 
positive tubes. Assign the sum of the positive tubes of any still higher dilutions to the third higher 
dilution. In example D, the highest dilution with all positive tubes has 1 gram. Select the two 
dilutions immediately higher which have 0.1 and 0.01 grams. There is only one higher dilution 
whose positive tubes are assigned to form the third dilution with 0.001 grams. 

>> In the third case, there is no dilution with all positive tubes. Then select the two lowest dilutions. 
Assign the sum of the positive tubes of any higher dilutions to the third dilution. In example E no 
dilution has all positive tubes. The two lowest dilutions have 10 and 1 grams. The sum of the 
positive in the dilutions with 0.1, 0.01 and 0.001 grams is assigned to form the third dilution with 
0.1 grams. 

>> If the three dilutions selected are not in the tables, then something in the serial dilution probably 
was unusual. This is a warning that the outcome is sufficiently improbable that the basic 
assumptions of the MPN may be questionable. If possible, redoing the test may be the most 
reliable procedure. If an MPN value is still desired, use the three highest remaining dilutions. In 
example F, the three highest dilutions are used. If these dilutions are not in the tables, then use 
the highest dilution with any positive tubes. The section entitled 'MPN for a single dilution with 
any positive tubes' shows how to calculate the MPN. 
##### Table of Examples
TODO

## Conversion of Table Units 
>> The tables below apply to inocula of 0.1, 0.01, and 0.001 g. When different inocula are selected 
for table reference, multiply the MPN/g and confidence limits by whatever multiplier makes the 
inocula match the table inocula. For example, if the inocula were 0.01, 0.001, and 0.0001 with 
three tubes per dilution, multiplying by 10 would make these inocula match the table inocula. If 
the outcome were (3, 1, 0), multiply the Table 1 MPN/g estimate, 43/g, by 10 to arrive at 430/g. 


## Bounds and Approximations for a Design without a Table 
?


## MPN for a Single Dilution with any Positive Tubes 
?


## Special Requirements and Tables Included 
>> The attached spreadsheet should be able to handle most specialized designs. Garthright and 
Blodgett (2003) discusses this spreadsheet. Requests for special computations and different 
designs will be honored as resources permit. Designs may be requested with more or less than 
3 dilutions, uneven numbers of tubes, different confidence levels, etc. (Telephone 301-436
1836 or write the Division of Mathematics, FDA/CFSAN, 5100 Paint Branch Parkway, HFS-205 
Rm 2D-011, College Park, MD 20740) The most-published designs, three 10-fold dilutions with 
3, 5, 8, or 10 tubes at each dilution, are presented here. 

>> Click on the link https://mpncalc.galaxytrakr.org/External Link Disclaimer to automatically 
calculate the MPN point estimate and confidence intervals of varying levels (80%, 90%, 95% or 
99%). The confidence interval method implemented in this application uses the large sample 
theory approach of Jarvis et al. (2010), with a slight modification for all-positive or all-negative 
cases Ferguson and Ihrie (2018) and differs from the BAM Tables confidence intervals which 
use the de Man method. The web application also computes the rarity index, Jarvis et al. (2010) 
and Blodgett RJ (2002), an assessment of how likely the observed experimental outcome is.


## Tables
> [!NOTE]
> Download an Excel spreadsheet to calculate values ([zip file](一BAM-MPN.xls)). 
>> Excel Spreadsheet to Calculate Values 

##### Table 1: For 3 tubes each at 0.1, 0.01, and 0.001 g inocula, the MPNs per gram and 95 percent confidence intervals. 
TODO

##### Table 2: For 5 tubes each at 0.1, 0.01, and 0.001 g inocula, the MPNs and 95 percent confidence intervals. 
TODO

##### Table 3: For 10 tubes at each of 0.1, 0.01, and 0.001 g inocula, the MPNs and 95 percent confidence intervals.
TODO

##### Table 4: For 8 tubes at each of 0.1, 0.01, and 0.001 g inocula, the MPNs and 95 percent confidence intervals. 
TODO

##### Table 5: For 10 tubes at 10 ml inocula, the MPN per 100 ml and 95 percent confidence intervals. 
TODO


## Note on Spreadsheet and Tables 
>> The confidence intervals of the spreadsheet and the tables associated with this appendix may 
be different. The MPN Excel spreadsheet uses a normal approximation to the log (MPN) to 
calculate its confidence intervals. This approximation is similar to a normal approximation 
discussed in Haldane (1939). This approximation is less computationally intense so more 
appropriate for a spreadsheet than de Man's confidence intervals.

