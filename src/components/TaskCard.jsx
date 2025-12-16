import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/constants";

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { taskId: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="task-card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;
