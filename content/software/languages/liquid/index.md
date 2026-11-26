+++
title = "Liquid"
description = ""

[extra]
updated = 2027-01-01
see_also = [
  { title = "Power Pages Liquid Objects", href = "https://learn.microsoft.com/en-us/power-pages/configure/liquid/liquid-objects" },
  { title = "Power Pages Liquid Filters", href = "https://learn.microsoft.com/en-us/power-pages/configure/liquid/liquid-filters" },
]
+++

{{ <hidden page={page} section={section} /> }}



# Syntax

## Switch/Case

```liquid
{% raw %}
{% case cat.name %}
  {% when 'Mini Fudge', 'Bo' %}
    <span>My cat</span>
  {% when 'Ted' %}
    <span>Not my cat</span>
  {% else %}
    <span>Not my cat</span>
{% endcase %}
{% endraw %}
```



