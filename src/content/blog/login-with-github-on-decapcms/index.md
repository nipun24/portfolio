---
title: Login with Github on DecapCMS
description: Learn how to handle OAuth with GitHub for DecapCMS using Vercel Functions
draft: true
tags:
  - Vercel
  - DecapCMS
  - OAuth
  - Github
  - serverless
  - astro
date: 2025-03-27T12:27:00.000Z
---
I created this tutorial as I could not find a simple and easy to understand method to add OAuth using Vercel functions to [DecapCMS](https://decapcms.org). But in this tutorial I'll also show you how to add DecamCMS to an existing Astro project to edit the site using an admin interface.

## Getting started

For this tutorial we'll need the following:

1. A Github and Vercel account (its free).
2. A project in which you want to add DecapCMS. We'll use the [Astro blog template](https://astro.build/themes/details/blog/) for this tutorial.
3. A custom domain (not mandatory but good to have).

Let's get started 

## Creating the Astro site

Create a new project with the Astro blog template. You can keep the directory name as `blog`.

```shell
npm create astro@latest -- --template blog
```

After following the steps you'll have the following directory structure.

```restructuredtext
📦blog
 ┣ 📂.astro
 ┣ 📂.vscode
 ┣ 📂public
 ┣ 📂src
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜astro.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```
