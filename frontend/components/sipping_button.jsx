const React = require('react'),
      SippingActions = require('../actions/sipping_actions');

const SippingButton = React.createClass({
  getInitialState: function () {
    return( { disabled: false } )
  },

  _handleClick: function (event) {
    event.preventDefault();
    SippingActions.createSipping(this.props.teaId);
    console.log('sipping button clicked');
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
