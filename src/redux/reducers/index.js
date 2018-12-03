import { combineReducers } from 'redux';

import communication from './communication';
import posts from './posts';
import keycloak from './keycloak';

const appReducer = combineReducers({
  communication,
  posts,
  keycloak,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
