import fs from "fs";
import path from "path";

const baseDir = path.resolve("public/bildes");
const categories = [
  { dir: "ceremonija", title: "Ceremonija" },
  { dir: "sveiksana", title: "Sveikšana" },
  { dir: "svinibas", title: "Svinības" },
  { dir: "micosana", title: "Mičošana" },
];

const gallery = {};

for (const category of categories) {
  const folderPath = path.join(baseDir, category.dir);

  if (fs.existsSync(folderPath)) {
    const files = fs
      .readdirSync(folderPath)
      .filter((f) => /\.(png|jpe?g|gif|webp|avif)$/i.test(f))
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
      ) // sort naturally
      .map((f, i) => ({
        src: `/bildes/${category.dir}/${f}`,
        alt: `${category.dir}-${i + 1}`,
      }));

    gallery[category.title] = files;
  } else {
    console.warn(`⚠️ Folder not found: ${folderPath}`);
  }
}

fs.writeFileSync("src/galleryData.json", JSON.stringify(gallery, null, 2));

console.log(
  "✅ galleryData.json generated with",
  Object.keys(gallery).length,
  "sections"
);
