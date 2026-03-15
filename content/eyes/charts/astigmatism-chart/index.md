+++
title = "Astigmatism Chart"
description = "Helps identify blurred or distorted vision caused by irregular curvature of the cornea or lens."
aliases = ["eye-charts/astigmatism-chart"]
updated = 2026-04-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/eye-charts/astigmatism-chart" },
]
options = [
  { name = "Lines", id = "line-range", type = "range", min = 10, max = 30, value = 20 },
  { name = "Radius", id = "radius-range", type = "range", min = 100, max = 250, value = 200, step = 5 },
  { name = "Center Radius", id = "center-radius-range", type = "range", min = 0, max = 50, value = 50, step = 50 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="chart" class="chart defer"></div>
