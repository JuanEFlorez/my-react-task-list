import React, { useState, useEffect } from "react";

function Task(props) {
  const { id, name, completed, onCheck } = props;

  function handleCheck(e) {
    onCheck(id, e.target.checked);
  }

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={completed}
        id={`task-${id}`}
        onChange={handleCheck}
      />
      <label htmlFor={`task-${id}`} className={completed ? "completed" : ""}>
        {name}
      </label>
    </div>
  );
}

export default Task;
