+++
title = "Water Quality"
description = ""

[extra]
updated = 2026-06-01
site_version = 1
toc_level = 2
see_also = [
  { title = "Apera Instruments", href = "https://aperainst.com/" },
  { title = "Hanna Instruments", href = "https://hannainst.com/" },
  { title = "Bluelab Instruments", href = "https://bluelab.com/" },
  { title = "Hydro Buddy", href = "https://scienceinhydroponics.com/2016/03/the-first-free-hydroponic-nutrient-calculator-program-o.html" },
  { title = "MU Hydroponic Nutrient Solutions", href = "mu-hydroponic-nutrient-solutions.pdf" },
  { title = "Electrical Conductivity & pH Guide", file = "一electrical-conductivity-and-ph-guide-for-hydroponics.pdf" },
  { title = "Useful Home Hydroponics Excel Sheets", file = "Useful-Home-Hydroponics-Excel-Sheets.xlsx" },
  { title = "Hydroponic Nutrient Solution Calculator", file = "hydroponic-nutrient-solution-calculator.xlsx" },
  { title = "Fertilizer Calculation Basics for Hydroponics", file = "Fertilizer-Calculation-Basics-for-Hydroponics.pdf" },
]
+++

{{ hidden() }}

> [!IMPORTANT]
> The pH of the hydroponics reservoir should be between 5.5 and 6.5.
>> Optimum Water pH

> [!TIP]
> Don't add the pH adjusting solution straight to the reservoir or you may shock the plant roots.
>
> Add it to a gallon jug and let dilute for 5 minutes before slowing pouring the solution into your reservoir.
>> Adjusting pH Levels


{{ image(title="Nutrient Availability", file="nutrient-availability.webp") }}


{% table(header="Nutrient Availability", footer="[Science in Hydroponics](https://scienceinhydroponics.com/2025/10/ph-vs-nutrient-availability-rethinking-the-classic-charts.html)") %}
| Nutrient | Broad Availability Range | Notes / Reason |
|----------|--------------------------|----------------|
| **NO₃⁻-N** | 4.0 to 8.5 | Soluble across all relevant pH; uptake independent of pH in hydroponic solution. Old charts confused microbial nitrification with solubility. |
| **NH₄⁺-N** | Best <6.5; declines >7.0 | At higher pH, conversion to unionized NH₃ increases, which is less available and potentially toxic. |
| **Phosphorus (P)** | Peak 5.5 to 6.5; drops <5.2 and >7.0 | Solubility falls at high pH due to Ca+P precipitation (starting ~6.2); also limited at low pH by fixation and speciation. |
| **Potassium (K)** | 4.0 to 8.5 | Monovalent cation, highly soluble, minimal precipitation issues (sometimes K containing silicates at higher pH values) |
| **Calcium (Ca)** | Stable <6.0; declining >6.2 | Precipitates with phosphate and carbonate as pH rises; availability falls gradually above ~6.2. |
| **Magnesium (Mg)** | Stable <6.5; mild decline >7.0 | Mg+P precipitation is less aggressive than Ca+P; solubility loss is slower but still possible at higher pH. |
| **Sulfate (SO₄²⁻)** | Broad 4.5 to 8.0 | Generally soluble. At very low pH, some soils can adsorb sulfate due to protonated variable charge surfaces, reducing availability. At very high pH, reduced root uptake efficiency and competition with other anions can occur; in concentrated Ca²⁺ + SO₄²⁻ systems gypsum may precipitate by saturation. |
| **Iron (Fe, unchelated)** | Max <5.5; falls sharply >6.0 | Fe³⁺ hydrolyzes and precipitates as hydroxides and oxides above ~pH 6; nearly unavailable by pH 7. |
| **Manganese (Mn, unchelated)** | Best <6.0; declining >6.3 | Mn²⁺ oxidizes and precipitates above neutral pH. |
| **Zinc (Zn, unchelated)** | Best <6.0; low >7.0 | Zn²⁺ solubility decreases with increasing pH; precipitates as hydroxide/carbonate. |
| **Copper (Cu, unchelated)** | Best <6.0; poor >7.0 | Cu²⁺ strongly hydrolyzes, falls out of solution quickly with rising pH. |
| **Boron (B)** | Best 5.5 to 6.8 | Boric acid is readily available in this range; at higher pH, more borate forms, reducing uptake. |
| **Molybdenum (Mo)** | Improves >6.0 | Molybdate solubility increases with pH; plants often deficient in acidic conditions, more available at neutral/alkaline pH. |
{% end %}



{% table(header="Acceptable values for common nutrients found in water.", footer="[Electrical Conductivity & pH Guide](一electrical-conductivity-and-ph-guide-for-hydroponics.pdf)") %}
| Nutrients              | Acceptable value (ppm) |
|------------------------|------------------------|
| Sodium                 | <50                    |
| Calcium                | <150                   |
| Magnesium bicarbonate  | <50                    |
| Chloride               | <140                   |
| Sulfate                | <100                   |
{% end %}

