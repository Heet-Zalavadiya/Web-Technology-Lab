import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Demo, Demo3} from "./Components/Demo";
import Demo1 from "./Components/Demo1";
import { D1, D2, D3, name } from "./Components/Demo2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Demo />
    <Demo1 />
    <D1 />
    <D2 />
    <D3 />
    <Demo3 />
    <h1>{name}</h1>
  </StrictMode>
);
