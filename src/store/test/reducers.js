import * as actionTypes from "./types";

const testReducer = (state, action) => {
  state = state || { data: {} };

  switch (action.type) {
    case actionTypes.FETCH_API_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default testReducer;
