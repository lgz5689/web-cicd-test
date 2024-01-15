import fs from "fs/promises";
import path from "path";
import prettyBytes from "pretty-bytes";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "..", "dist");

async function calculateSize(directory) {
  const files = await fs.readdir(directory);

  let totalSize = 0;

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = await fs.stat(filePath);

    if (stats.isFile()) {
      totalSize += stats.size;
    } else if (stats.isDirectory()) {
      totalSize += await calculateSize(filePath);
    }
  }

  return totalSize;
}

async function main() {
  const distSize = await calculateSize(distPath);
  console.log(prettyBytes(distSize));
}

main();
