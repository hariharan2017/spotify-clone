import { combineReducers } from "redux";
import { reducers as testReducers } from "./test";

export default combineReducers({
  test: testReducers,
});
