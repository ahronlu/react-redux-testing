const { combineReducers } = require("redux");
import commentsReucer from "./comments";

const reducers = combineReducers({ comments: commentsReucer });

export default reducers;
