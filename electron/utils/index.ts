import process from "node:process";

export const isLinux = process.platform == "linux";
export const isWin = process.platform == "win32";
export const isMac = process.platform == "darwin";
export const isProd = process.env.NODE_ENV === "production";