import { app, Menu, Tray } from "electron";
import { t } from "i18next";

import { trayIcon } from "./appManage";
import { hideWindow, showMainWindow, toggleDevTools } from "./windowManage";

let appTray: Tray | null;
export const createTray = () => {
  const trayMenu = Menu.buildFromTemplate([
    {
      label: t("showWindow"),
      click: showMainWindow,
    },
    {
      label: t("hideWindow"),
      click: hideWindow,
    },
    {
      label: t("toggleDevTools"),
      click: toggleDevTools,
    },
    {
      label: t("quit"),
      click: app.quit,
    },
  ]);
  appTray = new Tray(trayIcon);
  appTray.setToolTip(app.getName());
  appTray.on("click", showMainWindow);
  appTray.setContextMenu(trayMenu);
};

export const destroyTray = () => {
  if (!appTray || appTray.isDestroyed()) return;
  appTray.destroy();
  appTray = null;
};

export const setTrayTitle = (num: number) => {
  if (!appTray || appTray.isDestroyed()) {
    return;
  }
  appTray.setTitle(num === 0 ? "" : num > 99 ? "99+" : num + "");
};
