---
layout: page
title: Poetry
permalink: /poetry/
description: Some attempts at creative writing.
hide_eyebrow: true
---

<div class="archive-list">
  {% assign poems = site.poems | sort: "date" | reverse %}
  {% for poem in poems %}
    {% include archive-item.html item=poem extra_class="poem-archive-item" thumbnail_class="poem-thumbnail" show_excerpt=false %}
  {% endfor %}
</div>
