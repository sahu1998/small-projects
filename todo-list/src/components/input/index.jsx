import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Actions";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  return (
    <div className="d-flex justify-content-end">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task..."
          aria-label="Todo"
          aria-describedby="basic-addon2"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addTask(todo));
          }}
          id="basic-addon2"
          className="btn input-group-text btn-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
