import { combineReducers } from 'redux';
import { cakeReducer } from './cake/reducers';

export const rootReducer = combineReducers({
  cake: cakeReducer,
});
