+++
title = "Trig Calculator"
sort_by = "title"
weight = 1050

[extra]
updated = 2026-06-01
theme = "light"
see_also = []
options = [
  { name = "Reset", id = "reset", type = "reset" },
  { name = "Side a", id = "a", type = "number", value = "" },
  { name = "Side b", id = "b", type = "number", value = "" },
  { name = "Side c", id = "c", type = "number", value = "" },
  { name = "Angle A", id = "A", type = "number", value = "" },
  { name = "Angle B", id = "B", type = "number", value = "" },
  { name = "Calculate", id = "calculate", type = "button" },
  { name = "Status", id = "status", type = "output" },
]
+++

{{ <hidden page={page} section={section} /> }}


<div class="calculator graph">
    <div class="svg-wrap">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <!-- Unit circle -->
            <circle class="grid" cx="400" cy="400" r="300" />
            <circle class="circle" cx="400" cy="400" r="300" />
            <!-- Axes -->
            <line class="axis" x1="55" y1="400" x2="745" y2="400" />
            <line class="axis" x1="400" y1="55" x2="400" y2="745" />
            <!-- Labels -->
            <text class="axis-label" x="750" y="408">x</text>
            <text class="axis-label" x="408" y="45">y</text>
            <text class="tick-label" x="705" y="393">1</text>
            <text class="tick-label" x="380" y="90">1</text>
            <text class="tick-label" x="62" y="393" >−1</text>
            <text class="tick-label" x="380" y="725">−1</text>
            <!-- Dynamic drawing -->
            <g id="drawing"></g>
        </svg>
    </div>
    <div id="info" class="info">
        Enter values to calculate the triangle.
    </div>
</div>

