import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer, rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
