+++
title = "Contrast Sensitively Chart"
description = "Gauges a person’s ability to perceive low visual contrasts."
aliases = ["eye-charts/contrast-sensitivity"]
updated = 2026-04-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/eye-charts/contrast-sensitivity" },
  { title = "CS User Manual", file = "Mars-CS-Test-User-Manual-rev-20240719.pdf" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Letters", id = "red-green-checkbox", type = "checkbox" },
  { name = "Start Grid Reference at 1", id = "start-checkbox", type = "checkbox" },
  { name = "Grid Reference Numbers", id = "grid-reference-checkbox", type = "checkbox" },
  { name = "Letters", id = "letters-text", type = "text", value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { name = "Font Size", id = "font-size-select", type = "range", min = 10, max = 60, value = 40 },
  { name = "Letter Gap", id = "letter-gap-select", type = "range", min = 0, max = 10, value = 10 },
  { name = "Rows & Columns", id = "row-col-range", type = "range", min = 2, max = 10, value = 10 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="hart-chart" class="chart defer"></div>
