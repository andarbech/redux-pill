import { combineReducers } from "redux";

import filterReducer from "./filter/reducer";
import userReducer from "./users/reducer";

const reducers = combineReducers({
  filter: filterReducer,
  user: userReducer,
});

export default reducers;
