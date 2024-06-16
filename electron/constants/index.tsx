export enum IpcRenderToMain {
  ShowDevTools = "showDevTools",
  ShowMainWindow = "showMainWindow",
  ClearChildWindows = "clearChildWindows",
}

export type IpcRenderToMainDataMap = {
  [IpcRenderToMain.ShowDevTools]: void;
  [IpcRenderToMain.ShowMainWindow]: void;
  [IpcRenderToMain.ClearChildWindows]: void;
};

export enum IpcRenderToMainSync {
  CheckChildWindowStatus = "checkChildWindowStatus",
}

export type IpcRenderToMainSyncDataMap = {
  [IpcRenderToMainSync.CheckChildWindowStatus]: boolean;
};

export interface IElectronAPI {
  fileExists: (path: string) => boolean;
  getPlatform: () => string;
  ipcInvoke: <T extends keyof IpcRenderToMainDataMap>(
    channel: T,
    ...arg: unknown[]
  ) => Promise<IpcRenderToMainDataMap[T]>;
  ipcSendSync: <T extends keyof IpcRenderToMainSyncDataMap>(
    channel: T,
    ...arg: unknown[]
  ) => IpcRenderToMainSyncDataMap[T];
  openFile: (path: string) => Promise<string>;
  showFile: (path: string) => void;
}
