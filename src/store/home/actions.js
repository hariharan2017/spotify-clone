import * as action from "./types";

export const getUserTopItems = () => ({
  type: action.GET_USERS_TOP_ITEMS,
});

export const getUserTopItemsSuccess = (artists, tracks) => ({
  type: action.GET_USERS_TOP_ITEMS_SUCCESSFUL,
  artists,
  tracks,
});

export const getFeaturedPlaylistsSuccess = (response) => ({
  type: action.GET_FEATURED_PLAYLISTS_SUCCESS,
  response,
});

export const getNewReleasesSuccess = (response) => ({
  type: action.GET_NEW_RELEASES_SUCCESS,
  response,
});
