import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { LandingPageApp } from "@/LandingPageApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPageApp />
  </StrictMode>,
);
