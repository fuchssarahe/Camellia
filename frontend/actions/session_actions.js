const Dispatcher = require('../dispatcher/dispatcher'),
      SessionConstants = require('../constants/session_constants'),
      SessionApiUtil = require('../utils/session_api_util');

const SessionActions = {
  signup: function (user) {
    SessionApiUtil.createUser(user, this.receiveCurrentUser, this.errorCallback);
  },

  login: function (user) {
    SessionApiUtil.createSession(user, this.receiveCurrentUser, this.errorCallback);
  },

  logout: function () {
    SessionApiUtil.destroySession(this.receiveEmptyUser, this.errorCallback);
  },

  receiveCurrentUser: function (user) {
    const payload = {
      actionType: SessionConstants.LOGIN,
      user: user
    };
    Dispatcher.dispatch(payload);
  },

  receiveEmptyUser: function (emptyUser) {
    const payload = {
      actionType: SessionConstants.LOGOUT,
      user: emptyUser
    };
    Dispatcher.dispatch(payload);
  },

  errorCallback: function (resp) {
    console.log('errors!');
    console.log(resp);
  }
};

module.exports = SessionActions;
