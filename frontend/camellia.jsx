import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./components/app');


const router =
  <Router path='/' component={App}>
  </Router>;

$(
  () => { ReactDOM.render(
    <div>Hello from react-dom</div>,
    document.getElementById('root')
  ) }
);
