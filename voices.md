---
layout: page
title: Voices
permalink: /voices/
description: Quotes and reading notes.
hide_eyebrow: true
page_class: archive-page voices-archive
---

{% assign quotes = site.quotes | sort: "title" %}

<div class="archive-intro">
  <p>Other voices I want nearby while trying to think.</p>
  <span>{{ quotes | size }} voices</span>
</div>

<div class="archive-tools">
  <a class="section-link" href="{{ '/voice-of-the-day/' | relative_url }}">Voice of the day</a>
  <a class="section-link" href="{{ '/voices/feed.xml' | relative_url }}">RSS feed</a>
</div>

<div class="archive-list quote-list">
  {% for quote in quotes %}
    {% include archive-item.html item=quote extra_class="quote-item" mark="&ldquo;" excerpt_length=190 %}
  {% endfor %}
</div>
