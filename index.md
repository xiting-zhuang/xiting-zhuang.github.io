---
layout: default
title: About Me
---

<div class="about-container">
  <div class="about-text">
    <h1>About Me</h1>
    <p>Hi, I am <strong>Xiting Zhuang (<a href="{{ '/file/XitingZhuang-Resume.pdf' | relative_url }}">庄曦庭</a>)</strong>. I’m currently a <strong>Research Assistant Professor</strong> in the <strong>Department of Agribusiness and Applied Economics</strong> at <strong>North Dakota State University</strong>.</p>
    
    <p>My research focuses on <strong>global supply chain disruptions</strong>, <strong>agri-food trade</strong>, and <strong>sustainability</strong>, with a particular interest in how evolving international policies and economic shocks shape global food systems. By incorporating <strong>big data analytics</strong> and <strong>machine learning techniques</strong>, I aim to uncover insights that inform resilient and sustainable trade strategies.</p>
    
    <p>This site serves as a platform to share my research, professional experiences, and collaborations. If you are interested in my work or exploring opportunities for collaboration, feel free to reach out to me at <a href="mailto:xiting.zhuang@ndsu.edu">xiting.zhuang@ndsu.edu</a>.</p>
    
    <a href="{{ '/file/XitingZhuang-Resume.pdf' | relative_url }}" class="btn btn-primary">📄 View My CV</a>
  </div>
  
  <div class="about-image">
    <img src="{{ '/images/shenghuo.jpg' | relative_url }}" alt="Xiting Zhuang">
  </div>
</div>

<hr>

<div class="research-interests">
  <h2>Research Interests</h2>
  <ul>
    <li>Causal Inference</li>
    <li>International Trade</li>
    <li>Supply Chain</li>
    <li>Environmental Economics</li>
  </ul>
</div>

<hr>

<div class="latest-news">
  <h2>Latest News</h2>
  <ul>
    {% for item in site.data.news limit:5 %}
      <li><strong>{{ item.date }}:</strong> {{ item.content | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/experiences/' | relative_url }}">View all &rarr;</a></p>
</div>

<hr>

<div class="selected-publications">
  <h2>Selected Publications</h2>
  {% assign all_pubs = site.data.publications %}
  {% assign recent_pubs = "" | split: "" %}
  {% for pub in all_pubs %}
    {% if pub.year == "2025" or pub.year == "2024" %}
      {% assign recent_pubs = recent_pubs | push: pub %}
    {% endif %}
  {% endfor %}
  {% for pub in recent_pubs %}
    <div class="publication-item">
      <h3 class="publication-title">
        {% if pub.url != "" %}
          <a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a>
        {% else %}
          {{ pub.title }}
        {% endif %}
      </h3>
      <p class="journal"><em>{{ pub.journal }}</em></p>
      <p class="authors">{{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' }}</p>
    </div>
  {% endfor %}
  <p><a href="{{ '/publications/' | relative_url }}">View all publications &rarr;</a></p>
</div>
