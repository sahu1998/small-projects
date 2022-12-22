import React from "react";
import { useSelector } from "react-redux";
const CompleteList = () => {
  const { completed } = useSelector((store) => store.todo);
  return (
    <ul className="list-group">
      {completed.map((value) => {
        return <li className="list-group-item">{value}</li>;
      })}
    </ul>
  );
};

export default CompleteList;
