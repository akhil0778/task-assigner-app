import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/Storage";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers().filter((u) => u.role === "user"));
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="task-card">
          <p>User: {user.username}</p>
          <p>ID: {user.id}</p>
        </div>
      ))}
    </>
  );
};

export default UserList;
