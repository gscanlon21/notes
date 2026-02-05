+++
title = "Closed/Open/Flat"
description = "A grid of shapes used to train the visual system."
aliases = ["vision-therapy/closed-open-flat"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/closed-open-flat" },
  { title = "Closed/Open/Flat", href = "https://aworkoutaday.com/exercises?Name=Closed%2FOpen%2FFlat" },
  { title = "Print Settings<br>☑ Background Graphics" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#ff0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Shapes", id = "red-green-checkbox", type = "checkbox" },
  { name = "Size", id = "size-range", type = "range", min = 10, max = 75, value = 50 },
  { name = "Gap", id = "gap-range", type = "range", min = 0, max = 50, step = 5, value = 25 },
  { name = "Rows & Columns", id = "row-col-range", type = "range", min = 2, max = 10, value = 10 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

{% table() %}
<div id="chart"></div>
{% end %}
