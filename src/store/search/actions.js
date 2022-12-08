import * as action from "./types";

export const getCategories = () => ({
  type: action.FETCH_CATEGORIES,
});

export const getCategoriesSuccess = (categories) => ({
  type: action.FETCH_CATEGORIES_SUCCESS,
  categories
});
