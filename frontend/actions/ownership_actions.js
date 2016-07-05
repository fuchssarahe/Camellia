const TeaConstants = require('../constants/tea_constants'),
      OwnershipApiUtil = require('../utils/ownership_api_util'),
      ErrorActions = require('./error_actions'),
      Dispatcher = require('../dispatcher/dispatcher');

const OwnedTeaActions = {
  createOwnership: function (teaId) {
    OwnershipApiUtil.createOwnership(teaId, OwnedTeaActions.receiveSingleTea, ErrorActions.setErrors)
  },

  destroyOwnership: function (teaId) {
    OwnershipApiUtil.destroyOwnership(teaId, OwnedTeaActions.removeSingleTea, ErrorActions.setErrors)
  },

  fetchOwnedTeas: function () {
    OwnershipApiUtil.getOwnedTeas(OwnedTeaActions.receiveTeas, ErrorActions.setErrors)
  },

  receiveTeas: function (teas) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: TeaConstants.RECEIVE_OWNED_TEAS,
      teas: teas
    }
    Dispatcher.dispatch(payload);
  },

  receiveSingleTea: function (tea) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: TeaConstants.RECEIVE_OWNED_TEA,
      tea: tea
    }
    Dispatcher.dispatch(payload);
  },

  removeSingleTea: function (tea) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: TeaConstants.REMOVE_OWNED_TEA,
      tea: tea
    }
    Dispatcher.dispatch(payload);
  }
}

module.exports = OwnedTeaActions;
