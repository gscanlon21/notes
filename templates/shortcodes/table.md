{% if header %}
###### Table {{ nth }}: {{ header | safe }}
{% endif %}

{% if footer and footer | length > 0 %}
  {% set styles = "width:100%" %}
{% else %}
  {% set styles = "" %}
{% endif %}

<div class="table-wrapper {{ class | default(value='') }}" style="{{ styles }}">

{{ body | safe }}

</div>

{% if footer %}
###### {{ footer | safe }}
{% endif %}