---
layout: page
title: Poetry
permalink: /poetry/
description:
nav: true
nav_order: 8
---

<style>
  .poetry-intro {
    max-width: 850px;
    margin-top: 1rem;
    margin-bottom: 3rem;
    padding-left: 1.25rem;
    border-left: 2px solid var(--global-divider-color);
  }

  .poetry-quote {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.75;
    font-style: italic;
  }

  .poetry-attribution {
    margin-top: 0.8rem;
    text-align: right;
    font-size: 0.9rem;
    opacity: 0.65;
  }

  .poetry-list {
    margin-top: 1.5rem;
  }

  .poem-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 8rem auto;
    align-items: center;
    gap: 1.5rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .poem-title {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .poem-date {
    font-size: 0.9rem;
    text-align: right;
    white-space: nowrap;
    opacity: 0.65;
    font-variant-numeric: tabular-nums;
  }

  .poem-pdf {
    flex-shrink: 0;
  }

  .poem-pdf a {
    display: inline-block;
    padding: 0.25rem 0.8rem;
    border: 1px solid var(--global-text-color);
    border-radius: 3px;
    color: var(--global-text-color);
    text-decoration: none;
    font-size: 0.9rem;
  }

  .poem-pdf a:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
  }

  @media (max-width: 576px) {
    .poetry-intro {
      margin-bottom: 2.5rem;
      padding-left: 1rem;
    }

    .poetry-quote {
      font-size: 1rem;
      line-height: 1.7;
    }

    .poem-item {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 0.35rem 1rem;
    }

    .poem-date {
      grid-column: 1;
      grid-row: 2;
      text-align: left;
    }

    .poem-pdf {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }
</style>

<div class="poetry-intro">
  <p class="poetry-quote">
    “We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion
