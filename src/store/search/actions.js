import * as action from "./types";

export const getCategories = () => ({
  type: action.FETCH_CATEGORIES,
});

export const getCategoriesSuccess = (categories) => ({
  type: action.FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const getSingleCategory = (categoryId) => ({
  type: action.FETCH_SINGLE_CATEGORY,
  categoryId,
});

export const getSingleCategorySuccess = (category) => ({
  type: action.FETCH_SINGLE_CATEGORY_SUCCESS,
  category,
});

export const getSearchResults = (search) => ({
  type: action.FETCH_SEARCH_RESULTS,
  search,
});

export const getSearchResultsSuccess = (response) => ({
  type: action.FETCH_SEARCH_RESULTS_SUCCESS,
  response,
});

export const changeSearchParam = (search) => ({
  type: action.CHANGE_SEARCH_TERM,
  search,
});

export const changeTab = (tab) => ({
  type: action.CHANGE_TAB,
  tab,
});
