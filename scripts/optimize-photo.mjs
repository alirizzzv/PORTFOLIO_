import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(
  root,
  "WhatsApp Image 2026-06-30 at 14.58.54.jpeg"
);
const publicDir = join(root, "public");

await sharp(source)
  .resize(900, 1200, {
    fit: "cover",
    position: "attention",
  })
  .webp({ quality: 82 })
  .toFile(join(publicDir, "ali-husain-rizvi.webp"));

await sharp(source)
  .resize(900, 1200, {
    fit: "cover",
    position: "attention",
  })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(join(publicDir, "ali-husain-rizvi.jpg"));

console.log("Photo optimized to public/ali-husain-rizvi.webp and .jpg");
