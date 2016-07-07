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
      ReviewActions = window.actions = require('./actions/review_actions'),
      ReviewStore = window.store = require('./stores/review_store'),
      CreateTea = require('./components/create_tea'),
      ReviewForm = require('./components/review_form');

const routes =
  <Route path='/' component={App} >
    <IndexRoute component={Splash} />
    <Route path='signup' component={AuthForm} />
    <Route path='login' component={AuthForm} />
    <Route path='teas' component={TeaIndex} />
    <Route path='teas/new' component={CreateTea} />
    <Route path='teas/:id' component={TeaShow} >
      <Route path='review' component={TeaShow} />
    </Route>
    <Route path='dashboard' component={Dashboard}/>
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
    hashHistory.push('/');
  }
};
