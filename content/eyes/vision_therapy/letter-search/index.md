+++
title = "Letter Search"
description = "A random grid of letters."
aliases = ["vision-therapy/letter-search"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/letter-search" },
]
options = [
  { name = "Letters", id = "letters-text", type = "text", value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { name = "Red/Green Letters", id = "red-green-checkbox", type = "checkbox" },
  { name = "Density", id = "letters-range", type = "range", min = 10, max = 100 },
  { name = "Font Size", id = "font-size-range", type = "range", min = 10, max = 75 },
  { name = "Letter Gap", id = "gap-range", type = "range", min = 10, max = 50 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="letter-chart" class="chart"></div>
