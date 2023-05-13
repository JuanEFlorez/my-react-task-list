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

  // Se utiliza el hook useTaskList para obtener las tareas del estado global
  const { tasks, createTask, deleteTask, updateTask } = useTaskList();

  // Estado local para el nombre de la nueva tarea
  const [newTaskName, setNewTaskName] = useState("");

  // Estado local para el id de la tarea a eliminar
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Función para agregar una nueva tarea
  function handleAddTask() {
    if (newTaskName) {
      // Se crea la tarea con el nombre especificado
      createTask(newTaskName);

      // Se reinicia el estado local del nombre de la nueva tarea
      setNewTaskName("");
    }
  }

  // Función para manejar la eliminación de una tarea
  function handleDeleteTask(id) {
    // Se establece el id de la tarea a eliminar en el estado local
    setTaskToDelete(id);
  }

  // Función para confirmar la eliminación de una tarea
  function confirmDelete() {
    // Se elimina la tarea utilizando el id establecido en el estado local
    deleteTask(taskToDelete);

    // Se reinicia el estado local del id de la tarea a eliminar
    setTaskToDelete(null);
  }

  // Función para cancelar la eliminación de una tarea
  function cancelDelete() {
    // Se reinicia el estado local del id de la tarea a eliminar
    setTaskToDelete(null);

  }

  return (
    <div className="task-list">

      <div className="task-form">

      <div>
        {/* Input para ingresar el nombre de una nueva tarea */}

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


        />
        {/* Botón para agregar una nueva tarea */}
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Mapeo de las tareas para mostrar cada una */}

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

          // Función para manejar el cambio de estado completado de una tarea
          onCheck={(id, completed) => updateTask(id, { completed })}
          // Función para manejar la eliminación de una tarea
          onDelete={(id) => handleDeleteTask(id)}
          // Función para manejar la edición de una tarea

        />
      ))}

      {/* Se muestra un mensaje de confirmación antes de eliminar una tarea */}
      {taskToDelete && (
        <div>
          <p>Are you sure you want to delete this task?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}
export default TaskList;
