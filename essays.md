---
layout: page
title: Essays
permalink: /essays/
description: Longer pieces, meditations, and open-journal entries.
---

<div class="archive-list">
  {% assign essays = site.essays | sort: "date" | reverse %}
  {% for essay in essays %}
    {% include archive-item.html item=essay show_date=true date_format="%Y.%m.%d" show_draft=true excerpt_length=190 %}
  {% endfor %}
</div>
