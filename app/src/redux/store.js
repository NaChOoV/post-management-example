import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import post from './reducers/post';

const rootReducer = combineReducers({
  post: post,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
