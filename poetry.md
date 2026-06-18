---
layout: page
title: Poetry
permalink: /poetry/
description: Poems, fragments, prayers, and lyric experiments.
---

<div class="archive-list">
  {% assign poems = site.poems | sort: "date" | reverse %}
  {% for poem in poems %}
    {% include archive-item.html item=poem extra_class="poem-archive-item" thumbnail_class="poem-thumbnail" show_excerpt=false %}
  {% endfor %}
</div>
