---
layout: page
title: Notes
permalink: /notes/
nav: true
nav_order: 3
pagination:
  enabled: false
---

<div class="personal-intro">
  Here are some notes I took during my studies. Some of them are not yet finished and are still being updated.
</div>

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
   The whole entry is now a clickable link.
*/
.notes-list .note-item {
  position: relative;
  margin: 0 0 1.8rem 0 !important;
  padding: 0 0 1.65rem 0 !important;
  border-bottom: 1px solid var(--global-divider-color);
  transition: transform 0.2s ease;
}

/* No divider after the final note */
.notes-list .note-item:last-child {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
  border-bottom: none;
}

/* Full-area clickable link */
.notes-list .note-link {
  display: block;
  color: inherit !important;
  text-decoration: none !important;
  cursor: pointer;
}

/* Hover feedback: whole entry shifts slightly to the right */
.notes-list .note-item:hover {
  transform: translateX(4px);
}

/* Title changes colour on hover so the whole entry reads as one link */
.notes-list .note-item:hover .note-title {
  color: var(--global-theme-color) !important;
  text-decoration: underline !important;
}


/* =========================================================
   "Read more" arrow that appears on hover
   ========================================================= */

.notes-list .note-arrow {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--global-theme-color);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}

.notes-list .note-item:hover .note-arrow {
  opacity: 1;
  transform: translateX(0);
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
  padding-right: 1.6rem !important; /* leave room for the arrow */
  transition: color 0.2s ease;
}

.notes-list .note-title {
  font-size: 1.02rem !important;
  line-height: 1.5 !important;
  font-weight: 400 !important;
  -webkit-text-stroke: 0.07px currentColor;
  color: var(--global-text-color) !important;
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

  .notes-list .note-title {
    line-height: 1.45 !important;
  }

  .notes-list .note-description,
  .notes-list .note-description p {
    line-height: 1.5 !important;
  }

  /* Disable the hover shift on touch devices */
  .notes-list .note-item:hover {
    transform: none;
  }
}
</style>


<div class="notes-list">

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

{% for post in sorted_posts %}
  <article class="note-item">

    <a href="{{ post.url | relative_url }}" class="note-link">

      <div class="note-title">
        {{ post.title }}
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

    </a>

    <span class="note-arrow">→</span>

  </article>
{% endfor %}

</div>
