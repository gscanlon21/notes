+++
title = "Line Counting"
description = "Line Counting is a grid of lines used to train the visual system."
aliases = ["vision-therapy/line-counting"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/line-counting" },
  { title = "Line Counting", href = "https://aworkoutaday.com/exercises?Name=Line+Counting" },
]
options = [
  { name = "Red/Green Lines", id = "red-green-checkbox", type = "checkbox" },
  { name = "Line Height", id = "height-range", type = "range", min = 25, max = 250 },
  { name = "Line Gap", id = "gap-range", type = "range", min = 1, max = "10" },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

{% table() %}
<div id="line-counting"></div>
{% end %}
