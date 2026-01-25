+++
title = "Tranaglyph"
description = "Colored circles help train fusion, stereopsis, and binocularity."
aliases = ["vision-therapy/tranaglyph"]
updated = 2026-02-01

[extra]
site_version = 1
toc_level = 2
see_also = [
  { title = "Permalink", href = "/vision-therapy/tranaglyph" },
  { title = "Tranaglyph", href = "https://aworkoutaday.com/exercises?Name=Tranaglyph" },
]
options = [
  { name = "Scale", id = "scale-input", type = "range", min = 0.5, max = 3, step = 0.05, value = 1.65 },
  { name = "Disparity", id = "vergence-input", type = "range", min = -24, max = 24, step = 0.05 },
  { name = "Fusion Mode", id = "fusion-input", type = "checkbox" },
  { name = "Vergence", id = "vergence-output", type = "output" },
  { name = "", id = "scale-output", type = "div", value = 1.65 },
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