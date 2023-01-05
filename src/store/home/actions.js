import * as action from "./types";

export const getUserTopItems = () => ({
  type: action.GET_USERS_TOP_ITEMS,
});

export const getUserTopItemsSuccess = (artists, tracks) => ({
  type: action.GET_USERS_TOP_ITEMS_SUCCESSFUL,
  artists,
  tracks
});
