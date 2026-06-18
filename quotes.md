---
layout: page
title: Quotations
permalink: /quotes/
description: Gathered passages, fragments, and remembered lines.
---

<div class="archive-list quote-list">
  {% assign quotes = site.quotes | sort: "title" %}
  {% for quote in quotes %}
    {% include archive-item.html item=quote extra_class="quote-item" mark="&ldquo;" excerpt_length=190 %}
  {% endfor %}
</div>
