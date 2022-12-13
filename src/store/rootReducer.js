import { combineReducers } from "redux";
import { reducers as testReducers } from "./test";
import { reducers as commonReducers } from "./common";
import { reducers as authReducers } from "./auth";
import { reducers as spotfiyReducers } from "./spotify";
import { reducers as dataReducers } from "./data";
import { reducers as searchReducers } from "./search";

export default combineReducers({
  test: testReducers,
  common: commonReducers,
  authentication: authReducers,
  spotify: spotfiyReducers,
  data: dataReducers,
  search: searchReducers
});
