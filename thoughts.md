---
layout: page
title: Thoughts
permalink: /thoughts/
hide_eyebrow: true
page_class: archive-page thoughts-archive
---

{% assign thoughts = site.thoughts | sort: "title" %}

<div class="archive-list thought-list">
  {% for thought in thoughts %}
    {% include archive-item.html item=thought extra_class="thought-item" excerpt_length=190 %}
  {% endfor %}
</div>
