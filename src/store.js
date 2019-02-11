import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { searchReducer } from './reducers/search';
import {
  fetchDataReducer,
  setDialogReducer,
  setDetailDataReducer
} from './reducers/result';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    searchReducer,
    fetchDataReducer,
    setDialogReducer,
    setDetailDataReducer
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
