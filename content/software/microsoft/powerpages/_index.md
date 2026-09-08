+++
title = "Power Pages"
description = ""
sort_by = "title"

[extra]
updated = 2026-03-01
see_also = [
  { title = "Liquid Objects", href = "https://learn.microsoft.com/en-us/power-pages/configure/liquid/liquid-objects" },
]
+++

{{ <hidden page={page} section={section} /> }}





# Notes
# `annotation`

###### Display PDF Attachments
```html
{% raw %}
{% if note.mimetype == "application/pdf" and note.documentbody %}
<div class="attachment-preview">
  <iframe
    src="data:application/pdf;base64,{{ note.documentbody }}"
    width="100%"
    height="700"
    style="border:0;"
    title="{{ note.filename | escape }}">
  </iframe>
</div>
{% endif %}
{% endraw %}
```