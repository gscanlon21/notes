+++
title = "Color Chart"
description = "Use the decoding chart to match the arrows with their corresponding colors."
aliases = ["vision-therapy/color-chart"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/arrow-chart" },
  { title = "Color Saccades", href = "https://aworkoutaday.com/exercises?Name=Color+Saccades" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#ff0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Arrows", id = "red-green-checkbox", type = "checkbox" },
  { name = "Decoding Arrow Size", id = "key-size-select", type = "range", min = 10, max = 60, value = 40 },
  { name = "Arrow Size", id = "arrow-size-select", type = "range", min = 10, max = 60, value = 40 },
  { name = "Letter Gap", id = "letter-gap-select", type = "range", min = 1, max = 25, value = 10 },
  { name = "Rows & Columns", id = "row-col-range", type = "range", min = 2, max = 10, value = 10 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++


{% table() %}
<div id="decoding-chart" class="chart"></div>
<div id="arrow-chart" class="chart"></div>
{% end %}
