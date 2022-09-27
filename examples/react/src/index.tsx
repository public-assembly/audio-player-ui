import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";

const domContainer = document.getElementById("main");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <App>
    <h1>Hello, world!</h1>
  </App>
);
