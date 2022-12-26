import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const Dropdown = ({
  difficultyName,
  onSetDifficultyNum,
  onSetDifficultyName,
  isClicked,
  setIsClicked,
}) => {
  const difficultyMode = (num, str) => {
    setIsClicked(true);
    onSetDifficultyNum(num);
    onSetDifficultyName(str);
  };
  return (
    <UncontrolledDropdown group direction="start">
      <DropdownToggle caret color="primary" disabled={isClicked}>
        {difficultyName}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          onClick={() => {
            difficultyMode(10, "Easy");
          }}
        >
          Easy
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            difficultyMode(100, "Medium");
          }}
        >
          Medium
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            difficultyMode(1000, "Hard");
          }}
        >
          Hard
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Dropdown;
