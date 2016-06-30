import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./components/app'),
      SessionActions = require('./actions/session_actions'),
      AuthForm = require('./components/auth_form'),
      SessionStore = require('./stores/session_store'),
      TeaIndex = require('./components/tea_index');

const routes =
  <Route path='/' component={App} >
    <Route path='signup' component={AuthForm} onEnter={ensureNotLoggedIn} />
    <Route path='login' component={AuthForm} onEnter={ensureNotLoggedIn} />
    <Route path='teas' component={TeaIndex} onEnter={ensureLoggedIn} />
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

function ensureNotLoggedIn() {
  if (SessionStore.isUserLoggedIn()) {
    console.log('about to update hash');
    window.location.hash = '/'
  }
};
