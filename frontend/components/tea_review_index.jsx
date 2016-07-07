import { Link, hashHistory } from 'react-router';
const React = require('react'),
      ReviewActions = require('../actions/review_actions'),
      ReviewStore = require('../stores/review_store'),
      SessionStore = require('../stores/session_store'),
      ReviewIndexItem = require('./review_index_item'),
      ReviewRating = require('./review_rating');

const TeaReviewIndex = React.createClass({
  getInitialState: function () {
    return { reviews: ReviewStore.all() }
  },

  componentWillMount: function () {
    ReviewActions.fetchReviews({tea_id: this.props.teaId})
    this.listener = ReviewStore.addListener(this._onChange);
    this.userListener = SessionStore.addListener(this._onUserChange);
  },

  _onChange: function () {
    this.setState( { reviews: ReviewStore.all() } )
  },

  _onUserChange: function () {
    // if a user logs in, the review information on the page will need to be updated
    if (SessionStore.isUserLoggedIn()) {
      ReviewActions.fetchReviews({tea_id: this.props.teaId})
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.userListener.remove();
  },

  render: function () {
    const reviews = Object.keys(this.state.reviews)
    if (reviews.length < 1) {
      return (
        <div>
          <ReviewRating onClick={this.props.onClick}/>
        </div>
      )
    }

    return (
      <ul>
        {
          reviews.map( (reviewId) => {
            const review = this.state.reviews[reviewId]
            return <ReviewIndexItem key={review.id} review={review}/>
          })
        }
      </ul>
    )
  }
});

module.exports = TeaReviewIndex;
