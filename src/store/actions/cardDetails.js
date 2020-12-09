import * as actionTypes from "./types";
import axios from "../../utility/axios";
import {startFetching , fetchingFailed} from './index';

export const setCartDetails = (details, id) => {
  return {
    type: actionTypes.SET_CARDDETAILS,
    cardDetailsID: id,
    cardDetails: details,
  };
};

export const fetchCardDetails = (id) => {
  return (dispatch) => {
    dispatch(startFetching());
    let apiUrl = `/cards/${id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log('apiUrl>>>', apiUrl)
        dispatch(setCartDetails(response.data.card, id));
      })
      .catch((err) => {
        dispatch(fetchingFailed(err));
      });
  };
};
