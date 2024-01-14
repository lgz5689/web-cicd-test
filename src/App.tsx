import { useState } from "react";

const App = () => {
  // eslint has error
  const [first, setfirst] = useState("");

  // eslint not error
  // const [first] = useState("");

  // auto format
  // if (first) {
  //   console.log(first);
  // }

  if (first) {
    console.log(first);
  }

  return <div>Hello World</div>;
};

export default App;
