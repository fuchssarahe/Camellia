import { Link, hashHistory } from 'react-router';
const React = require('react'),
      ReviewActions = require('../actions/review_actions'),
      ReviewStore = require('../stores/review_store'),
      ReviewIndexItem = require('./review_index_item');

const TeaReviewIndex = React.createClass({
  getInitialState: function () {
    return { reviews: ReviewStore.all() }
  },

  componentWillMount: function () {
    ReviewActions.fetchReviews({tea_id: this.props.teaId})
    this.listener = ReviewStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState( { reviews: ReviewStore.all() } )
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <ul>
        {
          Object.keys(this.state.reviews).map( (reviewId) => {
            const review = this.state.reviews[reviewId]
            return <ReviewIndexItem key={review.id} review={review}/>
          })
        }
      </ul>
    )
  }
});

module.exports = TeaReviewIndex;
