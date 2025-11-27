<div class="display--none">

{% if page.extra.see_also | default(value=section.extra.see_also) %} 
{% for also in page.extra.see_also | default(value=section.extra.see_also) %}
  <div>{{ also.title }}</div>
{% endfor %}
{% endif %}

</div>