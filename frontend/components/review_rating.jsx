import { Link, hashHistory } from 'react-router';
const React = require('react');

const ReviewRating = React.createClass({
  render: function () {
    let ratingClass = 'rating-container';
    let scoreClass = '';

    if (this.props.rating) {
      scoreClass += ('rating-' + this.props.rating);
    }

    return (
      <div className={ratingClass}>
        <div className={scoreClass}>{this.props.rating}</div>
      </div>
    )
  }
});

module.exports = ReviewRating;
