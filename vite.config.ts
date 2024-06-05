import { rmSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-electron-plugin";
import { loadViteEnv } from "vite-electron-plugin/plugin";

rmSync(path.join(__dirname, "dist-electron"), { recursive: true, force: true });

export default defineConfig({
  plugins: [
    react(),
    electron({
      include: ["electron"],
      plugins: [loadViteEnv()],
    }),
  ],
});
