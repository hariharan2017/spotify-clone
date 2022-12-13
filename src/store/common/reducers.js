import * as actionTypes from "./types";

const commonReducer = (state, action) => {
  state = state || { loading: false };

  switch (action.type) {
    case actionTypes.CURRENTLY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADING_COMPLETED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default commonReducer;