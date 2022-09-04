import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 class="card-title mb-3">Create a goal</h5>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="text"
                name="text"
                value={text || ""}
                placeholder="Enter your goal"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button type="submit" className="w-100 btn btn-primary">
              Add Goal
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default GoalForm;
