import { Link } from 'react-router';
const React = require('react'),
      OwnershipActions = require('../actions/ownership_actions'),
      OwnershipButton = require('./ownership_button'),
      SippingButton = require('./sipping_button');

const OwnedTeaItem = React.createClass({
  render: function () {
    let figureContents;
    if (this.props.tea.image_public_id) {
      figureContents = <img src={this.props.tea.image_public_id} alt="Tea Image" className="index-item_image"/>
    } else {
      figureContents = <div className="index-item_image--empty"></div>
    }

    return (
      <li className='owned-tea-item'>
        <Link to={'teas/' + this.props.tea.id}>
          <figure>{figureContents}</figure>
          {this.props.tea.name}, {this.props.tea.tea_type}
          <p>Number of times you've had this tea: {this.props.tea.sipping_count}</p>
          <div className='tea-buttons-wrapper--horizontal'>
            <OwnershipButton teaId={this.props.tea.id}/>
            <SippingButton teaId={this.props.tea.id}/>
          </div>
        </Link>
      </li>
    )
  }
});

module.exports = OwnedTeaItem;
