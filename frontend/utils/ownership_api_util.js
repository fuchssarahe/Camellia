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
      error: (resp) => errorCallback('newOwnership', resp)
    })
  }


};

module.exports = OwnershipApiUtil;


// ownship.createOwnership(17, () => console.log('success'), () => console.log('error'))
