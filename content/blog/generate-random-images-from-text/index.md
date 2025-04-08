---
title: Generate random images from text
description: Learn how to generate random gradient images from any text useful
  for adding feature images to blogs and much more!
draft: true
tags:
  - image
  - javascript
  - placeholder
date: 2025-04-08T14:25:00.000Z
---
How often do you need placeholder images or thumbnail images for your blog or other websites. Finding appropriate images on Unspash or other stock image sites takes a lot of time. So I created this website to generate images from the contents of any text file. Images generated are unique to the contents of that file so every image is different.

You can use the website or use the script to use it in your own project.

```javascript
const fs = require("fs");
const path = require("path");
const { createCanvas } = require("canvas");
const crypto = require("crypto");

// Config
const postsRoot = "content/blog";
const gradientFileName = "featured.png";
const width = 1200;
const height = 630;

function generateGradientImage(color1, color2) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add noise: draw semi-transparent dots
  const noiseDensity = 0.1; // 4% of pixels
  const totalPixels = Math.floor(width * height * noiseDensity);

  for (let i = 0; i < totalPixels; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random() * 0.08; // subtle opacity
    const gray = Math.floor(Math.random() * 255);
    ctx.fillStyle = `rgba(${gray},${gray},${gray},${alpha})`;
    ctx.fillRect(x, y, 1, 1);
  }

  return canvas.toBuffer("image/png");
}

function generateColorsFromHash(hash) {
  return ["#" + hash.slice(0, 6), "#" + hash.slice(6, 12)];
}

fs.readdirSync(postsRoot).forEach((folder) => {
  const postDir = path.join(postsRoot, folder);
  const indexPath = path.join(postDir, "index.md");
  const outPath = path.join(postDir, gradientFileName);
  if (fs.existsSync(outPath)) {
    console.log(`⏩ Skipping: ${folder} (feature.png already exists)`);
    return;
  }

  if (!fs.existsSync(indexPath)) return;

  const content = fs.readFileSync(indexPath, "utf8");
  const hash = crypto.createHash("sha1").update(content).digest("hex");
  const [color1, color2] = generateColorsFromHash(hash);

  const buffer = generateGradientImage(color1, color2);

  fs.writeFileSync(outPath, buffer);

  console.log(`✅ Generated ${gradientFileName} for ${folder}`);
});

```
