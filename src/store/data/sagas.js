import { put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { FETCH_PLAYLISTS, FETCH_PLAYLIST_DATA } from "./types";
import { GET_CURRENT_USER_PLAYLISTS, GET_PLAYLIST } from "../../constants/apis";
import { replaceUrlParam } from "../../helpers/methods";
import secureAxios from "../../utils/secureAxios";

export function* getCurrPlaylists () {
  try {
    const res = yield secureAxios(GET_CURRENT_USER_PLAYLISTS);
    yield put (actions.getUserPlaylistsSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
}

export function* getSelectedPlaylist ({ playlistId }) {
  try {
    const res = yield secureAxios(replaceUrlParam(GET_PLAYLIST, playlistId));
    yield put (actions.getPlayListDataSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas () {
  yield takeLatest(FETCH_PLAYLISTS, getCurrPlaylists);
  yield takeLatest(FETCH_PLAYLIST_DATA, getSelectedPlaylist);
}