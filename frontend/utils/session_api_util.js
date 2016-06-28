const SessionApiUtil = {
  createUser: function (user, callback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: {user: user},
      success: callback,
      error: (resp) => errorCallback('signup', resp)
    })
  },

  createSession: function (user, callback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: { user: user },
      success: callback,
      error: (resp) => errorCallback('login', resp)
    })
  },

  destroySession: function (callback, errorCallback) {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: callback,
      error: (resp) => errorCallback('logout', resp)
    })
  }

};

module.exports = SessionApiUtil;
