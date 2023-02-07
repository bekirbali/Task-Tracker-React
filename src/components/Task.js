import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  return (
    <div
      className={`task ${props.task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => props.onToggle(props.task.id)}
    >
      <h3>
        {props.task.text}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => props.onDelete(props.task.id)}
        />
      </h3>
      <h6>{props.task.date}</h6>
    </div>
  );
};

export default Task;
