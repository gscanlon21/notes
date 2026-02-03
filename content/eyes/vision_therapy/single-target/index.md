+++
title = "Single Target"
description = "Image generator for an aperture rule."
aliases = ["vision-therapy/single-target"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/single-target" },
  { title = "Print Settings<br>☑ Background Graphics" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color" },
  { name = "Green Color", id = "green-color", type = "color" },
  { name = "Red/Green Images", id = "red-green-checkbox", type = "checkbox" },
  { name = "Gap", id = "gap-range", type = "range", min = 25, max = 250, step = 5 },
  { name = "Image Size", id = "image-size-range", type = "range", min = 75, max = 125 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

# TODO

<div id="aperture-image-wrapper">
  <div id="aperture-image-left" class="aperture-image"></div>
  <div id="aperture-image-right" class="aperture-image"></div>
</div>
