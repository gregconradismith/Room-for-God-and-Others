---
layout: page
title: Thoughts
permalink: /thoughts/
description: Reflections and short passages.
hide_eyebrow: true
---

<div class="archive-list thought-list">
  {% assign thoughts = site.thoughts | sort: "title" %}
  {% for thought in thoughts %}
    {% include archive-item.html item=thought extra_class="thought-item" mark="¶" excerpt_length=190 %}
  {% endfor %}
</div>
