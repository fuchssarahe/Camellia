const React = require('react'),
      SippingActions = require('../actions/sipping_actions');

const SippingButton = React.createClass({
  
  _handleClick: function (event) {
    event.preventDefault();
    SippingActions.createSipping(this.props.teaId);
    console.log('sipping button clicked');
  },

  render: function () {
    return(
      <button className='minor-button' onClick={this._handleClick}>Log Sipping</button>
    )
  }
});

module.exports = SippingButton;
