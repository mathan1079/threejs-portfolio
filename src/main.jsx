import React from "react";
import ReactDOM from "react-dom/client";
import { personalDetails } from "./constants"; // Importing personalDetails
import App from "./App";
import "./index.css";

// Set the document title using personalDetails.name
document.title = `${personalDetails.name} | Portfolio`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
