import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Cards from "./components/Cards";
import Card from "./components/Card";
import TaskBoard from "./components/TaskBoard";
import DesignWeeklyBoard from "./components/DesignWeeklyBoard";
import StarterBoard from "./components/StarterBoard";
import PersonalTask from "./components/PersonalTask";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskBoard />
    <Cards />
    <StarterBoard />
    <DesignWeeklyBoard />
    <PersonalTask />
    <Card />
    {/* <App /> */}
  </StrictMode>
);
