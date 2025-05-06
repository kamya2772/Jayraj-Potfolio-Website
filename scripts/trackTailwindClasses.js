const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "../src");
const classRegex = /className\s*=\s*{?\s*["'`]([^"'`]+)["'`]}/g;

let allClasses = new Set();

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      let match;
      while ((match = classRegex.exec(content)) !== null) {
        const classes = match[1].split(/\s+/);
        classes.forEach((cls) => allClasses.add(cls));
      }
    }
  });
}

walkDir(srcDir);

const outputPath = path.join(__dirname, "tailwind-classes.txt");
fs.writeFileSync(outputPath, Array.from(allClasses).sort().join("\n"), "utf-8");
console.log(
  `Extracted ${allClasses.size} unique Tailwind classes to tailwind-classes.txt`
);
