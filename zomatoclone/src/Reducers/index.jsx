import { combineReducers } from "redux";
import { CountItemsReducer } from "./Optimized/countItemsReducer";
// import { CountItemsReducer } from "./countItemsReducer";

export const Reducers = combineReducers({
  countItems: CountItemsReducer,
});
