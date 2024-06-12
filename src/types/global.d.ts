export interface IElectronAPI {
  fileExists: (path: string) => boolean;
  getPlatform: () => string;
  openFile: (path: string) => Promise<string>;
  showFile: (path: string) => void;
}

declare global {
  interface Window {
    electronAPI?: IElectronAPI;
  }
}
