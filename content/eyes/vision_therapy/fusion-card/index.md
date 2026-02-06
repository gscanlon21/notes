+++
title = "Fusion Card"
description = "Image generator for an aperture rule."
aliases = ["vision-therapy/fusion-card"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/fusion-card" },
  { title = "Fusion Card", href = "https://aworkoutaday.com/exercises?Name=Fusion+Card" },
  { title = "Print Settings<br>☑ Background Graphics" },
  { title = "🄯 visiontherapy GNU AGPL v3<br>Images were copied over.", href = "https://github.com/visiontherapy/visiontherapy.github.io"},
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Swap Red and Green", id = "red-green-checkbox", type = "checkbox" },
  { name = "Gap", id = "gap-range", type = "range", min = 25, max = 250, step = 5, value = 25 },
  { name = "Image Size", id = "image-size-range", type = "range", min = 75, max = 125, value = 75 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="aperture-image-wrapper">
  <div id="aperture-image-left" class="aperture-image"></div>
  <div id="aperture-image-right" class="aperture-image"></div>
</div>
