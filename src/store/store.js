import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import magicCards from "./reducers/magicCards";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  magicCards: magicCards
});

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));