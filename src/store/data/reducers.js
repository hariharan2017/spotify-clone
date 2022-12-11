import { combineReducers } from "redux";
import { ALBUM_SONG, PLAYLIST_SONG } from "../../constants/constants";
import * as actionTypes from "./types";

const playlistReducer = (state, action) => {
  state = state || { currentUserPlaylists: [], selectedPlaylist: {} };

  switch (action.type) {
    case actionTypes.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        currentUserPlaylists: action.currPlaylists,
      };
    case actionTypes.FETCH_PLAYLIST_DATA_SUCCESS:
      return {
        ...state,
        selectedPlaylist: action.playlistData
      }
    case actionTypes.CLEAR_DATA:
      return {
        currentUserPlaylists: [],
        selectedPlaylist: {}
      }
    default:
      return state;
  }
};

const songReducer = (state, action) => {
  state = state || { currentSong: null, songUrl: null, song: null, songType: null, prevSong: null, nextSong: null };

  let next = null;
  let prev = null;
  let total = 0;

  switch (action.type) {
    case actionTypes.SELECT_SONG:

      if (action.songType === PLAYLIST_SONG) {
        total = action.selectedCategory?.tracks?.items?.length || 0;
        action.selectedCategory?.tracks?.items?.forEach((song, idx) => {
          if(action.songUri === song?.track?.uri) {
            next = idx != total ? action.selectedCategory?.tracks?.items?.[idx+1] : action.selectedCategory?.tracks?.items?.[0];
            prev = idx != 0 ? action.selectedCategory?.tracks?.items?.[idx-1] : action.selectedCategory?.tracks?.items?.[total-1];
          }
        });
      } else if (action.songType === ALBUM_SONG) {
        console.log(action.selectedCategory);
      }

      return {
        ...state,
        currentSong: action.songUri,
        songUrl: action.songUrl,
        song: action.song,
        songType: action.songType,
        prevSong: prev,
        nextSong: next
      }
    case actionTypes.PLAY_PREV_SONG:

      if (state.songType === PLAYLIST_SONG) {
        total = action.selectedPlaylist?.tracks?.items?.length || 0;
        action.selectedPlaylist?.tracks?.items?.forEach((song, idx) => {
          if(state.currentSong === song?.track?.uri) {
            prev = idx-2 >= 0 ? action.selectedPlaylist?.tracks?.items?.[idx-2] : action.selectedPlaylist?.tracks?.items?.[total-1];
          }
        })
      }

      return {
        ...state,
        nextSong: state.song,
        currentSong: state.prevSong?.track?.uri,
        song: state.prevSong,
        songUrl: state.prevSong?.track?.preview_url,
        prevSong: prev,
      }
    case actionTypes.PLAY_NEXT_SONG:

      if (state.songType === PLAYLIST_SONG) {
        total = action.selectedPlaylist?.tracks?.items?.length || 0;
        action.selectedPlaylist?.tracks?.items?.forEach((song, idx) => {
          if(state.currentSong === song?.track?.uri) {
            next = idx+2 < total ? action.selectedPlaylist?.tracks?.items?.[idx+2] : action.selectedPlaylist?.tracks?.items?.[0];
          }
        })
      }

      return {
        ...state,
        prevSong: state.song,
        currentSong: state.nextSong?.track?.uri,
        song: state.nextSong,
        songUrl: state.nextSong?.track?.preview_url,
        nextSong: next,
      }
    case actionTypes.CLEAR_DATA:
      return {
        currentSong: null, songUrl: null, song: null, songType: null, prevSong: null, nextSong: null
      }
    default:
      return state;
  }
}

const playerReducer = (state, action) => {
  state = state || { showPlayer: false, isPlaying: false, showMobilePlayer: false };

  switch (action.type) {
    case actionTypes.SELECT_SONG:
      return {
        ...state,
        showPlayer: true
      }
    case actionTypes.PLAY_SONG:
      return {
        ...state,
        isPlaying: true
      }
    case actionTypes.PAUSE_SONG:
      return {
        ...state,
        isPlaying: false
      }
    case actionTypes.CLOSE_PLAYER:
      return {
        ...state,
        showPlayer: false
      }
    case actionTypes.CLEAR_DATA:
      return {
        showPlayer: false, isPlaying: false
      }
    case actionTypes.OPEN_MOBILE_PLAYER:
      return {
        ...state,
        showMobilePlayer: true
      }
    case actionTypes.CLOSE_MOBILE_PLAYER:
      return {
        ...state,
        showMobilePlayer: false
      }
    default:
      return state;
  }
}

const albumReducer = (state, action) => {
  state = state || { selectedAlbum: {} }

  switch (action.type) {
    case actionTypes.FETCH_ALBUM_DATA_SUCCESS:
      return {
        ...state,
        selectedAlbum: action.albumData
      }
    case actionTypes.CLEAR_DATA:
      return {
        selectedAlbum: {}
      }
    default:
      return state;
  }
}

export default combineReducers({
  userPlaylists: playlistReducer,
  song: songReducer,
  player: playerReducer,
  album: albumReducer
});
