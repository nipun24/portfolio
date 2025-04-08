const fs = require("fs");
const fg = require("fast-glob");

const path = require("path");
const { createCanvas } = require("canvas");
const crypto = require("crypto");

// Config
const postsRoot = "content/blog/**/index.md";
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

fg.sync([postsRoot]).forEach((file) => {
  const imgPath = path.join(file.replace("index.md", ""), "featured.*");
  if (fg.sync([imgPath]).length > 0) {
    console.log(`⏩ Skipping: featued image for ${file} already exists`);
    return;
  }

  const content = fs.readFileSync(file, "utf8");
  const hash = crypto.createHash("sha1").update(content).digest("hex");
  const [color1, color2] = generateColorsFromHash(hash);
  const buffer = generateGradientImage(color1, color2);
  fs.writeFileSync(file.replace("index.md", gradientFileName), buffer);
  console.log(`✅ Generated ${gradientFileName} for ${folder}`);
});

// fs.readdirSync(postsRoot).forEach((folder) => {
//   const postDir = path.join(postsRoot, folder);
//   const indexPath = path.join(postDir, "index.md");
//   const outPath = path.join(postDir, gradientFileName.replace(".png", ""));
//   console.log(outPath);
//   if (fs.existsSync(outPath)) {
//     console.log(`⏩ Skipping: ${folder} (featured.png already exists)`);
//     return;
//   }

//   if (!fs.existsSync(indexPath)) return;

//   const content = fs.readFileSync(indexPath, "utf8");
//   const hash = crypto.createHash("sha1").update(content).digest("hex");
//   const [color1, color2] = generateColorsFromHash(hash);

//   const buffer = generateGradientImage(color1, color2);

//   fs.writeFileSync(outPath, buffer);

//   console.log(`✅ Generated ${gradientFileName} for ${folder}`);
// });
