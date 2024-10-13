import "./scss/body.scss"

import React from "react";
import ReactDOM from "react-dom/client";
import { EntryPoint } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EntryPoint />
  </React.StrictMode>
);
