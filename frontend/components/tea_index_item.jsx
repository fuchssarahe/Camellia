import { Link } from 'react-router';
const React = require('react'),
      TeaStore = require('../stores/tea_store');
      // ErrorStore = require('../stores/error_store');

const TeaIndexItem = React.createClass({
  componentWillMount: function () {
    this.listener = TeaStore.addListener();
    // this.errorListener = ErrorStore.addListener();
  },

  componentWillUnmount: function () {
    this.listener.remove();
    // this.errorListener.remove();
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
              <p><span className={"icon-leaf" + ' ' + color} />Type: {this.props.tea.tea_type}</p>
              <p><span className='icon-earth' />Region: {this.props.tea.region}</p>
              <p><span className="icon-office" />Retailer: {this.props.tea.retailer}</p>
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
