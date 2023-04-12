import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks } = props;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
        />
      ))}
    </div>
  );
}

export default TaskList;
