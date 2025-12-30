
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return React.createElement(
    "div",
    { className: "p-10 text-center" },
    React.createElement(
      "h1",
      { className: "text-3xl font-bold" },
      "مرحبا بكم في المتجر"
    ),
    React.createElement(
      "p",
      { className: "mt-4 text-gray-600" },
      "أفضل المنتجات بأحسن الأسعار"
    )
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(React.createElement(App));
