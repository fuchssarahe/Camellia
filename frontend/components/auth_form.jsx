const React = require('react'),
      SessionStore = require('../stores/session_store'),
      ErrorStore = require('../stores/errors_store'),
      SessionActions = require('../actions/session_actions');

const AuthForm = React.createClass({
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
    if (window.location.hash.includes('signup')) {
      if (ErrorStore.form() === 'signup') {
        this.setState({errors: ErrorStore.formErrors('signup') });
      }
    } else if (window.location.hash.includes('login')) {
      if (ErrorStore.form() === 'login') {
        this.setState({errors: ErrorStore.formErrors('login') });
      }
    }
  },

  _handleSubmit: function (event) {
    event.preventDefault();
    if (window.location.hash.includes('signup')) {
      SessionActions.signup(this.state);
    } else {
      SessionActions.login(this.state)
    }
  },

  _handleFormChange: function (event, property) {
    this.setState({[property]: event.target.value});
  },

  _closeModal: function () {
    window.location.hash = '/';
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.errorListener.remove();
  },

  render: function () {
    let buttonText;
    let h1Text;
    if (window.location.hash.includes('signup')) {
      h1Text = "Join Camellia for free!"
      buttonText = "Join"
    } else {
      h1Text = "Login to Camellia!"
      buttonText = "Login"
    }

    let errors = <ul className='errors'>{
      parseErrors(this.state.errors)
    }</ul>;

    if (Object.keys(this.state.errors).length === 0) {
      errors = <div></div>;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <header>
            <div className="modal-header">
              <h1>{h1Text}</h1>
              <div className="modal-close fade" onClick={this._closeModal}>&#10005;</div>
            </div>
          </header>
          {errors}
          <form onSubmit={this._handleSubmit} >
             <input type="text"
                    onChange={event => this._handleFormChange(event, 'username')}
                    value={this.state.username}
                    placeholder="Username"/>

             <input type="password"
                    onChange={event => this._handleFormChange(event, 'password')}
                    value={this.state.password}
                    placeholder="Password"/>

             <input type="submit" value={buttonText} className='submit-input'/>
          </form>
        </div>
        <div className="modal-screen" onClick={this._closeModal}></div>
      </div>
    )
  }
});

function parseErrors(errors) {
  return Object.keys(errors).map( (field) => {
    const parsedErrorsForField = errors[field].join(", ")
    if (field === 'base') {
      return <li key={field}>{'Oops! ' + parsedErrorsForField[0].toUpperCase() + parsedErrorsForField.slice(1) + '!'}</li>
    };

    return <li key={field}>{'Oops! ' + field[0].toUpperCase() + field.slice(1) + ' ' + parsedErrorsForField + '!'}</li>;
  })
}

module.exports = AuthForm;
