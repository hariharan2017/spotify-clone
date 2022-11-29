import * as actionTypes from "./types";

const authReducer = (state, action) => {
  state = state || { token: null, loggedIn: false };

  switch (action.type) {
    case actionTypes.STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        loggedIn: true
      };
    default:
      return state;
  }
};

export default authReducer;