---
layout: page
title: Themes
permalink: /themes/
description: Themes for reading across the site.
---

<div class="theme-list">
  {% for theme in site.data.writing_categories %}
    <article class="theme-card">
      <h2><a href="{{ '/themes/' | append: theme.slug | append: '/' | relative_url }}">{{ theme.title | escape }}</a></h2>
      <p>{{ theme.description | escape }}</p>
    </article>
  {% endfor %}
</div>
