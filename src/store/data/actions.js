import * as actionTypes from "./types";

export const getUserPlaylists = () => ({
  type: actionTypes.FETCH_PLAYLISTS,
});

export const getUserPlaylistsSuccess = (currPlaylists) => ({
  type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
  currPlaylists,
});

export const getPlaylistData = (playlistId) => ({
  type: actionTypes.FETCH_PLAYLIST_DATA,
  playlistId,
});

export const getPlayListDataSuccess = (playlistData) => ({
  type: actionTypes.FETCH_PLAYLIST_DATA_SUCCESS,
  playlistData,
});

export const selectSong = (songUri) => ({
  type: actionTypes.SELECT_SONG,
  songUri
});

export const fetchSong = (songUri) => ({
  type: actionTypes.FETCH_SONG,
  songUri
});
