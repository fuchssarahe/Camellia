const React = require('react'),
      ReviewRating = require('./review_rating');


const FullUserReview = React.createClass({
  render: function () {
    let timeUnits;
    if (this.props.review.steep_time === 1) {
      timeUnits = 'minute'
    } else {
      timeUnits = 'minutes'
    }

    let steepTime;
    if (this.props.review.steep_time) {
      steepTime = <li><span className='icon-stopwatch'/> Steep Time: {this.props.review.steep_time + ' ' + timeUnits}</li>
    }

    let temperature;
    if (this.props.review.temperature) {
      temperature = <li><span className='icon-thermometer-half'/> Temperature: {this.props.review.temperature} °C</li>
    }

    let leafQuantity;
    if (this.props.review.leaf_quantity) {
      leafQuantity = <li><span className='icon-leaf'/> Leaf Quantity: {this.props.review.leaf_quantity} tsp/8oz</li>
    }

    let leafDensity;
    if (this.props.review.leaf_density) {
      leafDensity = <li><span className='icon-balance-scale'/> Leaf Density: {this.props.review.leaf_density} g/tsp</li>
    }
    return (
      <ul>
          <li><ReviewRating rating= {this.props.review.rating} currentUserRating={this.props.review.rating}/></li>
          <li><span className='icon-pencil2' />{this.props.review.body}</li>
          {steepTime}
          {temperature}
          {leafQuantity}
          {leafDensity}
          <li><small className='timestamp'>{this.props.review.date_posted}</small></li>
      </ul>

    )
  }
});

module.exports = FullUserReview;
