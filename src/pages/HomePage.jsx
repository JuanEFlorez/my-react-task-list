import React from "react";
import TaskList from "../components/TaskList";
import Header from "../components/Header";

function HomePage() {
  return (
    <div>
      <h1 className="welcome" style={{ textAlign: "center" }}>
        Welcome to the My Task-List application.
      </h1>
      <TaskList showDescription={true} />
    </div>
  );
}

export default HomePage;
