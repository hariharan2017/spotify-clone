import { put, takeLatest } from "redux-saga/effects";
import { FETCH_CATEGORIES, FETCH_SINGLE_CATEGORY, FETCH_SEARCH_RESULTS } from "./types";
import { GET_SEVERAL_BROWSE_CATEGORIES, GET_SINGLE_BROWSE_CATEGORY, GET_SEARCH_RESULTS } from "../../constants/apis";
import secureAxios from "../../utils/secureAxios";
import * as actions from "./actions";
import { replaceUrlParam } from "../../helpers/methods";

export function* getSearchResults ({ search }) {
  try {
    if(search) {
      const result = yield secureAxios(GET_SEARCH_RESULTS+`?q=${search}`+"&type=album,playlist,track");
      console.log(result.data);
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getSeveralBrowseCategories() {
  try {
    const result = yield secureAxios(GET_SEVERAL_BROWSE_CATEGORIES);
    yield put(actions.getCategoriesSuccess(result.data?.categories?.items || []));
  } catch (err) {
    console.log(err);
  }
}

export function* getSingleCategory({ categoryId }) {
  try {
    const result = yield secureAxios(replaceUrlParam(GET_SINGLE_BROWSE_CATEGORY, categoryId));
    yield put(actions.getSingleCategorySuccess(result.data || []));
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeLatest(FETCH_SEARCH_RESULTS, getSearchResults);
  yield takeLatest(FETCH_CATEGORIES, getSeveralBrowseCategories);
  yield takeLatest(FETCH_SINGLE_CATEGORY, getSingleCategory);
}
