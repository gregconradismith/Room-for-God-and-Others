---
layout: page
title: Sayings
permalink: /sayings/
description: Brief original sayings.
hide_eyebrow: true
page_class: archive-page sayings-archive
---

{% assign sayings = site.sayings | sort: "title" %}

<div class="archive-intro">
  <p>Brief formulations I keep returning to, partly because they still accuse me.</p>
  <span>{{ sayings | size }} sayings</span>
</div>

<div class="archive-list quote-list">
  {% for saying in sayings %}
    {% include archive-item.html item=saying extra_class="quote-item" mark="&ldquo;" excerpt_length=190 %}
  {% endfor %}
</div>
