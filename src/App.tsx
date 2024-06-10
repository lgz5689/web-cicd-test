import { useState } from "react";

const App = () => {
  // eslint has error
  // const [first, setfirst] = useState("");

  // eslint not error
  const [first] = useState("");

  // auto format
  // if (first) {
  //   console.log(first);
  // }

  if (first) {
    console.log(first);
  }

  return (
    <div className="flex h-screen flex-col bg-[#1B1B1F]">
      <div className="app-drag h-9 min-h-9 w-full bg-[#282c34]"></div>
      <div className="flex flex-1 items-center justify-center text-6xl font-bold text-sky-400">
        Web Template
      </div>
    </div>
  );
};

export default App;
