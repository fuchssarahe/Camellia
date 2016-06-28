const React = require('react'),
      SessionStore = require('../stores/session_store'),
      ErrorStore = require('../stores/errors_store'),
      SessionActions = require('../actions/session_actions');

const SignupForm = React.createClass({
  getInitialState: function () {
    return { username: '', password: '', errors: {} };
  },

  componentDidMount: function () {
    this.listener = SessionStore.addListener(this._onChange);
    this.errorListener = ErrorStore.addListener(this._onErrors);
  },

  _onChange: function () {
    if ( SessionStore.isUserLoggedIn() ) {
      window.location.hash = '/';
    }
  },

  _onErrors: function () {
    if (ErrorStore.form() === 'signup') {
      this.setState({errors: ErrorStore.formErrors('signup') });
    };
  },

  _handleSubmit: function () {
    SessionActions.signup(this.state)
  },

  _handleFormChange: function (event, property) {
    this.setState({[property]: event.target.value})
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.errorListener.remove();
  },

  render: function () {
    return (
      <div>
        <h1>Sign Up!</h1>
        <ul>{
          Object.keys(this.state.errors).map( (field) => {
            return <li key={field}>{field + ' : ' + this.state.errors[field].reduce( (accum = "", error) => {
              return accum + error;
            })}</li>
          })
        }</ul>
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
