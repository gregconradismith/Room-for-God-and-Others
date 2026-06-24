---
layout: page
title: Themes
permalink: /themes/
hide_eyebrow: true
page_class: archive-page themes-archive
---

<div class="archive-list theme-list">
  {% for theme in site.data.writing_categories %}
    <article class="archive-item theme-card">
      <h2><a href="{{ '/themes/' | append: theme.slug | append: '/' | relative_url }}">{{ theme.title | escape }}</a></h2>
    </article>
  {% endfor %}
</div>
