import { combineReducers } from "redux";
import courses from "./courseReducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  courses,
  users,
});

export default rootReducer;
