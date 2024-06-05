import { join } from "node:path";
import { isProd, isWin } from "../utils";

export const electronDistPath = join(__dirname, "../");
export const distPath = join(electronDistPath, "../dist");
export const publicPath = isProd ? distPath : join(electronDistPath, "../public");

export const preload = join(__dirname, "../preload/index.js");
export const trayIcon = join(publicPath, `/icons/${isWin ? "icon.ico" : "tray.png"}`);
