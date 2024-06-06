import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";
import prettyBytes from "pretty-bytes";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "..", "dist");

async function calculateSize(directory) {
  try {
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
  } catch (error) {
    console.error(`Error calculating size for directory ${directory}:`, error);
    process.exit(1);
  }
}

async function main() {
  try {
    const distSize = await calculateSize(distPath);
    console.log(prettyBytes(distSize));
  } catch (error) {
    console.error("Error in main function:", error);
    process.exit(1);
  }
}

main();
