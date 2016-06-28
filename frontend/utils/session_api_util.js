const SessionApiUtil = {
  getCurrentUser: function (callback) {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      success: callback
    });
  },

  createSession: function (user, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: { user: user },
      success: callback
    });
  },

  destroySession: function (callback) {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: callback
    });
  }
};

module.exports = SessionApiUtil;
