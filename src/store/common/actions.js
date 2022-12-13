import * as actions from "./types";

export const loading = () => ({
  type: actions.CURRENTLY_LOADING,
});

export const loadingCompleted = () => ({
  type: actions.LOADING_COMPLETED,
});
