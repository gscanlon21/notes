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
  { title = "Central-Peripheral Numbers", href = "https://aworkoutaday.com/exercises?Name=Central-Peripheral+Numbers" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color" },
  { name = "Green Color", id = "green-color", type = "color" },
  { name = "Red/Green Numbers", id = "red-green-checkbox", type = "checkbox" },
  { name = "Font Size", id = "font-size-select", type = "range", min = 50, max = 150, value = 75 },
  { name = "Circles", id = "circles-select", type = "range", min = 6, max = 24, value = 8 },
  { name = "Radius", id = "radius-select", type = "range", min = 225, max = 450, value = 250 },
  { name = "Center Circle", id = "center-select", type = "checkbox" },
  { name = "Start at 1", id = "start-checkbox", type = "checkbox" },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

{% table() %}
<div id="number-circle" class="chart"></div>
{% end %}
