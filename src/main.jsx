import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ArticleProvider } from "./contexts/articleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ArticleProvider>
    <App />
  </ArticleProvider>
);
