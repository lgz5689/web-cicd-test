import { app } from "electron";
import { createMainWindow } from "./windowManage";
import { initI18n } from "../i18n";
import { createTray } from "./trayManage";

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const init = () => {
  initI18n();
  createMainWindow();
  createTray();
};

app.whenReady().then(init);
