import { createStore, applyMiddleware } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
console.log('sdf');
export const store = createStore(function reducer(
  state = defaultState,
  action
) {
  return state;
},
applyMiddleware(createLogger()));
