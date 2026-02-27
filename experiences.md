---
layout: page
permalink: /experiences/index.html
title: Experiences
---

<h2>Professional Experience</h2>
<ul class="experience-list">
  {% for exp in site.data.experiences.professional %}
    <li>
      <strong>{{ exp.role }}</strong>, {{ exp.institution }} <br>
      <span style="color: #666;">{{ exp.location }} | {{ exp.period }}</span>
    </li>
  {% endfor %}
</ul>

