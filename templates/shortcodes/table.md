{% if header %}
###### Table {{ nth }}: {{ header | safe }}
{% endif %}

<div class="table-wrapper {{ class | default(value='') }}">

{{ body | safe }}

</div>

{% if footer %}
###### {{ footer | safe }}
{% endif %}