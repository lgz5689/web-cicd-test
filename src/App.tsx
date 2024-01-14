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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <span
        style={{
          backgroundImage:
            "-webkit-linear-gradient(120deg, rgb(189, 52, 254) 30%, rgb(65, 209, 255))",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          backgroundAttachment: "scroll",
          fontSize: "56px",
          fontWeight: 700,
        }}
      >
        Web CICD Test
      </span>
    </div>
  );
};

export default App;
