+++
title = "Single Target"
description = "A single letter/number/image."
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
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Target", id = "red-green-checkbox", type = "checkbox" },
  { name = "Use an Image", id = "image-checkbox", type = "checkbox" },
  { name = "Character", id = "alphanumeric-text", type = "text", value = "X" },
  { name = "Size", id = "size-range", type = "range", min = 75, max = 125 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="single-target-wrapper" class="chart">
  <div id="single-target" class="target"></div>
</div>
