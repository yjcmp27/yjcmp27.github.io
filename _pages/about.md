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

  /* 统一的双栏布局容器 */
  .home-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: clamp(3rem, 8vw, 8rem);
    align-items: start;
  }

  /* 第二排与第三排之间的间距 */
  .home-bottom + .home-bottom {
    margin-top: 3rem;
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

  /* 底部个人感悟的样式 */
  .home-footer-note {
    margin-top: 5rem;
    margin-bottom: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e0e0e0; /* 与上方内容用淡淡的横线隔开 */
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  .home-footer-note p {
    margin-bottom: 0;
  }

  /* 底部名言单独样式 */
  .home-footer-note .quote {
    text-align: center;
    margin: 1.5rem 0;          /* 上下增加一些间距，看起来更舒展 */
    font-size: 1.25rem;        /* 稍微放大一点字号 */
    font-family: "ZCOOL KuaiLe", "Microsoft YaHei", "PingFang SC", sans-serif !important; /* 使用你之前加载的可爱中文字体 */
    color: #555;               /* 字体颜色稍微变淡，增加文学感 */
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

    .home-bottom + .home-bottom {
      margin-top: 2.5rem;
    }

    .home-section + .home-section {
      margin-top: 2.5rem;
    }
    
    .home-footer-note {
      margin-top: 3rem;
      padding-top: 1.5rem;
    }
  }
</style>

<h1 class="home-name">
  Jiangcheng You <span class="home-name-cn">尤江城</span>
</h1>

<!-- 第一排：照片与简介 -->
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
      My current research focuses on scalar curvature in Riemannian geometry and geometric relativity. I am particularly interested in topological constraints arising from curvature conditions, as well as mathematical interpretations of theories from general relativity. I am also interested in Yang–Mills theory and gauge theory, especially moduli spaces and geometric partial differential equations.
    </p>
  </div>

</div>

<!-- 第二排：学术履历与研究兴趣 -->
<div class="home-bottom">

  <div class="home-section">
    <h2>Education &amp; Experience</h2>

    <ul>
      <li>
        <strong>B.S. in Mathematics</strong>, Southeast University, <em>2016 – 2020</em>
      </li>
      <li>
        <strong>家里蹲</strong>, 家里蹲大学, <em>2020 – 2022</em>
      </li>
      <li>
        <strong>Ph.D. in Mathematics</strong>, University of Science and Technology of China (USTC), <em>2022 – Present</em>
      </li>
    </ul>
  </div>

  <div class="home-section">
    <h2>Research Interests</h2>

    <ul>
      <li>Scalar curvature and Riemannian geometry</li>
      <li>Geometric relativity</li>
      <li>Yang–Mills theory and gauge theory</li>
    </ul>
  </div>

</div>

<!-- 第三排：常用链接与联系方式 -->
<div class="home-bottom">

  <div class="home-section">
    <h2>Useful Links</h2>

    <ul>
      <li>
        <a
          href="https://math.ustc.edu.cn/main.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          School of Mathematical Sciences, USTC
        </a>
      </li>

      <li>
        <a
          href="https://igp.ustc.edu.cn/main.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Institute of Geometry and Physics, USTC
        </a>
      </li>

      <li>
        <a
          href="https://math.seu.edu.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          School of Mathematics, Southeast University
        </a>
      </li>

      <li>
        <a
          href="https://yauc.seu.edu.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shing-Tung Yau Center, Southeast University
        </a>
      </li>
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

<!-- 第四排：页面底端的个人感悟 -->
<div class="home-footer-note">
  <p>
    Besides mathematics, I enjoy watching movies and capturing the present moment through words or photographs. I hope life follows
  </p>
  
  <p class="quote">“乘兴而来，兴尽而返。”</p>
  
  <p>
    I look forward to exchanging thoughts on mathematics and life with you.
  </p>
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
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "University of Science and Technology of China",
        "alternateName": "USTC"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Southeast University"
      }
    ],
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
