const React = require('react'),
      SippingActions = require('../actions/sipping_actions'),
      TeaStore = require('../stores/tea_store');

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
      this.setState( { disabled: false } );
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
    let classes = 'minor-button';
    if (this.state.disabled) { classes += ' minor-button--disabled' }

    return(
      <button className={classes} onClick={this._handleClick} disabled={this.state.disabled}>Log Sipping</button>
    )
  }
});

module.exports = SippingButton;
