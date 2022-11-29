import * as actions from "./types";

export const storeToken = (token) => ({
  type: actions.STORE_TOKEN,
  token,
});
