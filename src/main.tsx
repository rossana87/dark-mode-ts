import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.tsx'
import { ThemeProvider } from "./assets/context/Context";
import Container from "./Components/Container";
import "./App.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  </React.StrictMode>
);
