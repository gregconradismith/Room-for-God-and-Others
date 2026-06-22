---
layout: page
title: Thoughts
permalink: /thoughts/
description: Short passages, fragments, sketches, and unplaced notes.
---

<div class="archive-list thought-list">
  {% assign thoughts = site.thoughts | sort: "title" %}
  {% for thought in thoughts %}
    {% include archive-item.html item=thought extra_class="thought-item" mark="¶" excerpt_length=190 %}
  {% endfor %}
</div>
