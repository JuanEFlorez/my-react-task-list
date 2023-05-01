import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks ? savedTasks : [];
  });
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask() {
    if (newTaskName) {
      const newTask = { id: Date.now(), name: newTaskName, completed: false };
      setTasks([...tasks, newTask]);
      setNewTaskName("");
    }
  }

  function handleCheck(id, completed) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="task-list">
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          onCheck={handleCheck}
        />
      ))}
    </div>
  );
}

export default TaskList;
