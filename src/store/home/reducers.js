import * as actionTypes from "./types";

const homeReducer = (state, action) => {
  state = state || { artists: [], tracks: [], featPlaylists: [], releases: [] };

  switch (action.type) {
    case actionTypes.GET_USERS_TOP_ITEMS_SUCCESSFUL:
      return {
        ...state,
        artists: action.artists?.items || [],
        tracks: action.tracks?.items || [],
      };
    case actionTypes.GET_FEATURED_PLAYLISTS_SUCCESS:
      return {
        ...state,
        featPlaylists: action.response?.playlists?.items || []
      }
    case actionTypes.GET_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        releases: action.response?.albums?.items || []
      }
    case actionTypes.RESET_FETCHED_ITEMS:
      return {
        artists: [], tracks: [], featPlaylists: [], releases: []
      }
    default:
      return state;
  }
};
export default homeReducer;
