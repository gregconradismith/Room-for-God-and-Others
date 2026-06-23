---
layout: page
title: Sayings
permalink: /sayings/
description: Brief original sayings.
hide_eyebrow: true
---

<div class="archive-list quote-list">
  {% assign sayings = site.sayings | sort: "title" %}
  {% for saying in sayings %}
    {% include archive-item.html item=saying extra_class="quote-item" mark="&ldquo;" excerpt_length=190 %}
  {% endfor %}
</div>
