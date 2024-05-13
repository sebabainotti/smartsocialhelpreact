import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById('page');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <App />
);
reportWebVitals();