import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import UserDropCard from "./UserDropCard";
import { getTasks, getUsers } from "../utils/Storage";
import "../styles/Dashboard.css";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState(() => getTasks());
  const users = getUsers().filter((u) => u.role === "user");

  const refreshTasks = () => {
    setTasks(getTasks());
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <div className="section">
        <TaskForm onTaskAdded={refreshTasks} />
      </div>

      <div className="section">
        <h3>Tasks (Drag)</h3>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <div className="section">
        <h3>Users (Drop)</h3>
        {users.map((user) => (
          <UserDropCard
            key={user.id}
            user={user}
            refreshTasks={refreshTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
