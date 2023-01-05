import * as actionTypes from "./types";

const homeReducer = (state, action) => {
  state = state || { artists: [], tracks: [] };

  switch (action.type) {
    case actionTypes.GET_USERS_TOP_ITEMS_SUCCESSFUL:
      return {
        ...state,
        artists: action.artists,
        tracks: action.tracks
      };
    default:
      return state;
  }
};
export default homeReducer;
