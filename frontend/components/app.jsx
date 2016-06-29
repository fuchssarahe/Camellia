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

  render: function () {

    let greeting = 'Hello from app';
    let button = "";
    if (SessionStore.isUserLoggedIn()) {
      greeting = `Hello, ` + this.state.currentUser.username + "!";
      button = <button onClick={this._logout}>Logout!</button>;
    }
    return (
      <div>
        <h1>{greeting}</h1>
        <div>
          {button}
        </div>
        <button onClick={this._navToSignup}>Sign Up</button>
        <button onClick={this._navToLogin}>Login</button>
        {this.props.children}
      </div>)
  }
});

module.exports = App;
