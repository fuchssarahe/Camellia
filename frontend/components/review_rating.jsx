import { Link, hashHistory } from 'react-router';
const React = require('react');

const ReviewRating = React.createClass({
  render: function () {
    if (this.props.rating) {
      const scoreClass = ('rated rating-' + this.props.rating);
      return (
        <div className='rating-container'>
          <div className={scoreClass}></div>
        </div>
      )
    } else {
      return (
        <div className='unrated'>
          <button className='minor-button'>Be the first to review this tea!</button>
        </div>
      )
    }
  }
});

module.exports = ReviewRating;
