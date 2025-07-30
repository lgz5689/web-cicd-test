import { BrowserWindow, ipcMain } from "electron";

import { IpcRenderToMain, IpcRenderToMainSync } from "../constants";
import {
  childWindowMap,
  clearChildWindows,
  showMainWindow,
  toggleDevTools,
} from "./windowManage";

export const setIpcMainListener = () => {
  ipcMain.handle(IpcRenderToMain.ShowMainWindow, () => {
    showMainWindow();
  });

  ipcMain.handle(IpcRenderToMain.ShowDevTools, () => {
    toggleDevTools();
  });

  ipcMain.handle(IpcRenderToMain.ClearChildWindows, () => {
    clearChildWindows();
  });

  ipcMain.on(IpcRenderToMainSync.CheckChildWindowStatus, (event, { key }) => {
    const childWindow = BrowserWindow.getAllWindows().find(
      (win) => win.id === childWindowMap[key],
    );
    event.returnValue = Boolean(childWindow);
  });
};
