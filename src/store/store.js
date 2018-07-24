import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import mergeReducer from '../service/mergeReducer';
import corpReducer from '../corporate/corporateReducer';

const rootReducer = combineReducers({
  hotel: mergeReducer,
  corporate: corpReducer,
});

const middlewares = [
  reduxPackMiddleware,
  reduxThunkMiddleware.withExtraArgument(),
].filter(Boolean);

const storeEnhancers = [
  applyMiddleware(...middlewares), window.devToolsExtension && window.devToolsExtension(),
].filter(Boolean);

export default (initialState) => createStore(
  rootReducer,
  initialState,
  compose(...storeEnhancers),
);
