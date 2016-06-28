const ErrorConstants = require('../constants/error_constants'),
      Dispatcher = require('../dispatcher/dispatcher');

const ErrorActions = {
  setErrors: function (form, error) {
    window.e = error;
    const payload = {
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: error.responseJSON
    };
    Dispatcher.dispatch(payload);
  },

  clearErrors: function () {
    const payload = {
      actionType: ErrorConstants.CLEAR_ERRORS,
    };
    Dispatcher.dispatch(payload);
  }
};

module.exports = ErrorActions;
