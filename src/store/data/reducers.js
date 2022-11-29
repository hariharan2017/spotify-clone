import { combineReducers } from "redux";
import * as actionTypes from "./types";

const playlistReducer = (state, action) => {
  state = state || { currentUserPlaylists: [] };

  switch (action.type) {
    case actionTypes.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        currentUserPlaylists: action.currPlaylists,
      };
    default:
      return state;
  }
};

export default combineReducers({
  userPlaylists: playlistReducer,
});
