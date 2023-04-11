import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const DATA = [
  { name: "First", price: "12", amount: "1", key: 0, id: 0 },
  { name: "Second", price: "10", amount: "3", key: 1, id: 1 },
  { name: "Third", price: "20", amount: "2", key: 2, id: 2 },
];

root.render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>
);
