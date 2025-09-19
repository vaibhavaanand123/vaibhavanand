import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HeadProvider } from "react-head";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </HeadProvider>
  </StrictMode>
);
