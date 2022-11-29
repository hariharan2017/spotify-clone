import * as actionTypes from "./types";
import { combineReducers } from "redux";

const authReducer = (state, action) => {
  state = state || { token: null, loggedIn: false };

  switch (action.type) {
    case actionTypes.STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        loggedIn: true
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        token: null,
        loggedIn: false
      }
    default:
      return state;
  }
};

const profileReducer = (state, action) => {
  state = state || { details: null };
  
  switch (action.type) {
    case actionTypes.FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.data
      }
    default:
      return state;
  }
}

export default combineReducers({
  auth: authReducer,
  profile: profileReducer
});
