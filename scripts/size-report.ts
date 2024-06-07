import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";
import prettyBytes from "pretty-bytes";

async function calculateSize(directory: string) {
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
  const distPath = process.argv[2] || path.resolve(__dirname, "..", "dist");
  const distSize = await calculateSize(distPath);
  process.stdout.write(prettyBytes(distSize));
}

main();
