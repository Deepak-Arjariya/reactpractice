import * as React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePI()}</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);
