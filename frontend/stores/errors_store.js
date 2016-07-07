const Store = require('flux/utils').Store,
      SessionConstants = require('../constants/session_constants'),
      ErrorConstants = require('../constants/error_constants'),
      Dispatcher = require('../dispatcher/dispatcher');

const ErrorsStore = new Store(Dispatcher);

let _errors = {};
let _form = '';

ErrorsStore.formErrors = function (form) {
  let errorsCopy = {};

  if (_form === form) {
    Object.keys(_errors).map( (field) => {
      errorsCopy[field] = _errors[field];
    })
  }
  return errorsCopy;
};

ErrorsStore.form = function () {
  return _form;
};

ErrorsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload.form, payload.errors)
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
  }
};

function setErrors(form, errors) {
  _form = form;
  _errors = errors;
  ErrorsStore.__emitChange();
};

function clearErrors() {
  _form = '';
  _errors = {};
  ErrorsStore.__emitChange();
};

module.exports = ErrorsStore;
