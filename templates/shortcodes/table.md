{% if header %}
###### Table {{ nth }}: {{ header | safe }}
{% endif %}

<div class="table-wrapper">

{{ body | safe }}

</div>

{% if footer %}
###### {{ footer | safe }}
{% endif %}