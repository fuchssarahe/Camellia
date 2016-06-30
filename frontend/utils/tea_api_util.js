const TeaApiUtil = {
  fetchTeas: function (callback, errorCallback) {
    $.ajax({
      type: 'GET',
      url: 'api/teas',
      success: callback,
      error: errorCallback
    });
  },

  getTea: function (id, callback, errorCallback) {
    $.ajax({
      type: 'GET',
      url: 'api/teas/' + id,
      success: callback,
      error: errorCallback
    });
  },

  createTea: function (tea, callback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: 'api/teas',
      data: {tea: tea},
      success: callback,
      error: (err) => errorCallback('newTea', err)
    })
  }
}

module.exports = TeaApiUtil;
