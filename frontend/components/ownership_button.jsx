const React = require('react'),
      OwnedTeaStore = require('../stores/owned_tea_store'),
      OwnershipActions = require('../actions/ownership_actions'),
      SessionStore = require('../stores/session_store');

const OwnershipButton = React.createClass({
  _toggleOwnership: function () {
    if (OwnedTeaStore.find(this.props.teaId)) {
      OwnershipActions.destroyOwnership(this.props.teaId)
    } else {
      OwnershipActions.createOwnership(this.props.teaId)
    }
  },

  render: function () {
    if (!SessionStore.isUserLoggedIn()) {
      return (<div>Login to manage your personal teas!</div>);
    }

    let buttonText = 'Add to your Tea Shelf';
    let className = 'ownership-button'
    if (OwnedTeaStore.find(this.props.teaId)) {
      buttonText = 'Remove from Shelf'
      className = 'ownership-button minor-button'
    }

    return (
      <button onClick={this._toggleOwnership} className={className}>{buttonText}</button>
    )
  }
});


module.exports = OwnershipButton;
