---
layout: page
title: Papers
permalink: /publications/
description:
nav: true
nav_order: 2
---

<style>
  .paper-category-title {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
</style>

<h2 class="paper-category-title">
  Scalar curvature and Riemannian geometry
</h2>

<div class="publications">

{% bibliography --query @*[category=geometry] %}

</div>

<h2 class="paper-category-title">
  Geometric relativity
</h2>

<div class="publications">

{% bibliography --query @*[category=relativity] %}

</div>

<h2 class="paper-category-title">
  Yang–Mills theory and gauge theory
</h2>

<div class="publications">

{% bibliography --query @*[category=gauge] %}

</div>
