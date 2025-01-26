import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import "./styles/index.css";
import App from "./App"; // Importerar App som hanterar tema och routing

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App-komponenten hanterar resten */}
  </React.StrictMode>,
  document.getElementById("root")
);
