import { Link, hashHistory } from 'react-router';
const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      OwnershipButton = require('./ownership_button'),
      SessionStore = require('../stores/session_store'),
      ReviewRating = require('./review_rating'),
      SippingButton = require('./sipping_button');

const TeaIndexItem = React.createClass({
  _navToShowWithReview: function (event) {
    event.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push('/teas/' + this.props.tea.id + '/review')
    } else {
      hashHistory.push('/login')
    }
  },

  render: function () {
    let color = this.props.tea.tea_type.toLowerCase()
    if (color === 'other') {
      color = ""
    }

    let figureContents;
    if (this.props.tea.image_public_id) {
      figureContents = <img src={this.props.tea.image_public_id} alt="Tea Image" className="index-item_image"/>
    } else {
      figureContents = <div className="index-item_image--empty"></div>
    }
    return (
      <li className='panel_section'>
        <Link to={'/teas/' + this.props.tea.id}>
          <ul className='cf panel_section-content'>
            <li className="col col-1-2">
              <div className="panel_main-subheading">
                <p>{this.props.tea.name}</p>
              </div>
              <ReviewRating rating={this.props.tea.rating} currentUserRating={this.props.current_user_rating} onClick={this._navToShowWithReview}/>
              <p><span className={"icon-leaf" + ' ' + color} />Type: {this.props.tea.tea_type}</p>
              <p><span className='icon-earth' />Region: {this.props.tea.region}</p>
              <p><span className="icon-office" />Retailer: {this.props.tea.retailer}</p>
              <div className='tea-buttons-wrapper--vertical'>
                <OwnershipButton teaId={this.props.tea.id}/>
                <SippingButton teaId={this.props.tea.id} />
              </div>
            </li>
            <li className="col col-1-2">
              <figure>
                {figureContents}
              </figure>
            </li>
          </ul>
        </Link>
      </li>
    )
  }
});

module.exports = TeaIndexItem;
