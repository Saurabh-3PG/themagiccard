import * as actionTypes from "./types";
import axios from "../../utility/axios";
import {startFetching , fetchingFailed} from './index';


export const fetchingCartSuccess = (mcards, lang, filter, totalCount) => {
  return {
    type: actionTypes.FETCH_CARDS_SUCCESS,
    cards: mcards,
    filter: filter,
    lang: lang,
    totalCount: totalCount
  };
};

export const fetchCards = (lang, filter) => {
  return (dispatch) => {
    dispatch(startFetching());
    let apiUrl = `/cards?pageSize=${filter.pageSize}&page=${filter.pageNumber}`;

    if (filter.colors && filter.colors !== null && filter.colors.length > 0) {
      apiUrl = apiUrl + `&colors=`;
      filter.colors.forEach((color, index) => {
        apiUrl = `${apiUrl}${color}${
          index + 1 === filter.colors.length ? "" : "|"
        }`;
      });
    }
    if (filter.supertypes && filter.supertypes !== null) {
      apiUrl = apiUrl + `&supertypes=${filter.supertypes}`;
    }
    if (filter.rarity && filter.rarity !== null) {
      apiUrl = apiUrl + `&rarity=${filter.rarity}`;
    }
    if (filter.name && filter.name !== null && filter.name !== '') {
      apiUrl = apiUrl + `&name=${filter.name}`;
    }
    axios
      .get(apiUrl)
      .then((response) => {
        console.log('apiUrl>>>', apiUrl)
        dispatch(fetchingCartSuccess(response.data.cards, lang, filter, response.headers['total-count']));
      })
      .catch((err) => {
        dispatch(fetchingFailed(err));
      });
  };
};
