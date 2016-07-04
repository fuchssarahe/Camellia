const TeaApiUtil = require('../utils/tea_api_util'),
      ErrorActions = require('./error_actions'),
      Dispatcher = require('../dispatcher/dispatcher'),
      TeaConstants = require('../constants/tea_constants');

const TeaActions = {
  fetchTeas: function (params) {
    TeaApiUtil.fetchTeas(params, this.receiveTeas, ErrorActions.setErrors)
  },

  fetchSingleTea: function (id) {
    TeaApiUtil.getTea(id, this.receiveSingleTea, ErrorActions.setErrors)
  },

  createTea: function (tea) {
    TeaApiUtil.createTea(tea, this.receiveSingleTea, ErrorActions.setErrors)
  },

  receiveTeas: function (teas) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: TeaConstants.RECEIVE_TEAS,
      teas: teas
    }
    Dispatcher.dispatch(payload);
  },

  receiveSingleTea: function (tea) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: TeaConstants.RECEIVE_TEA,
      tea: tea
    }
    Dispatcher.dispatch(payload);
  }
}

module.exports = TeaActions;
