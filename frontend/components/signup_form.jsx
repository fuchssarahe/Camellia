const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions');

const SignupForm = React.createClass({
  getInitialState: function () {
    return {username: '', password: ''};
  },

  componentDidMount: function () {
    SessionStore.addListener(this._onChange);
  },

  _onChange: function () {
    if ( SessionStore.isUserLoggedIn() ) {
      window.location.hash = '/';
    }
  },

  _handleSubmit: function () {
    SessionActions.signup(this.state)
  },

  _handleFormChange: function (event, property) {
    this.setState({[property]: event.target.value})
  },

  render: function () {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form onSubmit={this._handleSubmit} >
           <input type="text" onChange={event => this._handleFormChange(event, 'username')} value={this.state.username} />
           <input type="password" onChange={event => this._handleFormChange(event, 'password')} value={this.state.password} />
           <input type="submit" value="Sign up!" />
        </form>
      </div>
    )
  }
});

module.exports = SignupForm;
