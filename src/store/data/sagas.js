import { put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as commonActions from "../common/actions";
import { FETCH_PLAYLISTS, FETCH_PLAYLIST_DATA, FETCH_ALBUM_DATA } from "./types";
import { GET_CURRENT_USER_PLAYLISTS, GET_PLAYLIST, GET_ALBUM } from "../../constants/apis";
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
    yield put (commonActions.loading());
    const res = yield secureAxios(replaceUrlParam(GET_PLAYLIST, playlistId));
    yield put (actions.getPlayListDataSuccess(res.data));
  } catch (err) {
    console.log(err);
  } finally {
    yield put (commonActions.loadingCompleted());
  }
}

export function* getAlbum ({ albumId }) {
  try {
    yield put (commonActions.loading());
    const res = yield secureAxios(replaceUrlParam(GET_ALBUM, albumId));
    yield put (actions.getAlbumDataSuccess(res.data));
  } catch (err) {
    console.log(err);
  } finally {
    yield put (commonActions.loadingCompleted());
  }
}

export default function* sagas () {
  yield takeLatest(FETCH_PLAYLISTS, getCurrPlaylists);
  yield takeLatest(FETCH_PLAYLIST_DATA, getSelectedPlaylist);
  yield takeLatest(FETCH_ALBUM_DATA, getAlbum);
}