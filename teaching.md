---
layout: page
permalink: /teaching/index.html
title: Teaching
---

<h2>Teaching Experience</h2>

{% for job in site.data.teaching %}
  <div class="teaching-entry" style="margin-bottom: 20px;">
    <strong>{{ job.role }}</strong> <br>
    {{ job.course }} <br>
    <span style="color: #666;">{{ job.institution }} | {{ job.period }}</span>
  </div>
{% endfor %}