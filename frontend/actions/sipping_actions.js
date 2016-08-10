const TeaConstants = require('../constants/tea_constants'),
      SippingApiUtil = require('../utils/ownership_api_util'),
      ErrorActions = require('./error_actions'),
      Dispatcher = require('../dispatcher/dispatcher');

const SippedTeaActions = {
  createSipping: function (teaId) {
    SippingApiUtil.createSipping(teaId, SippedTeaActions.receiveSingleTea, ErrorActions.setErrors)
  },

  receiveSingleTea: function (tea) {
    ErrorActions.clearErrors();
    // const payload = {
    //   actionType: TeaConstants.RECEIVE_SIPPED_TEA,
    //   tea: tea
    // }
    // Dispatcher.dispatch(payload);
    console.log(tea, 'successfully created a sipping!');
  }

}

module.exports = SippedTeaActions;
