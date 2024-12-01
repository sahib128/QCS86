import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot for React 18+
import App from "./App"; // Ensure this path is correct
import "./index.css"; // Merge styles as needed
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById('root')); // Create root
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
