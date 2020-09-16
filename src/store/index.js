import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import favoriteReducer from "./reducers/favoriteReducer";
import pokemonReducer from "./reducers/pokemonReducer";

const reducers = combineReducers({
  favoriteReducer,
  pokemonReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
