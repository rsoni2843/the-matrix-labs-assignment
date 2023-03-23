import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NavbarProvider from "./context/NavbarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>,
);
