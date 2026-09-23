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
/* =========================================================
   Notes page
   ========================================================= */

.notes-list {
  margin-top: 2.4rem;
}


/* =========================================================
   Individual note
   ========================================================= */

/*
   Give each note enough breathing room and visually
   separate neighboring entries with a subtle divider.
*/
.notes-list .note-item {
  margin: 0 0 1.8rem 0 !important;
  padding: 0 0 1.65rem 0 !important;
  border-bottom: 1px solid var(--global-divider-color);
}

/* No divider after the final note */
.notes-list .note-item:last-child {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
  border-bottom: none;
}


/* =========================================================
   Note title
   ========================================================= */

/*
   Keep the title clear but not noticeably bold.
   It should remain close to ordinary body text in weight.
*/
.notes-list .note-title {
  margin: 0 !important;
  padding: 0 !important;
}

.notes-list .note-title,
.notes-list .note-title a {
  font-size: 1.02rem !important;
  line-height: 1.5 !important;
  font-weight: 400 !important;
  -webkit-text-stroke: 0.07px currentColor;
  color: var(--global-text-color) !important;
  text-decoration: none !important;
}

/* Keep title black when hovering */
.notes-list .note-title a:hover {
  color: var(--global-text-color) !important;
  text-decoration: underline !important;
}


/* =========================================================
   Note description
   ========================================================= */

.notes-list .note-description {
  margin: 0.35rem 0 0 0 !important;
  padding: 0 !important;
}

.notes-list .note-description,
.notes-list .note-description p,
.notes-list .note-description strong,
.notes-list .note-description b {
  font-size: 1rem !important;
  line-height: 1.55 !important;
  font-weight: 400 !important;
  -webkit-text-stroke: 0.05px currentColor;
  color: var(--global-text-color) !important;
}

/* Remove margins inserted by Markdown inside descriptions */
.notes-list .note-description p {
  margin: 0 !important;
}


/* =========================================================
   Note date
   ========================================================= */

.notes-list .note-date {
  margin: 0.4rem 0 0 0 !important;
  padding: 0 !important;
  font-size: 0.94rem !important;
  line-height: 1.45 !important;
  font-weight: 400 !important;
  -webkit-text-stroke: 0.03px currentColor;
  color: var(--global-text-color-light) !important;
}


/* =========================================================
   Mobile
   ========================================================= */

@media (max-width: 768px) {
  .notes-list {
    margin-top: 2rem;
  }

  .notes-list .note-item {
    margin-bottom: 1.55rem !important;
    padding-bottom: 1.4rem !important;
  }

  .notes-list .note-title,
  .notes-list .note-title a {
    line-height: 1.45 !important;
  }

  .notes-list .note-description,
  .notes-list .note-description p {
    line-height: 1.5 !important;
  }
}
</style>


<div class="notes-list">

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

{% for post in sorted_posts %}
  <article class="note-item">

    <div class="note-title">
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
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
