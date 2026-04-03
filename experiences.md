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

<h2>Education</h2>
<ul class="experience-list">
  {% for edu in site.data.experiences.education %}
    <li>
      <strong>{{ edu.degree }}</strong>, {{ edu.institution }} <br>
      <span style="color: #666;">{{ edu.location }} | {{ edu.period }}</span>
    </li>
  {% endfor %}
</ul>

<h2>Honors & Awards</h2>
<ul class="experience-list">
  {% for honor in site.data.experiences.honors %}
    <li>
      <strong>{{ honor.title }}</strong>, {{ honor.issuer }} <br>
      <span style="color: #666;">{{ honor.year }}</span>
    </li>
  {% endfor %}
</ul>

<h2>Professional Affiliations</h2>
<ul>
  {% for aff in site.data.experiences.affiliations %}
    <li>{{ aff }}</li>
  {% endfor %}
</ul>

<h2>Journal Reviewer</h2>
<ul>
  {% for svc in site.data.experiences.service %}
    <li>{{ svc }}</li>
  {% endfor %}
</ul>

