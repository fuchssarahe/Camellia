const OwnershipApiUtil = {
  createOwnership: function (teaId, callback, errorCallback) {
    $.ajax({
      url: 'api/teas/' + teaId + '/ownership',
      type: 'POST',
      success: callback,
      error: (resp) => errorCallback('newOwnership', resp)
    })
  },

  destroyOwnership: function (teaId, callback, errorCallback) {
    $.ajax({
      url: 'api/teas/' + teaId + '/ownership',
      type: 'DELETE',
      success: callback,
      error: (resp) => errorCallback('destroyOwnership', resp)
    })
  },

  getOwnedTeas: function (callback, errorCallback) {
    $.ajax({
      url: 'api/ownerships',
      type: 'GET',
      success: callback,
      error: errorCallback
    })
  }

};

module.exports = OwnershipApiUtil;
