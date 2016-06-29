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

  _logout: function () {
    SessionActions.logout();
  },

  _loginGuest: function () {
    SessionActions.login({username: 'guest', password: '123456'})
  },

  render: function () {

    let greeting = 'Welcome to Camellia!';
    let buttons = "";
    if (SessionStore.isUserLoggedIn()) {
      greeting = `Hello, ` + this.state.currentUser.username + "!";
      buttons = <button onClick={this._logout}>Logout!</button>;
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
          <img src="https://raw.githubusercontent.com/fuchssarahe/Camellia/master/app/assets/images/camellia_logo.png" alt="Camellia Logo" />
          {buttons}
        </header>
        <h1>{greeting}</h1>
        {this.props.children}
      </div>)
  }
});

module.exports = App;
