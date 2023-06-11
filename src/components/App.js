import React from "react";
import ColorList from "./ColorList";

function App() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  return (
    <div>
      <ColorList esin = {colors} />
    </div>
  );
}

export default App;
