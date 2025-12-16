import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTasks, saveTasks } from "../utils/Storage";
import "../styles/Dashboard.css";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState(() =>
    getTasks().filter((t) => t.assigneeId === user.id)
  );

  const markCompleted = (id) => {
    const updated = getTasks().map((t) =>
      t.id === id ? { ...t, status: "Completed" } : t
    );
    saveTasks(updated);
    setTasks(updated.filter((t) => t.assigneeId === user.id));
  };

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>

      {tasks.length === 0 && <p>No tasks assigned</p>}

      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          {task.status !== "Completed" && (
            <button onClick={() => markCompleted(task.id)}>
              Mark Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
