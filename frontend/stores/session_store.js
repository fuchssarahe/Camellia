const Store = require('flux/utils').Store,
      SessionConstants = require('../constants/session_constants'),
      Dispatcher = require('../dispatcher/dispatcher');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

function _login(user) {
  const shouldRedirect = !SessionStore.isUserLoggedIn();

  _currentUser = user;

  if (shouldRedirect) {
    window.location.hash = '/dashboard'
  }

  SessionStore.__emitChange();
};

function _logout() {
  _currentUser = {};
  SessionStore.__emitChange();
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
    default:

  }
};


SessionStore.currentUser = function () {
  return _currentUser;
};

SessionStore.isUserLoggedIn = function () {
  return _currentUser.username ? true : false
};


module.exports = SessionStore;
