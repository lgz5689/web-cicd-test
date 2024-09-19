import fs from "node:fs";

import { contextBridge, ipcRenderer, shell } from "electron";

import {
  IElectronAPI,
  IpcRenderToMain,
  IpcRenderToMainDataMap,
  IpcRenderToMainSync,
  IpcRenderToMainSyncDataMap,
} from "../constants";

const ipcInvoke = <T extends IpcRenderToMain>(
  channel: T,
  ...arg: unknown[]
): Promise<IpcRenderToMainDataMap[T]> => {
  return ipcRenderer.invoke(channel, ...arg);
};

const ipcSendSync = <T extends IpcRenderToMainSync>(
  channel: T,
  ...arg: unknown[]
): IpcRenderToMainSyncDataMap[T] => {
  return ipcRenderer.sendSync(channel, ...arg);
};

const Api: IElectronAPI = {
  // ipc
  ipcInvoke,
  ipcSendSync,

  // func
  fileExists: fs.existsSync,
  getPlatform: () => process.platform,
  openFile: shell.openPath,
  showFile: shell.showItemInFolder,
};

contextBridge.exposeInMainWorld("electronAPI", Api);
