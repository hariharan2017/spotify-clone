import * as actions from "./types";

export const loading = () => ({
  type: actions.CURRENTLY_LOADING,
});

export const loadingCompleted = () => ({
  type: actions.LOADING_COMPLETED,
});

export const extractedColor = (color) => ({
  type: actions.SET_EXTRACTED_COLOR,
  color,
});

export const resetColor = () => ({
  type: actions.RESET_COLOR,
});
