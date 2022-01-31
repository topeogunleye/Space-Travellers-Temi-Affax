import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
