import * as actionTypes from "./types";
export const startFetching = () => {
  return {
    type: actionTypes.FETCH_START
  };
};
export const fetchingFailed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  };
};
export const cleanUp = () => {
  return {
    type: actionTypes.CLEAN_UP
  };
};
export const setLang = (lang) => {
  return {
    type: actionTypes.SET_LANG,
    lang: lang,
  };
};