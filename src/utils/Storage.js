export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};


export const getTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
