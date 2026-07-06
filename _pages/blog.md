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

<style>
.notes-list {
  margin-top: 2rem;
}

.notes-list .note-item {
  margin-bottom: 1.7rem;
}

/* Make note titles visually consistent with Publications and Talks */
.notes-list .note-title {
  font-size: 1.08rem;
  line-height: 1.4;
  font-weight: 400;
  margin-bottom: 0.35rem;
}

.notes-list .note-title a {
  color: var(--global-text-color) !important;
  text-decoration: none;
}

.notes-list .note-title a:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none;
}

/* Description style */
.notes-list .note-description {
  font-size: 1rem;
  line-height: 1.45;
  font-weight: 400;
  margin-bottom: 0.45rem;
  color: var(--global-text-color);
}

/* Date style */
.notes-list .note-date {
  font-size: 0.95rem;
  line-height: 1.35;
  font-weight: 400;
  color: var(--global-text-color-light);
  margin-bottom: 0;
}
</style>

<div class="notes-list">

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

{% for post in sorted_posts %}
  <article class="note-item">
    <div class="note-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </div>

    {% if post.description %}
      <div class="note-description">
        {{ post.description }}
      </div>
    {% elsif post.excerpt %}
      <div class="note-description">
        {{ post.excerpt | strip_html | truncatewords: 40 }}
      </div>
    {% endif %}

    {% if post.date %}
      <div class="note-date">
        {{ post.date | date: "%B %-d, %Y" }}
      </div>
    {% endif %}
  </article>
{% endfor %}

</div>
