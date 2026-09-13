---
layout: page
title: Movies
permalink: /life-and-movies/
description:
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/personal.css' | relative_url }}">

<!-- Same Chinese font used on the Alma Maters page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">

<style>

  /* ========================================================
     Chinese text on the Movies directory page only
     ======================================================== */

  .movies-index .personal-type,
  .movies-index .personal-name,
  .movies-index .movies-intro {
    font-family:
      "ZCOOL KuaiLe",
      "Microsoft YaHei",
      "PingFang SC",
      sans-serif !important;
  }

  /* Match the Chinese school-name weight used on Alma Maters */
  .movies-index .personal-name {
    font-weight: 400;
  }


  /* ========================================================
     Quote
     ======================================================== */

  .movies-intro {
    max-width: 850px;
    margin-bottom: 2.8rem;

    font-size: 1.05rem;
    line-height: 1.75;
    font-weight: 400;
  }

  .movies-quote {
    margin: 0;
  }

  .movies-source {
    margin-top: 0.8rem;
    font-size: 0.95rem;
  }

</style>


<div class="movies-index">

  <!-- Back to Personal -->
  <div style="margin-bottom: 1.8rem;">
    <a href="{{ '/personal/' | relative_url }}">← Back to Personal</a>
  </div>


  <!-- Quote -->
  <div class="movies-intro">

    <p class="movies-quote">
      电影发明以后，人类的生命至少比以前延长了三倍。
    </p>

    <div class="movies-source">
      ------ 杨德昌《一一》
    </div>

  </div>


  <!-- Movie categories -->
  <div class="personal-list">

    <a class="personal-card" href="{{ '/movies/drama/' | relative_url }}">
      <span class="personal-type">剧情片</span>
      <span class="personal-name">我最喜欢的十部剧情片</span>
      <span class="personal-arrow">→</span>
    </a>

    <a class="personal-card" href="{{ '/movies/crime-mystery/' | relative_url }}">
      <span class="personal-type">犯罪 · 悬疑</span>
      <span class="personal-name">我最喜欢的五部犯罪悬疑片</span>
      <span class="personal-arrow">→</span>
    </a>

    <a class="personal-card" href="{{ '/movies/science-fiction/' | relative_url }}">
      <span class="personal-type">科幻片</span>
      <span class="personal-name">我最喜欢的五部科幻片</span>
      <span class="personal-arrow">→</span>
    </a>

    <a class="personal-card" href="{{ '/movies/other/' | relative_url }}">
      <span class="personal-type">其它类型</span>
      <span class="personal-name">其它类型中我最喜欢的八部电影</span>
      <span class="personal-arrow">→</span>
    </a>

  </div>

</div>
