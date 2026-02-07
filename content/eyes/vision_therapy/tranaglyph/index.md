+++
title = "Tranaglyph"
description = "Work in progress."
aliases = ["vision-therapy/tranaglyph"]
updated = 2026-02-01

[extra]
caution = "Always follow your vision therapist's guidance."
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
  { name = "Scale", id = "scale-input", type = "range", min = 0.5, max = 3, step = 0.05, value = 1 },
  { name = "Disparity", id = "vergence-input", type = "range", min = -24, max = 24, step = 0.05 },
  { name = "Vergence:", id = "vergence-output", type = "output", value = "0" },
  { name = "", id = "scale-display", type = "output", value = "Align the scale to 4in (10.16cm):" },
  { name = "", id = "scale-output", type = "div", value = "1.00" },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="chart" class="chart defer">
  <div id="stereo-circles">
    <div id="left-eye" class="circle left red">
      <div class="inner circle"></div>
      <div class="center"></div>
      <div class="suppression-check"></div>
      <div class="points"></div>
    </div>
    <div id="right-eye" class="circle right green">
      <div class="inner circle"></div>
      <div class="center"></div>
      <div class="suppression-check"></div>
      <div class="points"></div>
    </div>
  </div>

  <div id="tranaglyph-wrapper">
    <div id="tranaglyph-left" class="tranaglyph left"></div>
    <div id="tranaglyph-right" class="tranaglyph right"></div>
  </div>
</div>
