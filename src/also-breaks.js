import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./MyComponent";

// This breaks because something is valid but it doesn't have a value prop
// so crashes at line 5 in MyComponent
ReactDOM.render(
  <MyComponent something={{}} requiredThing />,
  document.getElementById("root")
);
