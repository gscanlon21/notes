+++
title = "Trig Calculator"
sort_by = "title"
weight = 1050

[extra]
updated = 2026-06-01
theme = "system"
see_also = []
options = [
  { name = "Reset", id = "reset", type = "reset" },
  { name = "Side a", id = "a", type = "number", value = "" },
  { name = "Side b", id = "b", type = "number", value = "" },
  { name = "Side c", id = "c", type = "number", value = "" },
  { name = "Angle A", id = "A", type = "number", value = "" },
  { name = "Angle B", id = "B", type = "number", value = "" },
  { name = "Calculate", id = "calculate", type = "button" },
]
alerts = [
  { type = "note", id = "status", title = "Status", content = "..." },
]
+++

{{ <hidden page={page} section={section} /> }}

{{ <image title="Right Triangle" file="一Right_Triangle.png" open={false} inline={false} /> }}

<div class="calculator chart">
    <dl>
        <dt><strong>a</strong></dt>
        <dd><code id="result-a">&nbsp;</code></dd>
        <dt><strong>b</strong></dt>
        <dd><code id="result-b">&nbsp;</code></dd>
        <dt><strong>c</strong></dt>
        <dd><code id="result-c">&nbsp;</code></dd>
        <dt><strong>A</strong></dt>
        <dd><code id="result-A">&nbsp;</code></dd>
        <dt><strong>B</strong></dt>
        <dd><code id="result-B">&nbsp;</code></dd>
    </dl>
</div>