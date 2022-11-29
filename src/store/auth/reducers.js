import * as actionTypes from "./types";

const authReducer = (state, action) => {
  state = state || { token: null };

  switch (action.type) {
    case actionTypes.STORE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default authReducer;