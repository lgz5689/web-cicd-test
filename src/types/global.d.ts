import { IElectronAPI } from "../../electron/constants/index";

declare global {
  interface Window {
    electronAPI?: IElectronAPI;
  }
}
