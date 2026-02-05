+++
title = "Letter Saccades"
description = "Letter Circles is a circle of letters used to train the visual system."
aliases = ["vision-therapy/letter-saccades"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/letter-saccades" },
  { title = "Central-Peripheral ABCs", href = "https://aworkoutaday.com/exercises?Name=Central-Peripheral+ABCs" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#ff0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Letters", id = "red-green-checkbox", type = "checkbox" },
  { name = "Letters", id = "letters-text", type = "text", value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { name = "Font Size", id = "font-size-range", type = "range", min = 50, max = "150" },
  { name = "Circles", id = "circles-range", type = "range", min = 6, max = "24" },
  { name = "Radius", id = "radius-range", type = "range", min = 225, max = "450" },
  { name = "Center Circle?", id = "center-checkbox", type = "checkbox" },
]
+++

<div id="wrapper" class="chart">
  <div id="letter-circles-inner" class="letter-circle"></div>
  <div id="letter-circles-middle" class="letter-circle"></div>
  <div id="letter-circles-outer" class="letter-circle"></div>
</div>