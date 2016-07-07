const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      TeaActions = require('../actions/tea_actions'),
      OwnershipButton = require('./ownership_button'),
      TeaReviewIndex = require('./tea_review_index'),
      ReviewForm = require('./review_form');

const TeaShow = React.createClass({
  getInitialState: function () {
    return {tea: TeaStore.find(parseInt(this.props.params.id)), shouldShowReview: false}
  },

  componentWillMount: function () {
    TeaActions.fetchSingleTea(parseInt(this.props.params.id));
    this.listener = TeaStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function (newProps) {
    TeaActions.fetchSingleTea(parseInt(newProps.params.id));
  },

  _onChange: function () {
    this.setState( {tea: TeaStore.find(parseInt(this.props.params.id))} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _mountReviewForm: function () {
    this.setState({shouldShowReview: true})
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
      figureContents = <img src={this.state.tea.image_public_id} alt="Tea Image" className="index-item_image"/>
    } else {
      figureContents = <div className="index-item_image--empty profile_image--empty"></div>
    }

    let reviewForm;
    if (this.state.shouldShowReview) {
      reviewForm = <section className='panel_section'><ReviewForm /></section>
    }

    return (
      <div className="cf container">
        <aside className='panel panel_left'>
          <figure className="panel_section">
            {figureContents}
          </figure>
          <section className='panel_section'>
            <h2 className='panel_section-header'>Your Review</h2>
            <div className='panel_section-content'>
              <p> You haven't reviewed this tea yet!</p>
              <OwnershipButton teaId={this.state.tea.id} className='panel_section-content'/>
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
            <h2 className="panel_section-header">Reviews</h2>
            <TeaReviewIndex className='panel_section-content' teaId={this.props.params.id} onClick={this._mountReviewForm}/>
          </section>
        </article>

      </div>
    )
  }
});

module.exports = TeaShow;
