import { Link, hashHistory } from 'react-router';
const React = require('react'),
      ReviewRating = require('./review_rating');

const ReviewIndexItem = React.createClass({
  render: function () {
    return (
      <li className='review-index-item'>
        <ReviewRating rating={this.props.review.rating} currentUserRating={this.props.review.current_user_rating} />
        <p>{this.props.review.body}</p>
        <small className='timestamp'>{this.props.review.username}  -  {this.props.review.date_posted} ago</small>
      </li>
    )
  }
});

module.exports = ReviewIndexItem;
