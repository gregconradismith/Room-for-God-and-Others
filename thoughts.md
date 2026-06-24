---
layout: page
title: Thoughts
permalink: /thoughts/
description: Reflections and short passages.
hide_eyebrow: true
page_class: archive-page thoughts-archive
---

{% assign thoughts = site.thoughts | sort: "title" %}

<div class="archive-intro">
  <p>Fragments, provisional claims, and notes from the edge of a larger conversation.</p>
  <span>{{ thoughts | size }} thoughts</span>
</div>

<div class="archive-list thought-list">
  {% for thought in thoughts %}
    {% include archive-item.html item=thought extra_class="thought-item" mark="¶" excerpt_length=190 %}
  {% endfor %}
</div>
