import * as actionTypes from "./types";

const searchReducer = (state, action) => {
  state = state || { search: {}, categories: [], category: [] };

  switch (action.type) {
    case actionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        search: action.response
      }
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };
    case actionTypes.FETCH_SINGLE_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default searchReducer;
