+++
title = "Spot the Match"
description = "Find the matching image among the two sets."
aliases = ["a-workout-a-day/spot-the-match"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "This Page", href = "/a-workout-a-day/spot-the-match" },
]
options = [
  { name = "Image Size", id = "image-size-select", type = "range", min = 75, max = "150" },
  { name = "Letter Gap", id = "letter-gap-select", type = "range", min = 1, max = "10" },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="spot-the-match-wrapper">
  <div id="spot-the-match-left" class="spot-the-match"></div>
  <div id="spot-the-match-right" class="spot-the-match"></div>
</div>
