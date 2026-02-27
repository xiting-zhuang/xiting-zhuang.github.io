---
layout: page
permalink: /publications/index.html
title: Publications
---

<h1>Peer-Reviewed Publications</h1>


<div class="publications-wrapper">
  {% assign grouped_pubs = site.data.publications | group_by: "year" | sort: "name" | reverse %}
  
  {% for group in grouped_pubs %}
    <h2 class="year-header">{{ group.name }}</h2>
    <div class="publications-list">
      {% for pub in group.items %}
        <div class="publication-item">
          <div class="publication-content">
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
          {% if pub.doi != "" or pub.url != "" %}
            <div class="publication-links">
               <a href="{{ pub.url | default: pub.doi }}" class="btn btn-outline-primary btn-sm" target="_blank">
                 <i class="fas fa-external-link-alt"></i> View
               </a>
            </div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>

<h2 style="margin-top: 40px;">Working Papers</h2>
<ul>
  <li><strong>U.S. public perceptions of food date labeling: Text mining and content analysis of USDA request for information (RFI) responses</strong>. <br> Peng Lu, Lulu Mao, <strong>Xiting Zhuang</strong>, Zhihong Xu, & Shuai Ma. <br> (R&R at <em>Food Policy</em>)</li>
  <li><strong>Tradition or tragedy: Arranged marriages and domestic violence</strong>. <br> Weidong Tian, Dongli Cao, & <strong>Xiting Zhuang</strong>. <br> (R&R at <em>International Review of Law & Economics</em>)</li>
  <li><strong>The call of kinship: How clan culture shapes rural residents' commitment to hometown development in China</strong>. <br> Zhiyong Dai, Weidong Tian, & <strong>Xiting Zhuang</strong>. <br> (R&R at <em>Journal of Rural Studies</em>)</li>
  <li><strong>Bridging language and data: Transforming agricultural curricula for data analytics through linguistic insights</strong>. <br> Zhihong Xu, Jaehyun Ahn, Shuai Ma, Anjorin Ezekiel Adeyemi, Fahmida Husain Choudhury, <strong>Xiting Zhuang</strong>, Rafael Landaverde, & Gary J. Wingenbach. <br> (R&R at <em>PLOS One</em>)</li>
  <li><strong>The gift of equality: Legal recognition of same-sex unions and elder abuse</strong>. <br> Weidong Tian & <strong>Xiting Zhuang</strong>.</li>
  <li><strong>Temperature, allowance, and air pollution: Evidence from regression discontinuity design</strong>. <br> <strong>Xiting Zhuang</strong>.</li>
  <li><strong>Bread and bruises: The Great Chinese Famine and domestic violence</strong>. <br> Weidong Tian & <strong>Xiting Zhuang</strong>.</li>
  <li><strong>Global supply chain and domestic cost shocks</strong>. <br> Sandro Steinbach & <strong>Xiting Zhuang</strong>.</li>
  <li><strong>Global trade effects of tightening environmental trade policies in China</strong>. <br> Sandro Steinbach & <strong>Xiting Zhuang</strong>.</li>
</ul>

<h2 style="margin-top: 40px;">Policy Briefs and Outreach Work</h2>
<ul reversed>
  <li>Shawn Arita, Ruchira Chakravorty, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & <strong>Xiting Zhuang</strong> (2026). IEEPA fertilizer tariffs: Revenue, relief, and pass-through. <em>NDSU Agricultural Trade Monitor 2026-01</em>. <a href="https://www.capts-ndsu.com/_files/ugd/3c6228_df79f1f42b5f4d98a0428a2c43085b98.pdf">LINK</a></li>
  <li>Shawn Arita, Matthew Gammans, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & <strong>Xiting Zhuang</strong> (2025). Supreme Court, food and input tariff relief, and market access opportunities through recent trade deals. <em>NDSU Agricultural Trade Monitor 2025-12</em>. <a href="https://www.capts-ndsu.com/_files/ugd/3c6228_c0952c30cd4848a7b76fead0aed0853e.pdf">LINK</a></li>
  <li>Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & <strong>Xiting Zhuang</strong> (2025). Implications of new U.S.-China deal, soybean commitments, port fee suspension, and SE Asia deals. <em>NDSU Agricultural Trade Monitor 2025-11</em>. <a href="https://www.capts-ndsu.com/_files/ugd/3c6228_26d85e314b884039ac6aa9f2d9b3b739.pdf">LINK</a></li>
  <li>Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & <strong>Xiting Zhuang</strong> (2025). China could bypass U.S. soybeans in 2025/26 and IEEPA tariffs raise input costs. <em>NDSU Agricultural Trade Monitor 2025-10</em>. <a href="https://www.capts-ndsu.com/_files/ugd/3c6228_8ba2525b1280446489c686bb8f45bef1.pdf">LINK</a></li>
  <li>Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, & <strong>Xiting Zhuang</strong> (2025). Soybean basis hits record low amid zero new-crop sales to China. <em>NDSU Agricultural Trade Monitor 2025-09</em>. <a href="https://www.capts-ndsu.com/_files/ugd/3c6228_a43f5e48de2d400f88da267c58abfc6f.pdf">LINK</a></li>
  <li>Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & <strong>Xiting Zhuang</strong> (2025). IEEPA tariff escalation: What it means for U.S. food and ag-input imports. <em>NDSU Agricultural Trade Monitor 2025-08</em>. <a href="https://www.capts-ndsu.com/_files/ugd/3c6228_44202bdfcc8f4c01af0995141c8215fe.pdf">LINK</a></li>
</ul>
