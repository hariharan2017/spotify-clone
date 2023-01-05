import { put, takeLatest } from "redux-saga/effects";
import { GET_USERS_TOP_ITEMS } from "./types";
import {
  GET_USER_TOP_TRACKS,
  GET_USER_TOP_ARTISTS,
  GET_FEATURED_PLAYLISTS,
  GET_NEW_RELEASES
} from "../../constants/apis";
import secureAxios from "../../utils/secureAxios";
import * as actions from "./actions";

export function* getUserTopItems() {
  try {
    const artistResults = yield secureAxios(GET_USER_TOP_ARTISTS);
    const trackResults = yield secureAxios(GET_USER_TOP_TRACKS);
    yield put(actions.getUserTopItemsSuccess(artistResults.data, trackResults.data));

    const featPlaylists = yield secureAxios(GET_FEATURED_PLAYLISTS);
    yield put(actions.getFeaturedPlaylistsSuccess(featPlaylists.data));

    const newReleases = yield secureAxios(GET_NEW_RELEASES);
    yield put(actions.getNewReleasesSuccess(newReleases.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeLatest(GET_USERS_TOP_ITEMS, getUserTopItems);
}
