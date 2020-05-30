import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux"; // 1.
import store from "./src/store";  // 2.

import App from "./src/components/app";
import "./src/styles/index.scss";

ReactDOM.render(
  <Provider store={store}>  { /* 將store作為props傳遞給其他component */ }
    <App />
  </Provider>,
  document.getElementById("app")
);