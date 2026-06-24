---
layout: page
title: Essays
permalink: /essays/
hide_eyebrow: true
page_class: archive-page essays-archive
---

{% assign essays = site.essays | sort: "date" | reverse %}

<div class="archive-list">
  {% for essay in essays %}
    {% include archive-item.html item=essay show_date=true date_format="%Y.%m.%d" show_draft=true excerpt_length=190 %}
  {% endfor %}
</div>
