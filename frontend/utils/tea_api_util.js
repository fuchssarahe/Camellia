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
    const data = new FormData(tea);
    // Object.keys(tea).forEach( (property) => {
    //   console.log(property);
    //   if (property === 'image') {
    //     console.log('processing image');
    //     data.set(property, tea[property], tea[property].name)
    //   } else {
    //     console.log('processing another field');
    //     data.set(property, tea[property])
    //   }
    // })
    console.log('tea');
    console.log(tea);
    console.log('data');
    console.log(data);

    // const params = JSON.stringify({tea: tea});
    // console.log('params');
    // console.log(params);

    $.ajax({
      type: 'POST',
      url: 'api/teas',
      contentType: 'application/json',
      // cache: false,
      processData: false,
      data: JSON.stringify({tea: tea}),
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
