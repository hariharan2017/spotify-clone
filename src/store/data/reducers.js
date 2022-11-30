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
  state = state || { currentSong: null }

  switch (action.type) {
    case actionTypes.SELECT_SONG:
      return {
        ...state,
        currentSong: action.songUri
      }
    default:
      return state;
  }
}

export default combineReducers({
  userPlaylists: playlistReducer,
  song: songReducer
});
