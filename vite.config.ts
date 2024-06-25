import { rmSync } from "node:fs";
import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import electron from "vite-electron-plugin";
import { loadViteEnv } from "vite-electron-plugin/plugin";

rmSync(path.join(__dirname, "dist-electron"), { recursive: true, force: true });

export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    electron({
      include: ["electron"],
      plugins: [loadViteEnv()],
    }),
  ],
});
