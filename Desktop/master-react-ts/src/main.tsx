import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Application from "./TodoListClone/Application.tsx";
import ProductsList from "./Projets/Users/ProductsList.tsx";
// import User from "./Projets/Users/User.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductsList />
  </StrictMode>
);
