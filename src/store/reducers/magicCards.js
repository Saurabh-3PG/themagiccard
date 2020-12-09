import * as actionTypes from "../actions/types";
import { objectUpdater } from "../../utility";
const initialState = {
  error: null,
  loading: null,
  lang: null,
  filter: {
    pageSize: null,
    pageNumber: null,
    colors: null,
    supertypes: null,
    rarity: null,
    name: null
  },
  cardDetailsID: null,
  cardDetails: null,
  cards: null,
  totalCount: null
};

// Common
const setLang = (state, action) => {
  console.log('Language Set')
  return objectUpdater(state, { lang: action.lang });
};
const startFetching = (state, action) => {
  console.log('Started Card Details Fetching')
  return objectUpdater(state, { loading: true });
};
const fetchingFailed = (state, action) => {
  console.log('Card Details Fetching Failed')
  return objectUpdater(state, { loading: true });
};

// Clean Up
const cleanUp = (state, action) => {
  console.log('Card Details History Clean Up Is Complete')
  return objectUpdater(state, {
    cardDetailsID: null,
    cardDetails: null,
    loading: false
  });
};

// Card Details
const setCardDetails = (state, action) => {
  console.log('Card Details Updated')
  return objectUpdater(state, {
    cardDetailsID: action.cardDetailsID,
    cardDetails: action.cardDetails,
    loading: false
  });
};

const fetchingCartSuccess = (state, action) => {
  console.log('Fetching Carts Done')
  const newFilters = objectUpdater(state.filter, action.filter);
  return objectUpdater(state, {
    cards: action.cards,
    loading: false,
    lang: action.lang,
    filter: newFilters,
    totalCount: action.totalCount
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LANG:
      return setLang(state, action);
    case actionTypes.FETCH_START:
      return startFetching(state, action);
    case actionTypes.FETCH_FAILED:
      return fetchingFailed(state, action);
    case actionTypes.CLEAN_UP:
      return cleanUp(state, action);
    case actionTypes.FETCH_CARDS_SUCCESS:
      return fetchingCartSuccess(state, action);
    case actionTypes.SET_CARDDETAILS:
      return setCardDetails(state, action);
    default:
      return state;
  }
};
export default reducer;
