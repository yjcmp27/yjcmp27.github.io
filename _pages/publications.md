---
layout: page
title: Papers
permalink: /publications/
description:
nav: true
nav_order: 2
---

<style>
  html {
    scroll-behavior: smooth;
  }

  .papers-layout {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    column-gap: 2.8rem;
    align-items: start;
  }

  .papers-sidebar {
    position: sticky;
    top: 5.5rem;
    padding-top: 0.4rem;
  }

  .papers-sidebar ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .papers-sidebar li {
    margin-bottom: 1rem;
  }

  .papers-sidebar a {
    color: var(--global-text-color);
    text-decoration: none;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .papers-sidebar a:hover {
    color: var(--global-theme-color);
  }

  .papers-content {
    min-width: 0;
  }

  .paper-category-title {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    scroll-margin-top: 5.5rem;
  }

  .papers-content .paper-category-title:first-child {
    margin-top: 0;
  }

  @media (max-width: 900px) {
    .papers-layout {
      display: block;
    }

    .papers-sidebar {
      position: static;
      margin-bottom: 2.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--global-divider-color);
    }

    .papers-sidebar ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem 1.4rem;
    }

    .papers-sidebar li {
      margin-bottom: 0;
    }
  }
</style>

<div class="papers-layout">

  <nav class="papers-sidebar" aria-label="Paper categories">
    <ul>
      <li>
        <a href="#scalar-curvature">
          Scalar curvature and Riemannian geometry
        </a>
      </li>

      <li>
        <a href="#geometric-relativity">
          Geometric relativity
        </a>
      </li>

      <li>
        <a href="#yang-mills">
          Yang–Mills theory and gauge theory
        </a>
      </li>
    </ul>
  </nav>

  <div class="papers-content">

    <h2
      id="scalar-curvature"
      class="paper-category-title"
    >
      Scalar curvature and Riemannian geometry
    </h2>

    <div class="publications">

    {% bibliography --query @*[category=geometry] %}

    </div>

    <h2
      id="geometric-relativity"
      class="paper-category-title"
    >
      Geometric relativity
    </h2>

    <div class="publications">

    {% bibliography --query @*[category=relativity] %}

    </div>

    <h2
      id="yang-mills"
      class="paper-category-title"
    >
      Yang–Mills theory and gauge theory
    </h2>

    <div class="publications">

    {% bibliography --query @*[category=gauge] %}

    </div>

  </div>

</div>
