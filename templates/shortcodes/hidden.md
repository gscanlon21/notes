<div class="visibility--hidden">

{% if page.extra.see_also | default(value=section.extra.see_also) %} 
{% for also in page.extra.see_also | default(value=section.extra.see_also) %}
  <div class="display--none">{{ also.title }}</div>
{% endfor %}
{% endif %}

</div>