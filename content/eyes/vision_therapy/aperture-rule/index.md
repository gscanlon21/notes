+++
title = "Aperture Rule"
description = "Image generator for an aperture rule."
aliases = ["vision-therapy/aperture-rule"]
updated = 2026-02-01

[extra]
caution = "Always follow your vision therapist's guidance."
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/aperture-rule" },
  { title = "Aperture Rule Trainer", href = "https://aworkoutaday.com/exercises?Name=Aperture+Rule+Trainer" },
  { title = "Print Settings<br>Orientation: Landscape<br>☑ Background Graphics" },
  { title = "🄯 visiontherapy GNU AGPL v3<br>Images were copied over.", href = "https://github.com/visiontherapy/visiontherapy.github.io"},
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Images", id = "red-green-checkbox", type = "checkbox" },
  { name = "Gap", id = "gap-range", type = "range", min = 25, max = 500, step = 5, value = 100 },
  { name = "Image Size", id = "image-size-range", type = "range", min = 75, max = 125, value = 75 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="chart" class="chart">
  <div id="left-eye" class="image left"></div>
  <div id="right-eye" class="image right"></div>
</div>
