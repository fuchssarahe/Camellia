const Store = require('flux/utils').Store,
      ReviewConstants = require('../constants/review_constants'),
      Dispatcher = require('../dispatcher/dispatcher'),
      SessionStore = require('./session_store');

const ReviewStore = new Store(Dispatcher);

let _reviews = {};

function _setReviews(newReviews) {
  _reviews = {};
  newReviews.forEach( (review) => {
    _reviews[review.id] = review;
  });
};


ReviewStore.all = function () {
  const reviewsCopy = {};

  Object.keys(_reviews).forEach( (reviewId) => {
    reviewsCopy[reviewId] = _reviews[reviewId];
  });
  return reviewsCopy;
};

ReviewStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ReviewConstants.RECEIVE_REVIEWS:
      _setReviews(payload.reviews);
      this.__emitChange();
      break;
    case ReviewConstants.RECEIVE_REVIEW:
      _reviews[payload.review.id] = payload.review;
      this.__emitChange();
      break;
    case ReviewConstants.REMOVE_REVIEW:
      delete _reviews[payload.review.id]
      this.__emitChange()
    default:
  }
};

ReviewStore.find = function (reviewId) {
  return _reviews[reviewId];
};


module.exports = ReviewStore;
