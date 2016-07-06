import { Link, hashHistory } from 'react-router';
const React = require('react'),
      ReviewRating = require('./review_rating');

const ReviewIndexItem = React.createClass({
  render: function () {
    return (
      <li className='review-index-item'>
        <ReviewRating rating={this.props.review.rating}/>
        {this.props.review.body}
      </li>
    )
  }
});

module.exports = ReviewIndexItem;
