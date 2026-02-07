+++
title = "Barrel Card"
description = "Image generator for a barrel card."
aliases = ["vision-therapy/barrel-card"]
updated = 2026-02-01

[extra]
caution = "Always follow your vision therapist's guidance."
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/barrel-card" },
  { title = "Barrel Card", href = "https://aworkoutaday.com/exercises?Name=Barrel+Card" },
  { title = "Print Settings<br>Margins: None<br>☑ Background Graphics<br>Fold in half after printing." },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Swap Red and Green", id = "red-green-checkbox", type = "checkbox" },
  { name = "Gap", id = "gap-range", type = "range", min = 25, max = 250, step = 5 },
  { name = "Size", id = "size-range", type = "range", min = 25, max = 100 },
]
+++

<div id="chart" class="chart">
  <div class="stack-of-barrels">
    <div class="barrel left small"></div>
    <div class="barrel left medium"></div>
    <div class="barrel left large"></div>
  </div>

  <div class="stack-of-barrels">
    <div class="barrel right small"></div>
    <div class="barrel right medium"></div>
    <div class="barrel right large"></div>
  </div>
</div>
