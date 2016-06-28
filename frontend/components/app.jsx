const React = require('react');

const App = React.createClass({
  _navToSignup: function () {
    window.location.hash = '/signup';
  },

  _navToLogin: function () {
    window.location.hash = '/login';
  },

  render: function () {

    return (
      <div>
        <h1>Hellow from app</h1>
        <button onClick={this._navToSignup}>Sign Up</button>
        <button onClick={this._navToLogin}>Login</button>
        {this.props.children}
      </div>)
  }
});

module.exports = App;
