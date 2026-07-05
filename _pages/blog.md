---
layout: page
title: Notes
permalink: /notes/
description: Notes on geometry, geometric analysis, gauge theory, and spectral geometry.
nav: true
nav_order: 3
pagination:
  enabled: false
---

<div class="post">

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

{% for post in sorted_posts %}
  <article class="post-preview">
    <h2>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>

    {% if post.description %}
      <p>{{ post.description }}</p>
    {% elsif post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    {% endif %}

    {% if post.date %}
      <p class="post-meta">
        {{ post.date | date: "%B %-d, %Y" }}
      </p>
    {% endif %}
  </article>
{% endfor %}

</div>
