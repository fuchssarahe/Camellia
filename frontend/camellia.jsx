import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./components/app'),
      Splash = require('./components/splash_page'),
      SessionActions = require('./actions/session_actions'),
      AuthForm = require('./components/auth_form'),
      SessionStore = require('./stores/session_store'),
      TeaIndex = require('./components/tea_index'),
      TeaShow = require('./components/tea_show'),
      OwnershipApiUtil = window.ownship = require('./utils/ownership_api_util'),
      TeaForm = require('./components/tea_form');

const routes =
  <Route path='/' component={App} >
    <IndexRoute component={Splash} />
    <Route path='signup' component={AuthForm} onEnter={ensureNotLoggedIn} />
    <Route path='login' component={AuthForm} onEnter={ensureNotLoggedIn} />
    <Route path='teas/' component={TeaIndex} >
      <Route path='new' component={TeaForm} />
    </Route>
    <Route path='teas/:id' component={TeaShow} />
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
