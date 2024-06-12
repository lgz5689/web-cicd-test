import { contextBridge, shell } from "electron";
import fs from "node:fs";

import { IElectronAPI } from "../../src/types/global";

const Api: IElectronAPI = {
  fileExists: fs.existsSync,
  getPlatform: () => process.platform,
  openFile: shell.openPath,
  showFile: shell.showItemInFolder,
};

contextBridge.exposeInMainWorld("electronAPI", Api);
