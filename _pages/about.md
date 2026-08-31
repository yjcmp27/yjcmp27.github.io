---
layout: page
title: About
description: Jiangcheng You is a Ph.D. student in mathematics at the University of Science and Technology of China, working in differential geometry and geometric analysis.
permalink: /
subtitle:
nav: false
nav_order: 1
---

<!-- Chinese handwritten-style font for the Chinese name -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">

<style>
  .post-header {
    display: none;
  }

  .home-name {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    font-size: 2.8rem;
  }

  /* Cute handwritten Chinese font */
  .home-name-cn {
    margin-left: 0.4rem;
    font-family: "ZCOOL KuaiLe", "Microsoft YaHei", "PingFang SC", sans-serif !important;
    font-size: 0.72em;
    font-weight: 400;
    white-space: nowrap;
  }

  .home-top {
    display: grid;
    grid-template-columns: 330px minmax(0, 1fr);
    column-gap: clamp(3rem, 8vw, 8.5rem);
    align-items: start;
    margin-top: 1.5rem;
    margin-bottom: 4rem;
  }

  .home-photo-box {
    width: 330px;
    max-width: 100%;
  }

  .home-photo {
    display: block;
    width: 330px;
    max-width: 100%;
    height: auto;
    border-radius: 6px;
  }

  .home-intro {
    max-width: 620px;
    padding-top: 1rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  .home-intro p:last-child {
    margin-bottom: 0;
  }

  .home-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: clamp(3rem, 8vw, 8rem);
    align-items: start;
    margin-top: 2rem;
  }

  .home-section {
    min-width: 0;
  }

  .home-section h2 {
    margin-bottom: 1rem;
  }

  .home-section li {
    margin-bottom: 0.3rem;
  }

  .home-section a {
    overflow-wrap: anywhere;
  }

  @media (max-width: 900px) {
    .home-top {
      display: block;
    }

    .home-photo-box {
      margin-bottom: 2rem;
    }

    .home-intro {
      max-width: 100%;
      padding-top: 0;
    }

    .home-bottom {
      display: block;
    }

    .home-section + .home-section {
      margin-top: 2.5rem;
    }
  }
</style>

<h1 class="home-name">
  Jiangcheng You <span class="home-name-cn">尤江城</span>
</h1>

<div class="home-top">

  <div class="home-photo-box">
    <img
      class="home-photo z-depth-1"
      src="{{ '/assets/img/tiger.jpg' | relative_url }}"
      alt="Tiger cub"
    >
  </div>

  <div class="home-intro">
    <p>
      I am a Ph.D. student in mathematics at the University of Science and Technology of China (USTC), working in differential geometry and geometric analysis.
    </p>

    <p>
      My current research focuses on scalar curvature in Riemannian geometry and geometric relativity. I am particularly interested in rigidity, stability, and topological constraints arising from curvature conditions, as well as initial data sets, positive energy, and spacetime geometry. I am also interested in Yang–Mills theory and gauge theory, especially connections, moduli spaces, and geometric partial differential equations.
    </p>
  </div>

</div>

<div class="home-bottom">

  <div class="home-section">
    <h2>Research Interests</h2>

    <ul>
      <li>Scalar curvature and Riemannian geometry</li>
      <li>Geometric relativity</li>
      <li>Yang–Mills theory and gauge theory</li>
    </ul>
  </div>

  <div class="home-section">
    <h2>Contact</h2>

    <ul>
      <li>
        Email:
        <a href="mailto:yjcmp@mail.ustc.edu.cn">yjcmp@mail.ustc.edu.cn</a>,
        <a href="mailto:youjiangchengmp@163.com">youjiangchengmp@163.com</a>,
        <a href="mailto:yjcmp27@gmail.com">yjcmp27@gmail.com</a>
      </li>

      <li>
        arXiv:
        <a href="https://arxiv.org/search/?query=Jiangcheng+You&searchtype=author">Jiangcheng You</a>
      </li>

      <li>
        ResearchGate:
        <a href="https://www.researchgate.net/profile/Jiangcheng-You">Jiangcheng You</a>
      </li>

      <li>
        Zhihu:
        <a href="https://www.zhihu.com/people/you-jiang-cheng-35">尤江城</a>
      </li>

      <li>
        Xiaohongshu:
        <a href="https://www.xiaohongshu.com/user/profile/6636fe6c0000000007004b38">尤江城</a>
      </li>
    </ul>
  </div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": "https://yjcmp27.github.io/",
  "name": "Jiangcheng You",
  "description": "Academic homepage of Jiangcheng You, a Ph.D. student in mathematics at the University of Science and Technology of China working in differential geometry and geometric analysis.",
  "mainEntity": {
    "@type": "Person",
    "name": "Jiangcheng You",
    "alternateName": [
      "You Jiangcheng",
      "尤江城"
    ],
    "url": "https://yjcmp27.github.io/",
    "email": "mailto:yjcmp@mail.ustc.edu.cn",
    "jobTitle": "Ph.D. Student in Mathematics",
    "affiliation": {
      "@type": "CollegeOrUniversity",
      "name": "University of Science and Technology of China",
      "alternateName": "USTC",
      "url": "https://www.ustc.edu.cn/"
    },
    "knowsAbout": [
      "Differential geometry",
      "Geometric analysis",
      "Riemannian geometry",
      "Scalar curvature",
      "Geometric relativity",
      "Yang–Mills theory",
      "Gauge theory",
      "Geometric partial differential equations"
    ],
    "sameAs": [
      "https://arxiv.org/search/?query=Jiangcheng+You&searchtype=author",
      "https://www.researchgate.net/profile/Jiangcheng-You",
      "https://www.zhihu.com/people/you-jiang-cheng-35",
      "https://www.xiaohongshu.com/user/profile/6636fe6c0000000007004b38"
    ]
  }
}
</script>
