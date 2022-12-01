import { combineReducers } from "redux";
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
    default:
      return state;
  }
};

const songReducer = (state, action) => {
  state = state || { currentSong: null, songUrl: null, song: null, showPlayer: false }

  switch (action.type) {
    case actionTypes.SELECT_SONG:
      return {
        ...state,
        currentSong: action.songUri,
        songUrl: action.songUrl,
        song: action.song,
        showPlayer: true
      }
    case actionTypes.CLOSE_PLAYER:
      return {
        ...state,
        showPlayer: false
      }
    default:
      return state;
  }
}

export default combineReducers({
  userPlaylists: playlistReducer,
  song: songReducer
});
