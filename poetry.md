---
layout: page
title: Attempted Poetry
permalink: /poetry/
hide_eyebrow: true
page_class: archive-page poetry-archive
---

{% assign poems = site.poems | sort: "date" | reverse %}

<div class="archive-list">
  {% for poem in poems %}
    {% include archive-item.html item=poem extra_class="poem-archive-item" thumbnail_class="poem-thumbnail" show_excerpt=false %}
  {% endfor %}
</div>
