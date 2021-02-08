import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./MyComponent";

ReactDOM.render(
  // Note that this doesn't declare required prop requiredThing but that isn't an error in eslint
  // Helpfully it _is_ a warning in PhpStorm/WebStorm as a "HTML RequiredAttribute" error
  <MyComponent something={{ value: "a b c" }} />,
  document.getElementById("root")
);
