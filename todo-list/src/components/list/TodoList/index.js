import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../Actions";
const TodoList = () => {
  const { todolist } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      {todolist.map((value, index) => {
        return (
          <li className="list-group-item">
            <button
              className="btn btn-light"
              onClick={() => dispatch(removeTask(index, value))}
            >
              <i className="bi bi-check-lg"></i>
            </button>
            {value}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
