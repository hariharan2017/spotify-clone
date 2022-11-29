import { combineReducers } from "redux";
import { reducers as testReducers } from "./test";
import { reducers as authReducers } from "./auth";
import { reducers as spotfiyReducers } from "./spotify";

export default combineReducers({
  test: testReducers,
  auth: authReducers,
  spotify: spotfiyReducers,
});
