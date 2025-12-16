import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUsers } from "../utils/Storage";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import '../styles/LoginForm.css'

const LoginForm = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = getUsers();
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!foundUser) {
      setError("Invalid credentials");
      return;
    }

    login(foundUser);
  };

  if (user?.role === "admin") {
    return (
      <>
        <button onClick={logout}>Logout</button>
        <AdminDashboard />
      </>
    );
  }

  if (user?.role === "user") {
    return (
      <>
        <button onClick={logout}>Logout</button>
        <UserDashboard />
      </>
    );
  }

  return (
  <form className="login-container" onSubmit={handleLogin}>
    <h2>Login</h2>
    {error && <p className="error">{error}</p>}

    <input
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button type="submit">Login</button>
  </form>
);

};

export default LoginForm;
