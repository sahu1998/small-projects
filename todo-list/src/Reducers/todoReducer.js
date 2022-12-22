const initialState = {
  todolist: [],
  completed: [],
  all: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todolist: [...state.todolist, action.payload.task],
        all: [...state.all, action.payload.task],
      };
    case "remove":
      let temptodo = [...state.todolist];
      // let removedTask = temptodo[action.payload.index];
      temptodo.splice(action.payload.index, 1);
      return {
        ...state,
        todolist: [...temptodo],
        completed: [...state.completed, action.payload.task],
      };
    default:
      return state;
  }
};
