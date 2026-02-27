---
layout: page
permalink: /projects/index.html
title: Projects
---

<div class="card-grid">
  {% for project in site.data.projects %}
    <div class="card project-card">
      {% if project.image != "" %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
      {% endif %}
      <h3>
        {% if project.url != "" %}
          <a href="{{ project.url }}">{{ project.title }}</a>
        {% else %}
          {{ project.title }}
        {% endif %}
      </h3>
      <p>{{ project.description }}</p>
    </div>
  {% endfor %}
</div>
