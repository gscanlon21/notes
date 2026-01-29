+++
title = "Tranaglyph"
description = "Stereo circles help train fusion, stereopsis, and binocularity."
aliases = ["vision-therapy/tranaglyph"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/tranaglyph" },
  { title = "Tranaglyph", href = "https://aworkoutaday.com/exercises?Name=Tranaglyph" },
  { title = "🄯 visiontherapy GNU AGPL v3<br>Slight changes in options.", href = "https://github.com/visiontherapy/visiontherapy.github.io"},
]
options = [
  { name = "Fusion Mode", id = "fusion-input", type = "checkbox" },
  { name = "Scale", id = "scale-input", type = "range", min = 0.5, max = 3, step = 0.05, value = 1 },
  { name = "Disparity", id = "vergence-input", type = "range", min = -24, max = 24, step = 0.05 },
  { name = "Vergence:", id = "vergence-output", type = "output", value = "0" },
  { name = "", id = "scale-display", type = "output", value = "Align the scale to 4in (10.16cm):" },
  { name = "", id = "scale-output", type = "div", value = "1.00" },
]
+++

<div id="tranaglyph">
  <div id="left-eye" class="circle left red">
    <div class="inner circle"></div>
    <div class="center"></div>
    <div class="satellite circle left"></div>
    <div class="satellite circle right"></div>
    <div class="suppression-check"></div>
    <div class="points"></div>
  </div>
  <div id="right-eye" class="circle right green">
    <div class="inner circle"></div>
    <div class="center"></div>
    <div class="satellite circle left"></div>
    <div class="satellite circle right"></div>
    <div class="suppression-check"></div>
    <div class="points"></div>
  </div>
</div>
