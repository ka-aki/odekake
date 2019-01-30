import { createStore, combineReducers } from 'redux';
import { searchReducer } from './reducers/search';

const store = createStore(
  combineReducers({
    searchReducer
  })
);

export default store;
