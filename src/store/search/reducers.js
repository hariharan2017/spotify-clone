import * as actionTypes from "./types";

const searchReducer = (state, action) => {
  state = state || { categories: [] };

  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
};

export default searchReducer;
