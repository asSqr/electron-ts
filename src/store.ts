import { combineReducers, createStore } from 'redux';
import { IState } from './states/IState';
import userReducer from './reducers/UserReducer';

const combinedReducer = combineReducers<IState>({
  user: userReducer,
});

export const store = createStore(combinedReducer);

export default store;
