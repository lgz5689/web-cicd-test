import { IpcRenderToMain, IpcRenderToMainSync } from "../electron/constants";

const App = () => {
  const ipc = () => {
    if (!window.electronAPI) return;
    window.electronAPI?.ipcInvoke(IpcRenderToMain.ShowDevTools);
    const b = window.electronAPI?.ipcSendSync(
      IpcRenderToMainSync.CheckChildWindowStatus,
      "main",
    );
    console.log(b);
  };

  return (
    <div className="flex h-screen flex-col bg-[#1B1B1F]">
      <div className="app-drag h-9 min-h-9 w-full bg-[#282c34]"></div>
      <div
        className="flex flex-1 items-center justify-center text-6xl font-bold text-sky-400"
        onClick={ipc}
      >
        Web Template
      </div>
    </div>
  );
};

export default App;
