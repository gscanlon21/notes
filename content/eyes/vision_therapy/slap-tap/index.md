+++
title = "Slap Tap"
description = "Slap Tap is a grid of symbols used to train the visual system."
aliases = ["vision-therapy/slap-tap"]
updated = 2026-02-01

[extra]
caution = "Always follow your vision therapist's guidance."
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/slap-tap" },
  { title = "Slap Tap", href = "https://aworkoutaday.com/exercises?Name=Slap+Tap" },
  { title = "Phosphor Icons (Copy Raw)", href = "https://phosphoricons.com/" },
  { title = "Print Settings<br>☑ Background Graphics" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Red/Green Symbols", id = "red-green-checkbox", type = "checkbox" },
  { name = "Alternate Symbols", id = "alternate-checkbox", type = "checkbox" },
  { name = "Difficulty", id = "difficulty-range", type = "range", min = 1, max = 4, value = 1 },
  { name = "Font Size", id = "font-size-select", type = "range", min = 25, max = 50, value = 25 },
  { name = "Letter Gap", id = "letter-gap-select", type = "range", min = 25, max = 50, value = 25 },
  { name = "Rows & Columns", id = "row-col-range", type = "range", min = 2, max = 10, value = 10 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

{% table() %}
<div id="slap-tap" class="chart"></div>
{% end %}
