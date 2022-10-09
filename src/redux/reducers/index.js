import { combineReducers } from "redux";
import users from "./usersReducer";
import pokemon from "./pokemonReducer";

const rootReducer = combineReducers({
  users,
  pokemon,
});

export default rootReducer;
