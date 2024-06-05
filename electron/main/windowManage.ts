import { BrowserWindow } from "electron";
import { join } from "node:path";
import { distPath, preload } from "./appManage";

let mainWindow: BrowserWindow;
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
}

export const showWindow = () => {
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