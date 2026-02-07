+++
title = "Number Search"
description = "An Arrow Chart is a grid of arrows used to train the visual system."
aliases = ["vision-therapy/number-search"]
updated = 2026-02-01

[extra]
caution = "Always follow your vision therapist's guidance."
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/letter-search" },
  { title = "Central-Peripheral Scattered Numbers", href = "https://aworkoutaday.com/exercises?Name=Central-Peripheral+Scattered+Numbers" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Numbers", id = "red-green-checkbox", type = "checkbox" },
  { name = "Density", id = "numbers-range", type = "range", min = 10, max = 100, value = 50 },
  { name = "Font Size", id = "font-size-range", type = "range", min = 10, max = 75, value = 37 },
  { name = "Number Gap", id = "gap-range", type = "range", min = 10, max = 50, value = 25 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="number-chart" class="chart"></div>
