import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/constants";
import { getTasks, saveTasks } from "../utils/Storage";

const UserDropCard = ({ user, refreshTasks }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item) => {
      const tasks = getTasks().map((task) =>
        task.id === item.taskId
          ? { ...task, assigneeId: user.id }
          : task
      );

      saveTasks(tasks);
      refreshTasks();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="task-card"
      style={{ backgroundColor: isOver ? "#e0f2fe" : "white" }}
    >
      <h4>{user.username}</h4>
      <p>Drop task here</p>
    </div>
  );
};

export default UserDropCard;
