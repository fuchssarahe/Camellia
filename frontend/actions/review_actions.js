const ReviewConstants = require('../constants/review_constants'),
      ReviewApiUtil = require('../utils/review_api_util'),
      ErrorActions = require('./error_actions'),
      Dispatcher = require('../dispatcher/dispatcher');

const ReviewActions = {
  fetchReviews: function (paramHash) {
    ReviewApiUtil.getReviews(paramHash, ReviewActions.receiveReviews, ErrorActions.setErrors)
  },

  fetchSingleReview: function (reviewId) {
    ReviewApiUtil.getSingleReview(reviewId, ReviewActions.receiveSingleReview, ErrorActions.setErrors)
  },

  createReview: function (reviewParams) {
    ReviewApiUtil.createReview(reviewParams, ReviewActions.receiveSingleReview, ErrorActions.setErrors)
  },

  destroyReview: function (reviewId) {
    ReviewApiUtil.destroyReview(reviewId, ReviewActions.removeReview, ErrorActions.setErrors)
  },

  receiveSingleReview: function (review) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: ReviewConstants.RECEIVE_REVIEW,
      review: review
    }
    Dispatcher.dispatch(payload)
  },

  receiveReviews: function (reviews) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: ReviewConstants.RECEIVE_REVIEWS,
      reviews: reviews
    }
    Dispatcher.dispatch(payload)
  },

  removeReview: function (review) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: ReviewConstants.REMOVE_REVIEW,
      review: review
    }
    Dispatcher.dispatch(payload)
  }
};

module.exports = ReviewActions;
