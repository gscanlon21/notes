+++
title = "Liquid"
sort_by = "title"

[extra]
updated = 2027-01-01
see_also = []
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



