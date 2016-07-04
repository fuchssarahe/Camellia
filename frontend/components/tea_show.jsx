// import { Link } from 'react-router';
const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      TeaActions = require('../actions/tea_actions');
      // ErrorStore = require('../stores/error_store');

const TeaShow = React.createClass({
  getInitialState: function () {
    return {tea: TeaStore.find(parseInt(this.props.params.id))}
  },

  componentWillMount: function () {
    TeaActions.fetchSingleTea(parseInt(this.props.params.id));
    this.listener = TeaStore.addListener(this._onChange);
    // this.errorListener = ErrorStore.addListener();
  },

  componentWillReceiveProps: function () {
    TeaActions.fetchSingleTea(parseInt(this.props.params.id))
  },

  _onChange: function () {
    this.setState( {tea: TeaStore.find(parseInt(this.props.params.id))} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
    // this.errorListener.remove();
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

    return (
      <div className="cf container">
        <aside className='panel panel_left'>
          <figure className="panel_section">
            <img src={this.state.tea.image_public_id} alt="Tea Image" className="profile-img"/>
          </figure>
          <section className='panel_section'>
            <h2 className='panel_section-header'>Your Review</h2>
            <p className='panel_section-content'>You haven't reviewed this tea yet!</p>
          </section>
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
                  <li><span className='icon-leaf'/> Leaf Quantity: {this.state.tea.leaf_quantity} tsp</li>
                  <li><span className='icon-balance-scale'/> Leaf Density: {this.state.tea.leaf_density} g/tsp</li>
                </ul>
              </li>
            </ul>
          </section>
        </article>

      </div>
    )
  }
});

module.exports = TeaShow;
