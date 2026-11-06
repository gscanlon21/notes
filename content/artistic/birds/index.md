+++
title = "Birds"
updated = 2026-03-03

[extra]
see_also = []
options = [
  { name = "Enabled", id = "enabledCheckbox", type = "checkbox", value = false, },
  { name = "Minimum Height", id = "minHeight", type = "number", value = 2000 },
  { name = "Minimum Width", id = "minWidth", type = "number", value = 2000 },
  { name = "Quantity", id = "quantity", type = "range", min = 1, max = 5, value = 3, step = 1 },
  { name = "Bird Size", id = "birdSize", type = "range", min = 0.1, max = 2.5, value = 1, step = 0.05 },
  { name = "Wing Span", id = "wingSpan", type = "range", min = 10, max = 60, value = 30 },
  { name = "Speed Limit", id = "speedLimit", type = "range", min = 0.1, max = 10, value = 5, step = 0.1 },
  { name = "Separation", id = "separation", type = "range", min = 1, max = 50, value = 20 },
  { name = "Alignment", id = "alignment", type = "range", min = 1, max = 50, value = 20 },
  { name = "Cohesion", id = "cohesion", type = "range", min = 1, max = 50, value = 20 },
  { name = "Color 1", id = "color1", type = "color", value = "#ff0000" },
  { name = "Color 2", id = "color2", type = "color", value = "#00ff00" },
  { name = "Color Mode", id = "colorMode", type = "select", options = ["lerp", "variance", "lerpGradient", "varianceGradient"] },
  { name = "Reset", id = "reset", type = "reset" },
]
+++

{{ <hidden page={page} section={section} /> }}


