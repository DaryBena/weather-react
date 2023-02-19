import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
    <small>
      <a
        href="https://github.com/DaryBena/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code,
      </a>
      by Dary Bena
    </small>
  </StrictMode>
);
