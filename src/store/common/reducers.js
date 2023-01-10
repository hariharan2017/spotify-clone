import { DARK_GREY_COLOR } from "../../constants/constants";
import * as actionTypes from "./types";

const commonReducer = (state, action) => {
  state = state || { loading: false, color: DARK_GREY_COLOR, searchVisibility: false };

  switch (action.type) {
    case actionTypes.CURRENTLY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADING_COMPLETED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SHOW_SEARCH_BAR:
      return {
        ...state,
        searchVisibility: true
      };
    case actionTypes.HIDE_SEARCH_BAR:
      return {
        ...state,
        searchVisibility: false
      }
    case actionTypes.SET_EXTRACTED_COLOR:
      return {
        ...state,
        color: action.color
      }
    case actionTypes.RESET_COLOR:
      return {
        ...state,
        color: DARK_GREY_COLOR
      }
    default:
      return state;
  }
};

export default commonReducer;