const ReviewApiUtil = {
  createReview: function (reviewParams, callback, errorCallback) {
    $.ajax({
      url: 'api/reviews',
      type: 'POST',
      data: {review: reviewParams},
      success: callback,
      error: (err) => errorCallback('createReview', err)
    })
  },

  getReviews: function (paramHash, callback, errorCallback) {
    $.ajax({
      url: 'api/reviews',
      type: 'GET',
      data: {review: paramHash},
      success: callback,
      error: errorCallback
    })
  },

  getSingleReview: function (reviewId, callback, errorCallback) {
    $.ajax({
      url: 'api/reviews/' + reviewId,
      type: 'GET',
      success: callback,
      error: errorCallback
    })
  },

  destroyReview: function (reviewId, callback, errorCallback) {
    $.ajax({
      url: 'api/reviews/' + reviewId,
      type: 'DELETE',
      success: callback,
      error: errorCallback
    })
  }
};

module.exports = ReviewApiUtil;

// rev.fetchReviews({user_id: 3}, (resp) => console.log(resp), (resp) => console.log('err', resp))
// rev.createReview({user_id: 3, tea_id: 3, rating: 4, body: 'I love tea', steep_time: 3, leaf_quantity: 1, temperature: 90, leaf_density: 10}, (resp) => console.log(resp), (resp) => console.log('err', resp))
// rev.fetchSingleReview(61, (resp) => console.log(resp), (resp) => console.log('err', resp))
// rev.destroyReview(61, (resp) => console.log(resp), (resp) => console.log('err', resp))
