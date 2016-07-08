import { hashHistory } from 'react-router';
const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      TeaActions = require('../actions/tea_actions'),
      OwnershipButton = require('./ownership_button'),
      TeaReviewIndex = require('./tea_review_index'),
      ReviewForm = require('./review_form'),
      ReviewRating = require('./review_rating'),
      ReviewStore = require('../stores/review_store'),
      FullUserReview = require('./full_user_review'),
      SessionStore = require('../stores/session_store');

const TeaShow = React.createClass({
  getInitialState: function () {
    let showReview = false;
    if (window.location.hash.includes('review')) {
      showReview = true;
    }
    return {tea: TeaStore.find(parseInt(this.props.params.id)), shouldShowReview: showReview, currentUserReview: ReviewStore.currentUserReview(parseInt(this.props.params.id))}
  },

  componentWillMount: function () {
    TeaActions.fetchSingleTea(parseInt(this.props.params.id));
    this.listener = TeaStore.addListener(this._onChange);
    this.reviewListener = ReviewStore.addListener(this._onReviewChange)
  },

  componentWillReceiveProps: function (newProps) {
    TeaActions.fetchSingleTea(parseInt(newProps.params.id));
  },

  _onChange: function () {
    this.setState( {tea: TeaStore.find(parseInt(this.props.params.id))} )
  },

  _onReviewChange: function () {
    this.setState( {currentUserReview: ReviewStore.currentUserReview(parseInt(this.props.params.id))} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.reviewListener.remove();
  },

  _mountReviewForm: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.setState({shouldShowReview: true})
    } else {
      hashHistory.push('/login')
    }
  },

  render: function () {
    if (this.state.tea === undefined) {
      return (<div></div>);
    }

    let subHeading;
    if (this.state.tea.region === 'Unknown') {
      subHeading = this.state.tea.tea_type;
    } else {
      subHeading = this.state.tea.tea_type + ', ' + this.state.tea.region;
    }

    let timeUnits;
    if (this.state.tea.steep_time === 1) {
      timeUnits = 'minute'
    } else {
      timeUnits = 'minutes'
    }

    let figureContents;
    if (this.state.tea.image_public_id) {
      figureContents = <img src={this.state.tea.image_public_id} alt="Tea Image" className="profile_image"/>
    } else {
      figureContents = <div className="index-item_image--empty profile_image--empty"></div>
    }

    let reviewForm;
    if (this.state.shouldShowReview) {
      reviewForm = <section className='panel_section'><h2 className='panel_section-header'>Add Review</h2><ReviewForm teaId={this.props.params.id}/></section>
    }

    let reviewRating;
    if (this.state.tea.rating) {
      reviewRating = <li><ReviewRating rating={this.state.tea.rating} /></li>
    }

    let reviewButton;
    if (this.state.currentUserReview) {
      reviewButton = <FullUserReview review={this.state.currentUserReview} />
    } else if (SessionStore.isUserLoggedIn()){
      reviewButton = <button className='minor-button' onClick={this._mountReviewForm}>Add Review</button>
    } else {
      reviewButton = 'Login to review this tea!'
    }

    return (
      <div className="cf container">
        <aside className='panel panel_left'>
          <figure className="panel_section">
            {figureContents}
          </figure>
          <section className='panel_section'>
            <h2 className='panel_section-header'>Your Shelf</h2>
            <div className='panel_section-content panel_section-content--flex-col'>
              <OwnershipButton teaId={this.state.tea.id} />
            </div>
          </section>
          <section className='panel_section'>
            <h2 className='panel_section-header'>Your Review</h2>
            <div className='panel_section-content panel_section-content--flex-col'>
              {reviewButton}
            </div>
          </section>
          {reviewForm}
        </aside>

        <article className='panel panel_main'>
          <section className='panel_main-header'>
            <h1>{this.state.tea.name}</h1>
            <p className="panel_main-subheading">{subHeading}</p>
          </section>

          <section className="panel_section">
            <h2 className="panel_section-header">Overview</h2>
            <ul className="cf panel_section-content">
              <li className="col col-1-2">
                <ul>
                  {reviewRating}
                  <li><span className='icon-pencil2' /> {this.state.tea.description}</li>
                  <li><span className='icon-office'/> Retailer: {this.state.tea.retailer}</li>
                </ul>
              </li>

              <li className="col col-1-2">
                <ul>
                  <li><span className='icon-stopwatch'/> Steep Time: {this.state.tea.steep_time + ' ' + timeUnits}</li>
                  <li><span className='icon-thermometer-half'/> Temperature: {this.state.tea.temperature} °C</li>
                  <li><span className='icon-leaf'/> Leaf Quantity: {this.state.tea.leaf_quantity} tsp/8oz</li>
                  <li><span className='icon-balance-scale'/> Leaf Density: {this.state.tea.leaf_density} g/tsp</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className='panel_section'>
          <h2 className="panel_section-header">User Steep Averages</h2>
            <ul className="cf panel_section-content">
              <li className="col col-1-2">
                <ul>
                  <li><span className='icon-stopwatch'/> Steep Time: {this.state.tea.avg_steep_time + ' ' + timeUnits}</li>
                  <li><span className='icon-thermometer-half'/> Temperature: {this.state.tea.avg_temperature} °C</li>
                </ul>
              </li>

              <li className="col col-1-2">
                <ul>
                  <li><span className='icon-leaf'/> Leaf Quantity: {this.state.tea.avg_leaf_quantity} tsp/8oz</li>
                  <li><span className='icon-balance-scale'/> Leaf Density: {this.state.tea.avg_leaf_density} g/tsp</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className='panel_section'>
            <h2 className="panel_section-header">Reviews</h2>
            <TeaReviewIndex className='panel_section-content' teaId={this.props.params.id} onClick={this._mountReviewForm}/>
          </section>
        </article>

      </div>
    )
  }
});

module.exports = TeaShow;
