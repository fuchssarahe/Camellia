import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./components/app'),
      SessionActions = require('./actions/session_actions'),
      SignupForm = require('./components/signup_form'),
      LoginForm = require('./components/login_form'),
      SessionStore = require('./stores/session_store');

const routes =
  <Route path='/' component={App} >
    <Route path='signup' component={SignupForm} />
    <Route path='login' component={LoginForm} />
  </Route>;

$(
  () => {
    if (window.currentUser) {
      SessionActions.receiveCurrentUser(window.currentUser);
    }

    ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root'));
   }
);

function ensureLoggedIn() {
  if (!SessionStore.isUserLoggedIn()) {
    window.location.hash = '/login'
  }
};
