import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Task List</h1>
      <TaskList />
      <div className="add-task-form"></div>
    </div>
  );
}

export default App;
