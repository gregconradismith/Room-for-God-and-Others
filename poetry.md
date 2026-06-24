---
layout: page
title: Poetry
permalink: /poetry/
description: Some attempts at creative writing.
hide_eyebrow: true
page_class: archive-page poetry-archive
---

{% assign poems = site.poems | sort: "date" | reverse %}

<div class="archive-intro">
  <p>Small pieces, usually trying to say less than they know.</p>
  <span>{{ poems | size }} poems</span>
</div>

<div class="archive-list">
  {% for poem in poems %}
    {% include archive-item.html item=poem extra_class="poem-archive-item" thumbnail_class="poem-thumbnail" show_excerpt=false %}
  {% endfor %}
</div>
