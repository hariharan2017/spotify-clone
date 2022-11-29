import { put, takeLatest } from "redux-saga/effects";
import { FETCH_USER_DETAILS } from "./types";
import { GET_CURRENT_USER_DETAILS } from "../../constants/apis";
import { fetchUserDetailsSuccess } from "./actions";
import secureAxios from "../../utils/secureAxios";

export function* getUserDetails() {
  try {
    const res = yield secureAxios(GET_CURRENT_USER_DETAILS);
    yield put(fetchUserDetailsSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeLatest(FETCH_USER_DETAILS, getUserDetails);
}
