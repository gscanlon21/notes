+++
title = "Hart Chart"
description = "A Hart Chart is a grid of letters used to train the visual system."
aliases = ["vision-therapy/hart-chart"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/hart-chart" },
  { title = "Hart Chart", href = "https://aworkoutaday.com/exercises?Name=Hart+Chart" },
  { title = "Military Saccades", href = "https://aworkoutaday.com/exercises?Name=Military+Saccades" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color" },
  { name = "Green Color", id = "green-color", type = "color" },
  { name = "Red/Green Letters", id = "red-green-checkbox", type = "checkbox" },
  { name = "Start Grid Reference at 1", id = "start-checkbox", type = "checkbox" },
  { name = "Grid Reference Numbers", id = "grid-reference-checkbox", type = "checkbox" },
  { name = "Letters", id = "letters-text", type = "text", value = "ABCDEFGHJKLMNOPQRSTUVWXYZ" },
  { name = "Font Size", id = "font-size-select", type = "range", min = 10, max = "60" },
  { name = "Letter Gap", id = "letter-gap-select", type = "range", min = 1, max = "10" },
  { name = "Rows & Columns", id = "row-col-range", type = "range", min = 2, max = "10" },
]
+++

{% table() %}
<div id="hart-chart" class="chart"></div>
{% end %}

