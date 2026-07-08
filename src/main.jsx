// Self-hosted Roboto (weight 400) so no render-blocking third-party font
// connections are needed.
import "@fontsource/roboto/400.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />
    <App />
  </StrictMode>
);
