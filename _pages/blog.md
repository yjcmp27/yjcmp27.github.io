---
layout: page
title: Notes
permalink: /notes/
description: Here are some notes I took during my studies. Some of them are not yet finished and are still being updated.
nav: true
nav_order: 3
pagination:
  enabled: false
---

<style>
.notes-list {
  margin-top: 2.2rem;
}

/* spacing between notes, close to Talks */
.notes-list .note-item {
  margin-bottom: 1.65rem !important;
}

/* Note title: black, same visual level as Talks title */
.notes-list .note-title,
.notes-list .note-title a {
  font-size: 1rem !important;
  line-height: 1.45 !important;
  font-weight: 500 !important;
  color: var(--global-text-color) !important;
  text-decoration: none !important;
  margin: 0 !important;
}

/* keep title black when hovering */
.notes-list .note-title a:hover {
  color: var(--global-text-color) !important;
  text-decoration: underline !important;
}

/* Note description: same size as Talks venue line, but thinner than title */
.notes-list .note-description,
.notes-list .note-description p,
.notes-list .note-description strong,
.notes-list .note-description b {
  font-size: 1rem !important;
  line-height: 1.45 !important;
  font-weight: 300 !important;
  color: var(--global-text-color) !important;
  margin: 0.25rem 0 0 0 !important;
}

/* Note date */
.notes-list .note-date {
  font-size: 1rem !important;
  line-height: 1.45 !important;
  font-weight: 300 !important;
  color: var(--global-text-color-light) !important;
  margin: 0.25rem 0 0 0 !important;
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

    {% if post.display_date %}
      <div class="note-date">
        {{ post.display_date }}
      </div>
    {% elsif post.date %}
      <div class="note-date">
        {{ post.date | date: "%B %-d, %Y" }}
      </div>
    {% endif %}
  </article>
{% endfor %}

</div>
