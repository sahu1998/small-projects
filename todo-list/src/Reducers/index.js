import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const Reducers = combineReducers({
  todo: todoReducer,
});
