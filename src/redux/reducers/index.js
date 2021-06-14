import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
const allReducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  todo: todoReducer,
});

export default allReducers;
