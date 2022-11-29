import * as actionTypes from "./types";

const spotifyReducer = (state, action) => {
  state = state || { wrapper: null };

  switch (action.type) {
    case actionTypes.STORE_SPOTIFY_WRAPPER:
      return {
        ...state,
        wrapper: action.spotify,
      };
    default:
      return state;
  }
};

export default spotifyReducer;
