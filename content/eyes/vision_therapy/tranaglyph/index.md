+++
title = "Tranaglyph"
description = "TODO."
aliases = ["vision-therapy/tranaglyph"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/tranaglyph" },
  { title = "Tranaglyph", href = "https://aworkoutaday.com/exercises?Name=Tranaglyph" },
  { title = "Print Settings<br>☑ Background Graphics" },
  { title = "🄯 visiontherapy GNU AGPL v3<br>Images were copied over.", href = "https://github.com/visiontherapy/visiontherapy.github.io"},
]
options = [
  { name = "Red Color", id = "red-color", type = "color", value = "#FF0000" },
  { name = "Green Color", id = "green-color", type = "color", value = "#008000" },
  { name = "Swap Red and Green", id = "red-green-checkbox", type = "checkbox" },
  { name = "Disparity", id = "vergence-input", type = "range", min = -24, max = 24, step = 0.05 },
  { name = "Image Size", id = "image-size-range", type = "range", min = 75, max = 125 },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div class="chart">
  <div id="stereo-circles" class="defer">
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

  <div id="tranaglyph-wrapper">
    <div id="tranaglyph-left" class="tranaglyph"></div>
    <div id="tranaglyph-right" class="tranaglyph"></div>
  </div>
</div>
