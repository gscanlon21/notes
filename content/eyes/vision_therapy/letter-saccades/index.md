+++
title = "Letter Saccades"
description = "Letter Circles is a circle of letters used to train the visual system."
aliases = ["vision-therapy/letter-saccades"]
updated = 2026-02-01

[extra]
caution = "Always follow your vision therapist's guidance."
orientation = "screen"
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/letter-saccades" },
  { title = "Central-Peripheral ABCs", href = "https://aworkoutaday.com/exercises?Name=Central-Peripheral+ABCs" },
]
options = [
  { name = "Reset", id = "reset", type = "reset" },
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000", global = true },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000", global = true },
  { name = "Red/Green Letters", id = "red-green-checkbox", type = "checkbox" },
  { name = "Letters", id = "letters-text", type = "text", value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { name = "Font Size", id = "font-size-range", type = "range", min = 50, max = 150, value = 50 },
  { name = "Radius", id = "radius-range", type = "range", min = 125, max = 250, value = 150 },
  { name = "Circles", id = "circles-range", type = "range", min = 6, max = 20, value = 8 },
  { name = "Center Circle?", id = "center-checkbox", type = "checkbox" },
]
+++

<div id="wrapper" class="chart">
  <div id="letter-circles-inner" class="letter-circle"></div>
  <div id="letter-circles-middle" class="letter-circle"></div>
  <div id="letter-circles-outer" class="letter-circle"></div>
</div>