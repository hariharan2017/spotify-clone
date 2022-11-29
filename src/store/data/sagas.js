import { put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { FETCH_PLAYLISTS } from "./types";
import { GET_CURRENT_USER_PLAYLISTS } from "../../constants/apis";
import secureAxios from "../../utils/secureAxios";

export function* getCurrPlaylists () {
  try {
    const res = yield secureAxios(GET_CURRENT_USER_PLAYLISTS);
    yield put (actions.getUserPlaylistsSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas () {
  yield takeLatest(FETCH_PLAYLISTS, getCurrPlaylists);
}