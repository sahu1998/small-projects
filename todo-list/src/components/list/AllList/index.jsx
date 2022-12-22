import React from "react";
import { useSelector } from "react-redux";
const AllList = () => {
  const { all } = useSelector((store) => store.todo);
  return (
    <ul className="list-group">
      {all.map((value, index) => {
        return (
          <li key={index} className="list-group-item">
            {value}
          </li>
        );
      })}
    </ul>
  );
};

export default AllList;
