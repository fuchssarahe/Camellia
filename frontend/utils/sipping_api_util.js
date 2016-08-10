const OwnershipApiUtil = {
  createSipping: function (teaId, callback, errorCallback) {
    $.ajax({
      url: 'api/teas/' + teaId + '/sipping',
      type: 'POST',
      success: callback,
      error: (resp) => errorCallback('newSipping', resp)
    })
  },

};

module.exports = OwnershipApiUtil;
