import { Link, hashHistory } from 'react-router';
const React = require('react'),
      SessionStore = require('../stores/session_store'),
      ReviewActions = require('../actions/review_actions');

const ReviewRating = React.createClass({
  render: function () {
    if (this.props.rating) {
      let scoreClass;
      if (this.props.currentUserRating) {
        scoreClass = ('rated rating-' + this.props.currentUserRating);
        scoreClass += ' rated--by-current-user'
      } else {
        scoreClass = ('rated rating-' + this.props.rating);
      }
      return (
        <div className='rating-container'>
          <div className={scoreClass}></div>
        </div>
      )
    } else {
      return (
        <div className='unrated'>
          <button className='minor-button' onClick={this.props.onClick}>Be the first to review this tea!</button>
        </div>
      )
    }
  }
});

module.exports = ReviewRating;
