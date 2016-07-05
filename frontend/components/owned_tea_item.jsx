const React = require('react'),
      OwnershipActions = require('../actions/ownership_actions'),
      OwnershipButton = require('./ownership_button');

const OwnedTeaItem = React.createClass({
  render: function () {
    let figureContents;
    if (this.props.tea.image_public_id) {
      figureContents = <img src={this.props.tea.image_public_id} alt="Tea Image" className="index-item_image"/>
    } else {
      figureContents = <div className="index-item_image--empty"></div>
    }

    return (
      <li>
        <figure>{figureContents}</figure>
        {this.props.tea.name}, {this.props.tea.tea_type}
        <OwnershipButton teaId={this.props.tea.id}/>
      </li>
    )
  }
});

module.exports = OwnedTeaItem;
