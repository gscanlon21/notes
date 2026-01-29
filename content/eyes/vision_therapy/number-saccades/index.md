+++
title = "Number Saccades"
description = "A Number Circle is a circle of numbers used to train the visual system."
aliases = ["vision-therapy/number-saccades"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/number-saccades" },
]
options = [
  { name = "Red/Green Numbers", id = "red-green-checkbox", type = "checkbox" },
  { name = "Font Size", id = "font-size-select", type = "range", min = 50, max = "150" },
  { name = "Circles", id = "circles-select", type = "range", min = 6, max = "24" },
  { name = "Radius", id = "radius-select", type = "range", min = 225, max = "450" },
  { name = "Center Circle?", id = "center-select", type = "checkbox" },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

{% table() %}
<div id="number-circle" class="chart"></div>
{% end %}
