const TeaApiUtil = {
  fetchTeas: function (params, callback, errorCallback) {
    $.ajax({
      type: 'GET',
      data: {tea: params},
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
    const data = new FormData();
    Object.keys(tea).forEach( (property) => {
      console.log(property);
      if (property === 'image') {
        data.append(`tea[${property}]`, tea[property], tea[property].name)
      } else {
        data.append(`tea[${property}]`, tea[property])
      }
    })

    $.ajax({
      type: 'POST',
      url: 'api/teas',
      contentType: false,
      cache: false,
      processData: false,
      data: data,
      success: callback,
      error: (err) => {
        console.log('err');
        console.log(err);
        errorCallback('newTea', err);
      }
    })
  }
}

module.exports = TeaApiUtil;
