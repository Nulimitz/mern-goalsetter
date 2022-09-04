import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-row justify-content-between align-items-center mt-3 pt-3">
      <p>{new Date(goal.createdAt).toLocaleString("en-US")}</p>
      <p className="d-flex flex-grow-1 ms-3">{goal.text}</p>
      <button
        onClick={() => dispatch(deleteGoal(goal._id))}
        className="btn btn-danger"
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
}

export default GoalItem;
