import { createRoot, hydrateRoot } from "react-dom/client";

import { App } from "./App.tsx";
// import "./global.css";

const container = document.getElementById("app");
if (container) {
  const root = hydrateRoot(container, <App initialData={window.initialData} />);
  // root.render(<App initialData={window.initialData} />);
} else {
  throw new Error("React DOM: No root directory");
}
