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
    default:
      return state;
  }
};

const songReducer = (state, action) => {
  state = state || { currentSong: null, songUrl: null, song: null, songType: null, prevSong: null, nextSong: null };

  switch (action.type) {
    case actionTypes.SELECT_SONG:
      let next = null;
      let prev = null;
      if (action.songType === PLAYLIST_SONG) {
        const total = action.selectedCategory?.tracks?.items?.length || 0;
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
      return {
        ...state,
        nextSong: state.song,
        currentSong: state.prevSong?.track?.uri,
        song: state.prevSong,
        songUrl: state.prevSong?.track?.preview_url
      }
    case actionTypes.PLAY_NEXT_SONG:
      return {
        ...state,
        prevSong: state.song,
        currentSong: state.nextSong?.track?.uri,
        song: state.nextSong,
        songUrl: state.nextSong?.track?.preview_url
      }
    default:
      return state;
  }
}

const playerReducer = (state, action) => {
  state = state || { showPlayer: false, isPlaying: false };

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
