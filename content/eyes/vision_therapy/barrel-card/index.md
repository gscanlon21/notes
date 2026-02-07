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
  { title = "Print Settings<br>☑ Background Graphics<br>Print both red & green sides." },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red or Green", id = "red-green-checkbox", type = "checkbox" },
  { name = "Gap", id = "gap-range", type = "range", min = 25, max = 250, step = 5 },
  { name = "Size", id = "size-range", type = "range", min = 25, max = 100 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="barrel-card" class="chart">
  <div class="barrel small"></div>
  <div class="barrel medium"></div>
  <div class="barrel large"></div>
</div>
