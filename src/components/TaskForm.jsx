import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getUsers, getTasks, saveTasks } from "../utils/Storage";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers().filter((u) => u.role === "user"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !assigneeId) return;

    const newTask = {
      id: uuidv4(),
      title,
      description,
      assigneeId: Number(assigneeId),
      status: "Pending",
    };

    const tasks = [...getTasks(), newTask];
    saveTasks(tasks);

    setTitle("");
    setDescription("");
    setAssigneeId("");

    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Task</h3>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={assigneeId}
        onChange={(e) => setAssigneeId(e.target.value)}
      >
        <option value="">Assign to user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
