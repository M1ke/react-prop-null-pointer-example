import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./MyComponent";

// This breaks because something is empty so crashes at line 11 in MyComponent (runtime)
ReactDOM.render(<MyComponent requiredThing />, document.getElementById("root"));
