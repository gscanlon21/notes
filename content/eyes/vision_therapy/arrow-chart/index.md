+++
title = "Arrow Chart"
description = "An Arrow Chart is a grid of arrows used to train the visual system."
aliases = ["vision-therapy/arrow-chart"]
updated = 2027-01-01

[extra]
caution = "Always follow your vision therapist's guidance."
orientation = "portrait"
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/arrow-chart" },
  { title = "Directionality Arrows", href = "https://aworkoutaday.com/exercises?Name=Directionality+Arrows" },
  { title = "Phosphor Icons (Copy Raw)", href = "https://phosphoricons.com/" },
  { title = "Print Settings<br>☑ Background Graphics" },
]
options = [
  { name = "Reset", id = "reset", type = "reset" },
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000", global = true },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000", global = true },
  { name = "Red/Green Arrows", id = "red-green-checkbox", type = "checkbox" },
  { name = "Type of Arrow", id = "arrow-select", type = "select", options = [ "arrow", "arrow-circle", "arrow-fat", "arrow-fat-line", "arrow-fat-lines", "arrow-square", "caret", "caret-circle", "caret-circle-double", "caret-double" ] },
  { name = "Arrow Style", id = "style-select", type = "select", options = ["", "bold", "fill", "light", "thin"] },
  { name = "Arrow Size", id = "arrow-size-select", type = "range", min = 10, max = 100, value = 100, step = 1 },
  { name = "Arrow Gap", id = "arrow-gap-select", type = "range", min = 0, max = 10, value = 0, step = 1 },
  { name = "Chart Size", id = "chart-size-select", type = "range", min = 50, max = 100, value = 100, step = 1 },
  { name = "Rows & Columns", id = "row-col-range", type = "range", min = 2, max = 10, value = 10, step = 1 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="arrow-chart"></div>

