---
title: Subjects
layout: temp-layout.njk
---

# Subjects

<ul>
{% for item in collections.subject %}
  {% if item.data.tags and 'subject' in item.data.tags %}
    <li><a href="{{ item.url | url }}">{{ item.data.title }}</li>
  {% endif %}
{% endfor %}
</ul>
