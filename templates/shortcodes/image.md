{% if open | default(value=false) %}
<details open="open" class="image" style="{{ style | default(value="") }}">
  <summary>
  
  {{ title | default(value=title) | safe }}
  </summary>
{% else %}
<details class="image" style="{{ style | default(value="") }}">
  <summary>

  {{ body | default(value=title) | safe }}
  </summary>
{% endif %}

![{{ title }}]({{ file }})
</details>