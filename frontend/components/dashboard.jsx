import { Link } from 'react-router';
const React = require('react'),
      SessionStore = require('../stores/session_store'),
      OwnedTeaStore = require('../stores/owned_tea_store'),
      OwnershipActions = require('../actions/ownership_actions'),
      OwnedTeaItem = require('./owned_tea_item'),
      ReviewStore = require('../stores/review_store'),
      ReviewActions = require('../actions/review_actions'),
      FullUserReview = require('./full_user_review');

const Dashboard = React.createClass({
  getInitialState: function () {
    return { currentUser: SessionStore.currentUser(), ownedTeas: OwnedTeaStore.all(), reviews: ReviewStore.all() }
  },

  componentWillMount: function () {
    OwnershipActions.fetchOwnedTeas();
    ReviewActions.fetchReviews({user_id: this.state.currentUser.id});
    this.listener = SessionStore.addListener(this._onChange);
    this.teaListener = OwnedTeaStore.addListener(this._onTeaChange);
    this.reviewListener = ReviewStore.addListener(this._onReviewChange);
  },

  _onChange: function () {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  _onTeaChange: function () {
    this.setState({ ownedTeas: OwnedTeaStore.all() });
  },

  _onReviewChange: function () {
    this.setState({ reviews: ReviewStore.all() });
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.teaListener.remove();
    this.reviewListener.remove();
  },

  render: function () {
    let fullReviews;
    const reviews = Object.keys(this.state.reviews)
    if (this.state.reviews === {}) {
      fullReviews = "You haven't reviewed any teas yet!";
    } else {
      fullReviews = (
        reviews.map( (reviewId) => {
          const review = this.state.reviews[reviewId];
          return (
            <li style={{width: '100%'}} key={reviewId}>
              <Link to={'teas/' + review.tea_id}>
                <h2 className='panel_main-subheading'>{review.tea_name}</h2>
                <FullUserReview review={review} key={reviewId} />
              </Link>
            </li>
          )
        })
      )
    }


    return (
      <div className="cf container">
        <aside className='panel panel_left'>
          <section className='panel_section'>
            <h2 className='panel_section-header'>Your Reviews</h2>
            <ul className='panel_section-content panel_section-content--flex-col'>
              {fullReviews}
            </ul>
          </section>
        </aside>

        <article className='panel panel_main'>
          <section className='panel_main-header'>
            <h1>Hello, {this.state.currentUser.username}!</h1>
            <p className="panel_main-subheading">User since: {this.state.currentUser.date_joined}</p>
          </section>

          <section className="panel_section">
            <h2 className="panel_section-header">Tea Shelf: {Object.keys(this.state.ownedTeas).length} owned teas</h2>
            <ul className="cf panel_section-content sub-index">
              {
                Object.keys(this.state.ownedTeas).map( (teaId) =>{
                  return <OwnedTeaItem key={teaId} tea={this.state.ownedTeas[teaId]} />;
                })
              }
            </ul>
          </section>
        </article>

      </div>
    )
  }
});

module.exports = Dashboard;
