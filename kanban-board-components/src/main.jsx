import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Cards from "./components/Cards";
import Card from "./components/Card";
import TaskBoard from "./components/TaskBoard";
import DesignWeeklyBoard from "./components/DesignWeeklyBoard";
import StarterBoard from "./components/StarterBoard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskBoard />
    <Cards />
    <StarterBoard />
    <DesignWeeklyBoard />
    <Card />
    {/* <App /> */}
  </StrictMode>
);
