+++
title = "Clock"
updated = 2026-03-03

[extra]
authors = ["cakenggt"]
see_also = []
options = [
  { name = "Enabled", id = "enabled", type = "checkbox", value = true, },
  { name = "Rotate Colors", id = "rotateColors", type = "checkbox", value = false, },
  { name = "Hand Opacity", id = "hand-opacity", type = "range", min = 0, max = 1, value = 0.75, step = 0.05 },
  { name = "Maximum Opacity", id = "opacityMax", type = "range", min = 0, max = 1, value = 0.5, step = 0.05 },
  { name = "Minimum Opacity", id = "opacityMin", type = "range", min = 0, max = 1, value = 0.1, step = 0.05 },
  { name = "Color Floor", id = "colorFloor", type = "range", min = 50, max = 150, value = 50, step = 5 },
  { name = "Color Ceil", id = "colorCeil", type = "range", min = 155, max = 255, value = 255, step = 5 },
  { name = "Color Rotate", id = "colorRotate", type = "range", min = 1, max = 60, value = 60, step = 1 },
  { name = "Blend Mode", id = "blendMode", type = "select", options = ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"] },
  { name = "Reset", id = "reset", type = "reset" },
]
+++

{{ <hidden page={page} section={section} /> }}


