import { Link } from 'react-router';
const React = require('react'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      SearchBar = require('./search_bar');

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
        <li><button onClick={this._navToSignup} className="minor-button">Sign Up</button></li>
        <li><button onClick={this._navToLogin} className="minor-button">Login</button></li>
        <li><button onClick={this._loginGuest}>Demo Acount</button></li>
      </ul>
    }

    return (
      <div>
        <div className="header-holder">
          <header className="site-nav">
          <Link to="/"><img src="https://raw.githubusercontent.com/fuchssarahe/Camellia/master/app/assets/images/camellia_logo.png" alt="Camellia Logo" /></Link>
          <SearchBar/>
          {buttons}
          </header>
        </div>
        {this.props.children}
        <footer className="footer">
          this will be the footer.
        </footer>
      </div>)
  }
});

module.exports = App;
