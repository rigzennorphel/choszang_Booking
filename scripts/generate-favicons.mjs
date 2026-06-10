/**
 * Builds transparent circular favicons from photo/logo.png
 * so the tab icon is visible on dark browser themes.
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "photo", "logo.png");

async function circularLogo(size) {
  const meta = await sharp(logoPath).metadata();
  const side = Math.min(meta.width ?? size, meta.height ?? size);
  const left = Math.floor(((meta.width ?? side) - side) / 2);
  const top = Math.floor(((meta.height ?? side) - side) / 2);

  const { data, info } = await sharp(logoPath)
    .extract({ left, top, width: side, height: side })
    .resize(size, size)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = w / 2 - 0.5;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const dx = x + 0.5 - cx;
      const dy = y + 0.5 - cy;
      if (Math.sqrt(dx * dx + dy * dy) > radius) {
        data[idx + 3] = 0;
      }
    }
  }

  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png();
}

const outputs = [
  { size: 32, paths: ["public/favicon.png", "app/icon.png"] },
  { size: 48, paths: ["public/favicon-48.png"] },
  { size: 180, paths: ["public/apple-icon.png", "app/apple-icon.png"] },
];

for (const { size, paths } of outputs) {
  const img = await circularLogo(size);
  for (const rel of paths) {
    const out = path.join(root, rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await img.clone().toFile(out);
    console.log(`Wrote ${rel}`);
  }
}

// 32x32 PNG used as favicon.ico fallback (Next accepts app/favicon.ico)
await (await circularLogo(32)).toFile(path.join(root, "app", "favicon.ico"));
console.log("Wrote app/favicon.ico");
