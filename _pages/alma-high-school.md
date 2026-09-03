---
layout: page
title: 扬州中学
permalink: /alma-maters/high-school/
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/alma-gallery.css' | relative_url }}">

<!-- Chinese handwritten font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">

<style>
  .post-title {
    font-family: "ZCOOL KuaiLe", "Microsoft YaHei", "PingFang SC", sans-serif !important;
    font-weight: 400 !important;
  }
</style>

<div class="alma-gallery" data-alma-gallery>

  <div class="alma-gallery-header">
    <a class="alma-back" href="{{ '/alma-maters/' | relative_url }}">← Alma Maters</a>

    <div class="alma-counter">
      <span data-alma-current>1</span> / <span data-alma-total>8</span>
    </div>
  </div>

  <div class="alma-stage-area">

    <button
      class="alma-nav alma-prev"
      type="button"
      aria-label="Previous photo"
    >
      ‹
    </button>

    <img
      class="alma-photo"
      src=""
      alt=""
    >

    <button
      class="alma-nav alma-next"
      type="button"
      aria-label="Next photo"
    >
      ›
    </button>

  </div>

  <div class="alma-caption"></div>

  <div class="alma-hint">
    Use ← → keys to navigate
  </div>

</div>


<script type="application/json" id="alma-gallery-data">
[
  {
    "src": "{{ '/assets/img/alma-maters/high-school/01-shurenting.jpg' | relative_url }}",
    "caption": "树人堂前，摄于 2026.8"
  },
  {
    "src": "{{ '/assets/img/alma-maters/high-school/02-campus-corner.jpg' | relative_url }}",
    "caption": "校内一隅，摄于 2026.8"
  },
  {
    "src": "{{ '/assets/img/alma-maters/high-school/03-lab-building.jpg' | relative_url }}",
    "caption": "实验楼内，摄于 2017.4"
  },
  {
    "src": "{{ '/assets/img/alma-maters/high-school/04-teaching-building-moon.jpg' | relative_url }}",
    "caption": "月下教学楼，来自于朋友"
  },
  {
    "src": "{{ '/assets/img/alma-maters/high-school/05-old-library.jpg' | relative_url }}",
    "caption": "老图书馆，摄于 2026.8"
  },
  {
    "src": "{{ '/assets/img/alma-maters/high-school/06-auditorium.jpg' | relative_url }}",
    "caption": "大礼堂，摄于 2026.8"
  },
  {
    "src": "{{ '/assets/img/alma-maters/high-school/07-restroom.jpg' | relative_url }}",
    "caption": "喜欢的卫生间，摄于 2026.8"
  },
  {
    "src": "{{ '/assets/img/alma-maters/high-school/08-gymnasium.jpg' | relative_url }}",
    "caption": "体育馆，摄于 2025.9"
  }
]
</script>

<script src="{{ '/assets/js/alma-gallery.js' | relative_url }}"></script>
