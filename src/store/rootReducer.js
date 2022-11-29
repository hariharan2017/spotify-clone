import { combineReducers } from "redux";
import { reducers as testReducers } from "./test";
import { reducers as authReducers } from "./auth";
import { reducers as spotfiyReducers } from "./spotify";
import { reducers as dataReducers } from "./data";

export default combineReducers({
  test: testReducers,
  authentication: authReducers,
  spotify: spotfiyReducers,
  data: dataReducers,
});
