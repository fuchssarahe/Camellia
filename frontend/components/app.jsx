import { Link } from 'react-router';
const React = require('react'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store');

const App = React.createClass({
  getInitialState: function () {
    return {currentUser: SessionStore.currentUser()}
  },

  componentDidMount: function () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: SessionStore.currentUser()})
  },

  _navToSignup: function () {
    window.location.hash = '/signup';
  },

  _navToLogin: function () {
    window.location.hash = '/login';
  },

  _navToTeasIndex: function () {
    if (!window.location.hash.includes('teas') || window.location.hash.lastIndexOf('?') >= 6) {
      window.location.hash = '/teas';
    }
  },

  _logout: function () {
    SessionActions.logout();
    window.location.hash = '/';
  },

  _loginGuest: function () {
    SessionActions.login({username: 'guest', password: '123456'})
  },

  render: function () {

    let buttons = "";
    if (SessionStore.isUserLoggedIn()) {
      buttons = <button className='auth-buttons' onClick={this._logout}>Logout!</button>;
    } else {
      buttons =
      <ul className='auth-buttons'>
        <li><button onClick={this._navToSignup}>Sign Up</button></li>
        <li><button onClick={this._navToLogin}>Login</button></li>
        <li><button onClick={this._loginGuest}>Demo Acount</button></li>
      </ul>
    }

    return (
      <div>
        <header className="site-nav">
          <Link to="/"><img src="https://raw.githubusercontent.com/fuchssarahe/Camellia/master/app/assets/images/camellia_logo.png" alt="Camellia Logo" /></Link>
          <label for='search-bar'>Search:
            <input type='text' onChange={this._navToTeasIndex} id='search-bar'/>
          </label>
          {buttons}
        </header>
        {this.props.children}
      </div>)
  }
});

module.exports = App;
