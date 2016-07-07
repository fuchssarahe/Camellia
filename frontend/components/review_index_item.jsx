import { Link, hashHistory } from 'react-router';
const React = require('react'),
      ReviewRating = require('./review_rating');

const ReviewIndexItem = React.createClass({
  render: function () {
    return (
      <li className='review-index-item'>
        <ReviewRating rating={this.props.review.rating} currentUserRating={this.props.review.current_user_rating} />
        {this.props.review.body}
        {this.props.review.username}  -  {this.props.review.date_posted}
      </li>
    )
  }
});

module.exports = ReviewIndexItem;
