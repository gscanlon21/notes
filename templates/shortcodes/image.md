{% if open | default(value=false) %}
<details open="open" style="{{ style | default(value="") }}"><summary>{{ title }}</summary>
{% else %}
<details style="{{ style | default(value="") }}"><summary>{{ title }}</summary>
{% endif %}

![{{ title }}]({{ file }})
</details>