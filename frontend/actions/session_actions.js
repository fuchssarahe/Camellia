const Dispatcher = require('../dispatcher/dispatcher'),
      SessionConstants = require('../constants/session_constants'),
      SessionApiUtil = require('../utils/session_api_util'),
      ErrorActions = require('./error_actions');

const SessionActions = {
  signup: function (user) {
    SessionApiUtil.createUser(user, this.receiveCurrentUser, ErrorActions.setErrors);
  },

  login: function (user) {
    SessionApiUtil.createSession(user, this.receiveCurrentUser, ErrorActions.setErrors);
  },

  logout: function () {
    SessionApiUtil.destroySession(this.receiveEmptyUser, ErrorActions.setErrors);
  },

  receiveCurrentUser: function (user) {
    ErrorActions.clearErrors()
    const payload = {
      actionType: SessionConstants.LOGIN,
      user: user
    };
    Dispatcher.dispatch(payload);
  },

  receiveEmptyUser: function (emptyUser) {
    ErrorActions.clearErrors()
    const payload = {
      actionType: SessionConstants.LOGOUT,
      user: emptyUser
    };
    Dispatcher.dispatch(payload);
  }
};

module.exports = SessionActions;
