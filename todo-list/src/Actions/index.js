export const addTask = (task) => {
  return {
    type: "add",
    payload: { task },
  };
};

export const removeTask = (index, task) => {
  return {
    type: "remove",
    payload: { index, task },
  };
};
