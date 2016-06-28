import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./components/app'),
      SignupForm = require('./components/signup_form'),
      LoginForm = require('./components/login_form');

const routes =
  <Route path='/' component={App} >
    <Route path='signup' component={SignupForm} />
    <Route path='login' component={LoginForm} />
  </Route>;

$(
  () => { ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  ) }
);
