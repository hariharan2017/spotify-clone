import * as types from "./types";

export const storeSpotify = (spotify) => ({
  type: types.STORE_SPOTIFY_WRAPPER,
  spotify,
});
