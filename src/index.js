import React from 'react';
import ReactDOM from 'react-dom';
import Keycloak from 'keycloak-js';
import App from './App';
import store from './redux/store';

const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'myrealm',
  clientId: 'myApp',
});

keycloak.init({ onLoad: 'login-required' }).success((authenticated) => {
  if (authenticated) {
    store.dispatch({ type: 'LOGIN', payload: { ...keycloak } });
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('root'),
    );
  }
});

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
