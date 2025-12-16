import React from "react";
import "../styles/Dashboard.css";

const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.length === 0 && <p>No tasks created</p>}

      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Assigned User ID: {task.assigneeId}</p>
        </div>
      ))}
    </>
  );
};

export default TaskList;
