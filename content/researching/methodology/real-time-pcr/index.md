+++
title = "Real-Time PCR"
aliases = ["qPCR"]
sort_by = "title"

[extra]
key_words = ["qPCR"]
updated = 2026-06-01
subtitle = "qPCR"
see_also = []
+++

{{ hidden() }}



# Terminology

**qPCR**
Real-Time PCR
: A quantitative method of PCR that cycles DNA until a set threshold is reached for detection of your DNA product.
: - The threshold line is the point or level of detection at which a reaction reaches a fluorescent intensity above background levels.

**C<sub>q</sub> Values**
Quantification Cycle
: The threshold line is the point or level of detection at which a reaction reaches a fluorescent intensity above background levels. Before you conduct PCR, the software in your cycler will set a threshold level. 
: - This is literally a line in your graph that represents a level above background fluorescence, that also intersects your reaction curve somewhere at the beginning of its exponential phase.
: The Cq value is the PCR cycle number at which your sample’s reaction curve intersects this threshold line. This value tells how many cycles it took to detect a real signal from your samples.
: Cq values are inverse to the amount of target nucleic acid that is in your sample, and correlate to the number of target copies in your sample. 
: - Lower Cq values (typically below 28 cycles) indicate high amounts of the target sequence. 
: - Higher Cq values (above 38 cycles) mean lower amounts of your target nucleic acid. 
    - However, high Cq values may also indicate some problems with the target or the PCR set-up.

**C<sub>t</sub> Values**
Threshold Cycle
: There is no difference between C<sub>t</sub> and C<sub>q</sub> value, though C<sub>q</sub> is preferred. 

**Threshold Line**
: Generally, the fluorescence threshold is set within the exponential phase of PCR amplification and corresponds to 10 times the standard deviation of fluorescence signals during the initial 3–15 cycles of PCR.
: For consistency and comparability of experimental data, it is recommended to use the same threshold setting within the same experiment and maintain consistent settings across different batches whenever possible.


# Methodology

**Analysis of Relative Gene Expression Data using Real-Time Quantitative PCR**
Livak et al. 2002 
_[Methodology](/doi/10.1006/meth.2001.1262.pdf)_ 
: ???

