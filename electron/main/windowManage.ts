import { join } from "node:path";

import { BrowserWindow } from "electron";

import { distPath, preload } from "./appManage";
import { registerShortcuts, unregisterShortcuts } from "./shortcutManage";

let mainWindow: BrowserWindow;

export const childWindowMap: { [key: string]: number } = {};

export const clearChildWindows = () => {
  for (const key in childWindowMap) {
    const childWindow = BrowserWindow.getAllWindows().find(
      (win) => win.id === childWindowMap[key],
    );
    if (childWindow?.isDestroyed()) {
      delete childWindowMap[key];
    }
    if (childWindow && !childWindow?.isDestroyed()) {
      childWindow.close();
      delete childWindowMap[key];
    }
  }
};

export function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "CD",
    frame: false,
    minWidth: 680,
    minHeight: 550,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      preload,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      devTools: true,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(join(distPath, "index.html"));
  }

  mainWindow.on("focus", () => {
    mainWindow?.flashFrame(false);
    registerShortcuts();
  });

  mainWindow.on("blur", () => {
    unregisterShortcuts();
  });
}

export const showMainWindow = () => {
  if (mainWindow.isMinimized()) {
    mainWindow.restore();
  }
  if (mainWindow.isVisible()) {
    mainWindow.focus();
  } else {
    mainWindow.show();
  }
};

export const hideWindow = () => {
  if (!mainWindow) return;
  mainWindow.hide();
};

export const toggleDevTools = () => {
  if (!mainWindow) return;
  if (mainWindow.webContents.isDevToolsOpened()) {
    mainWindow.webContents.closeDevTools();
  } else {
    mainWindow.webContents.openDevTools({
      mode: "detach",
    });
  }
};
