---
title: Generate random images from text
description: Learn how to generate random gradient images from any text useful
  for adding feature images to blogs and much more!
draft: false
tags:
  - image
  - javascript
  - placeholder
date: 2025-04-08T14:25:00.000Z
---
How often do you need placeholder images or thumbnail images for your blog or other websites. Finding appropriate images on Unspash or other stock image sites takes a lot of time. So I created this [website](#) to generate images from the contents of any text file. Images generated are unique to the contents of that file so every image is different.

You can use the [website](#) or use the script to use it in your own project.

## Running the script

1. Installing the dependencies

   ```shell
   npm i canvas slugify
   ```
2. Create a file `image-gen.js`.

   ```javascript
   const fs = require("fs");
   const path = require("path");
   const { createCanvas } = require("canvas");
   const crypto = require("crypto");

   // Config
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

     // Add noise
     const noiseDensity = 0.1;
     const totalPixels = Math.floor(width * height * noiseDensity);
     for (let i = 0; i < totalPixels; i++) {
       const x = Math.floor(Math.random() * width);
       const y = Math.floor(Math.random() * height);
       const alpha = Math.random() * 0.08;
       const gray = Math.floor(Math.random() * 255);
       ctx.fillStyle = `rgba(${gray},${gray},${gray},${alpha})`;
       ctx.fillRect(x, y, 1, 1);
     }

     return canvas.toBuffer("image/png");
   }

   function generateColorsFromHash(hash) {
     return ["#" + hash.slice(0, 6), "#" + hash.slice(6, 12)];
   }

   // Main
   const filePath = process.argv[2];

   if (!filePath) {
     console.error("❌ Usage: node image-gen.js path/to/file.txt");
     process.exit(1);
   }

   if (!fs.existsSync(filePath)) {
     console.error(`❌ File not found: ${filePath}`);
     process.exit(1);
   }

   const content = fs.readFileSync(filePath, "utf8");
   const hash = crypto.createHash("sha1").update(content).digest("hex");
   const [color1, color2] = generateColorsFromHash(hash);

   const buffer = generateGradientImage(color1, color2);

   const outputDir = path.dirname(filePath);
   const outPath = path.join(outputDir, gradientFileName);
   fs.writeFileSync(outPath, buffer);

   console.log(`✅ Generated ${gradientFileName} in ${outputDir}`);

   ```
3. Run the script

   ```shell
   node image-gen.js /path/to/file.txt
   ```
