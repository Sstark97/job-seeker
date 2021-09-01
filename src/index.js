import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyles } from "./assets/styles/GlobalStyles";
import App from "./routes/App";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("app")
);
