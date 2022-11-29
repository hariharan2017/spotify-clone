import { combineReducers } from "redux";
import { reducers as testReducers } from "./test";
import { reducers as authReducers } from "./auth";

export default combineReducers({
  test: testReducers,
  auth: authReducers
});
