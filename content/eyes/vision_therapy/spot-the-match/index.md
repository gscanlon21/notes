+++
title = "Spot the Match"
description = "Find the matching image among the two sets."
aliases = ["vision-therapy/spot-the-match"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/spot-the-match" },
  { title = "Spot the Match", href = "https://aworkoutaday.com/exercises?Name=Spot+the+Match" },
  { title = "Print Settings<br>☑ Background Graphics" },
  { title = "🄯 visiontherapy GNU AGPL v3<br>Same layout and images.<br>More options added.", href = "https://github.com/visiontherapy/visiontherapy.github.io"},
]
options = [
  { name = "Red Color", id = "red-color", type = "color" },
  { name = "Green Color", id = "green-color", type = "color" },
  { name = "Red/Green Images", id = "red-green-checkbox", type = "checkbox" },
  { name = "Gap", id = "gap-range", type = "range", min = 25, max = 250, step = 5 },
  { name = "Image Gap", id = "image-gap-range", type = "range", min = 10, max = 25 },
  { name = "Image Size", id = "image-size-range", type = "range", min = 75, max = 125 },
  { name = "Randomness", id = "randomness-range", type = "range", min = 0, max = 50 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="spot-the-match-wrapper">
  <div id="spot-the-match-left" class="spot-the-match"></div>
  <div id="spot-the-match-right" class="spot-the-match"></div>
</div>
