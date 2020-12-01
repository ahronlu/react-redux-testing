import { combineReducers } from "redux";
import commentsReucer from "./comments";
import authReducer from "./auth";

const reducers = combineReducers({
  comments: commentsReucer,
  auth: authReducer,
});

export default reducers;
