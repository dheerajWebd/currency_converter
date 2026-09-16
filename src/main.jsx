import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Maincompo from "./component/Newcurrency.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Maincompo />
    </>
  </StrictMode>
);
