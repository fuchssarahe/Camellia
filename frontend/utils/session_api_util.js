const SessionApiUtil = {
  createUser: function (user, callback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: {user: user},
      success: callback,
      error: errorCallback
    })
  },

  createSession: function (user, callback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: { user: user },
      success: callback,
      error: errorCallback
    })
  },

  destroySession: function (callback, errorCallback) {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: callback,
      error: errorCallback
    })
  }

};

module.exports = SessionApiUtil;
