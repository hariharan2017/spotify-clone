import * as actions from "./types";

export const storeToken = (token) => ({
  type: actions.STORE_TOKEN,
  token,
});

export const logOut = () => ({
  type: actions.LOG_OUT,
});

export const fetchUserDetails = () => ({
  type: actions.FETCH_USER_DETAILS,
});

export const fetchUserDetailsSuccess = (data) => ({
  type: actions.FETCH_USER_DETAILS_SUCCESS,
  data,
});
