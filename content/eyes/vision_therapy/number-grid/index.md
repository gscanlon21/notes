+++
title = "Number Grid"
description = "An Arrow Chart is a grid of arrows used to train the visual system."
aliases = ["vision-therapy/number-grid"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/number-grid" },
  { title = "Sherman Numbers", href = "https://aworkoutaday.com/exercises?Name=Sherman+Numbers" },
]
options = [
  { name = "Red Color", id = "red-color", type = "color" },
  { name = "Green Color", id = "green-color", type = "color" },
  { name = "Red/Green Numbers", id = "red-green-checkbox", type = "checkbox" },
  { name = "Font Size", id = "font-size-select", type = "range", min = 10, max = "60" },
  { name = "Letter Gap", id = "letter-gap-select", type = "range", min = 1, max = "10" },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

{% table(class="chart") %}
<div id="arrow-chart"></div>
{% end %}
