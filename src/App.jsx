import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Subir a Git el proyecto integrador de React",
      completed: false,
    },
    { id: 2, name: "Duolingo por 30 dias.", completed: true },
    { id: 3, name: "Empezar react Hooks.", completed: false },
    { id: 4, name: "Solucionar dudas.", completed: true },
  ]);

  return (
    <div className="app">
      <Header title="Mi Lista de Tareas" />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
