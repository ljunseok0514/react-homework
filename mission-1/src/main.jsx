import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
