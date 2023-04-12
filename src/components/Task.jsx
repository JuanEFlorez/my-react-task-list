import React from "react";

function Task(props) {
  const { id, name, completed } = props;

  return (
    <div className="task">
      <input type="checkbox" checked={completed} id={`task-${id}`} />
      <label htmlFor={`task-${id}`} className={completed ? "completed" : ""}>
        {name}
      </label>
    </div>
  );
}

export default Task;
