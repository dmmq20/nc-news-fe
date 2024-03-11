import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ArticleProvider } from "./contexts/articleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </BrowserRouter>
);
