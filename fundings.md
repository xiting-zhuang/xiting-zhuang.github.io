---
layout: page
permalink: /fundings/index.html
title: Fundings
---


<h2>Grants and Funding</h2>

<div class="grants-list">
  {% for grant in site.data.grants %}
    <div class="grant-item" style="margin-bottom: 25px;">
      <h3>{{ grant.agency }}</h3>
      <p><strong>{{ grant.title }}</strong></p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li><strong>Role:</strong> {{ grant.role }}</li>
        <li><strong>Amount:</strong> {{ grant.amount }}</li>
        <li><strong>Period:</strong> {{ grant.period }}</li>
        {% if grant.project_director %}
        <li><strong>Project Director:</strong> {{ grant.project_director }}</li>
        {% endif %}
        <li><strong>Status:</strong> {{ grant.status }}</li>
      </ul>
    </div>
    <hr>
  {% endfor %}
</div>