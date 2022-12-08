import { put, takeLatest } from "redux-saga/effects";
import { FETCH_CATEGORIES } from "./types";
import { GET_SEVERAL_BROWSE_CATEGORIES } from "../../constants/apis";
import secureAxios from "../../utils/secureAxios";
import * as actions from "./actions";

export function* getSeveralBrowseCategories() {
  try {
    const result = yield secureAxios(GET_SEVERAL_BROWSE_CATEGORIES);
    yield put(actions.getCategoriesSuccess(result.data?.categories?.items || []));
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeLatest(FETCH_CATEGORIES, getSeveralBrowseCategories);
}
