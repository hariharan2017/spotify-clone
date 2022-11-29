import * as actionTypes from "./types";

export const getUserPlaylists = () => ({
  type: actionTypes.FETCH_PLAYLISTS,
});

export const getUserPlaylistsSuccess = (currPlaylists) => ({
  type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
  currPlaylists,
});
