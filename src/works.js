import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./MyComponent";

ReactDOM.render(
  <MyComponent something={{ value: "a b c" }} />,
  document.getElementById("root")
);
