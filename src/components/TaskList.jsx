import React, { useState } from "react";
import Task from "./Task";
import useTaskList from "../hooks/useTaskList";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskList();
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function handleAddTask() {
    if (newTaskName.length > 3) {
      createTask(newTaskName, newTaskDescription);
      setNewTaskName("");
      setNewTaskDescription("");
    } else {
      alert("Task name must have more than 3 characters.");
    }
  }

  function handleDeleteTask(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  }

  return (
    <div className="task-list">
      <div className="task-form">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Task name*"
          id="task-name-input"
        />
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Description (optional)"
          id="task-description-input"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          completed={task.completed}
          onCheck={(id, completed) => updateTask(id, { completed })}
          onDelete={(id) => handleDeleteTask(id)}
          onEdit={(id, name, description) =>
            updateTask(id, { name, description })
          }
        />
      ))}
    </div>
  );
}

export default TaskList;
