import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// ➡️ production일 때는 '/portfolio'를 사용하고, dev일 때는 '/'를 사용합니다.
const basename = import.meta.env.MODE === "production" ? "/portfolio" : "/"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
