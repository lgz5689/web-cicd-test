import { app } from "electron";

import { initI18n } from "../i18n";
import { setIpcMainListener } from "./ipcHandlerManage";
import { createTray } from "./trayManage";
import { createMainWindow } from "./windowManage";

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const init = () => {
  initI18n();
  createMainWindow();
  createTray();
};

setIpcMainListener();

app.whenReady().then(init);
