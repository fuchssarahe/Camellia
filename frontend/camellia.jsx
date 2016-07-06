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
      TeaForm = require('./components/tea_form'),
      Dashboard = require('./components/dashboard'),
      CreateTea = require('./components/create_tea');

const routes =
  <Route path='/' component={App} >
    <IndexRoute component={Splash} />
    <Route path='signup' component={AuthForm} onEnter={ensureNotLoggedIn} />
    <Route path='login' component={AuthForm} onEnter={ensureNotLoggedIn} />
    <Route path='teas' component={TeaIndex} onEnter={ensureLoggedIn}/>
    <Route path='teas/new' component={CreateTea} />
    <Route path='teas/:id' component={TeaShow} />
    <Route path='dashboard' component={Dashboard} onEnter={ensureLoggedIn}/>
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
    hashHistory.push('/login');
  }
};

function ensureNotLoggedIn() {
  if (SessionStore.isUserLoggedIn()) {
    console.log('about to update hash');
    hashHistory.push('/');
  }
};
