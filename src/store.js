import { createStore, combineReducers } from 'redux';
import { searchReducer } from './reducers/search';

const store = createStore(
  combineReducers({
    searchReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
