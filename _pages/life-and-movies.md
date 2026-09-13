---
layout: page
title: Movies
permalink: /life-and-movies/
description:
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/personal.css' | relative_url }}">

<!-- Keep the same Chinese font used on the Alma Maters page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">

<style>
  /* Chinese text on the Movies directory page only */
  .movies-index .movie-cn,
  .movies-index .personal-type,
  .movies-index .personal-name {
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
</style>


<div class="movies-index">

  <div style="margin-bottom: 1.8rem;">
    <a href="{{ '/personal/' | relative_url }}">← Back to Personal</a>
  </div>

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
