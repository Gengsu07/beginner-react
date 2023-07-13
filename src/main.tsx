import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App_exercise from "./App_exercise";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <App_exercise />
  </React.StrictMode>
);
