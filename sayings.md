---
layout: page
title: Sayings
permalink: /sayings/
hide_eyebrow: true
page_class: archive-page sayings-archive
---

{% assign sayings = site.sayings | sort: "title" %}

<div class="archive-list quote-list">
  {% for saying in sayings %}
    {% include archive-item.html item=saying extra_class="quote-item" excerpt_length=190 %}
  {% endfor %}
</div>
