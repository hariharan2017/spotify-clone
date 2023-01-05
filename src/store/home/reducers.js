import * as actionTypes from "./types";

const homeReducer = (state, action) => {
  state = state || { artists: [], tracks: [] };

  switch (action.type) {
    case actionTypes.GET_USERS_TOP_ITEMS_SUCCESSFUL:
      return {
        ...state,
        artists: action.artists?.items || [],
        tracks: action.tracks?.items || []
      };
    default:
      return state;
  }
};
export default homeReducer;
