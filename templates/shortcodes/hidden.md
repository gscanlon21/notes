<div class="visibility--hidden">

{% if page.extra.see_also | default(value=section.extra.see_also) %} 
{% for also in page.extra.see_also | default(value=section.extra.see_also) %}
  <div class="display--none">{{ also.title }}</div>
{% endfor %}
{% endif %}

{% if page.assets | default(value=section.assets) %} 
{% for asset in page.assets | default(value=section.assets) %}
  {% set filename = asset | split(pat="/") | last | split(pat="\") | last | split(pat=".") | first %}
  {% set title = filename | replace(from="--", to=": ") | replace(from="_", to=" ") | replace(from="一", to="") %}
  <div class="display--none">{{ title }}</div>
{% endfor %}
{% endif %}

</div>