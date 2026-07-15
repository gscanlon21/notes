+++
title = "Arrow Color Chart"
description = "Use the decoding chart to match the arrows with their corresponding colors."
aliases = ["vision-therapy/color-chart", "vision-therapy/arrow-color-chart"]
updated = 2026-02-01

[extra]
caution = "Always follow your vision therapist's guidance."
orientation = "portrait"
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/arrow-chart" },
  { title = "Color Saccades", href = "https://aworkoutaday.com/exercises?Name=Color+Saccades" },
]
options = [
  { name = "Reset", id = "reset", type = "reset" },
  { name = "Color Hint", id = "red-green-checkbox", type = "checkbox", checked = true },
  { name = "Color Bottom Chart", id = "bottom-color-checkbox", type = "checkbox", checked = false },
  { name = "Type of Arrow", id = "arrow-select", type = "select", options = ["arrow", "arrow-circle", "arrow-fat", "arrow-fat-line", "arrow-fat-lines", "arrow-square", "caret", "caret-circle", "caret-circle-double", "caret-double"] },
  { name = "Arrow Style", id = "style-select", type = "select", options = ["", "bold", "fill", "light", "thin"] },
  { name = "Decoding Arrow Size", id = "key-size-select", type = "range", min = 20, max = 100, value = 50 },
  { name = "Arrow Size", id = "arrow-size-select", type = "range", min = 10, max = 100, value = 50 },
  { name = "Arrow Gap", id = "arrow-gap-select", type = "range", min = 0, max = 25, value = 10 },
  { name = "Rows & Columns", id = "row-col-range", type = "range", min = 2, max = 10, value = 10 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
alerts = [
  { type = "note", content = "Work in progress." }, 
]
+++

<div id="decoding-chart" class="chart"></div>
<div id="arrow-chart" class="chart"></div>
