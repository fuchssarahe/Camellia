const React = require('react'),
      SippingActions = require('../actions/sipping_actions'),
      TeaStore = require('../stores/tea_store'),
      SessionStore = require('../stores/session_store');

const SippingButton = React.createClass({
  getInitialState: function () {
    return( { disabled: false } );
  },

  componentWillMount: function () {
    this.listener = TeaStore.addListener(this._onChange);
  },

  _onChange: function () {
    if (this.state.disabled) {
      // this updates the button even if the event was triggered by another button - kind of an issue, but a small deal for now
      // setTimeout( () => this.setState( { disabled: false } ), 1000);
      this.setState( {disabled: false} )
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _handleClick: function (event) {
    event.preventDefault();
    SippingActions.createSipping(this.props.teaId);
    this.setState( { disabled: true } );
  },

  render: function () {
    if (!SessionStore.isUserLoggedIn()) {
      return (<div></div>);
    }

    let classes = 'minor-button sipping-button';
    let text = 'Log Sipping'
    if (this.state.disabled) {
      classes += ' minor-button--disabled'
      text = 'Logging...'
    }

    return(
      <button className={classes} onClick={this._handleClick} disabled={this.state.disabled}>{text}</button>
    )
  }
});

module.exports = SippingButton;
