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

export const selectSong = (songUri, songUrl, song) => ({
  type: actionTypes.SELECT_SONG,
  songUri,
  songUrl,
  song
});

export const closePlayer = () => ({
  type: actionTypes.CLOSE_PLAYER
});

export const playSong = () => ({
  type: actionTypes.PLAY_SONG
});

export const pauseSong = () => ({
  type: actionTypes.PAUSE_SONG
});

export const getAlbumData = (albumId) => ({
  type: actionTypes.FETCH_ALBUM_DATA,
  albumId
});

export const getAlbumDataSuccess = (albumData) => ({
  type: actionTypes.FETCH_ALBUM_DATA_SUCCESS,
  albumData
});
