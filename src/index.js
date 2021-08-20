import React from "react";
import ReactDom from "react-dom";
import AppProvider from "./state/appProvider";
import App from "./App";

ReactDom.render(<AppProvider><App/></AppProvider>, document.getElementById("root"));
