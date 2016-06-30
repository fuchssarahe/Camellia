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

  _onChange: function () {
    this.setState( {tea: TeaStore.find(parseInt(this.props.params.id))} )
  },

  componentWillUnmount: function () {
    this.listener.remove();
    // this.errorListener.remove();
  },

  render: function () {
    console.log(this.state.tea);
    if (this.state.tea === undefined) {
      return (<div></div>);
    }

    return (
      <div>
        <aside className='cf left-panel'>
          <figure></figure>
          <section className='panel_section'>Aside</section>
        </aside>

        <article className='cf main-panel'>
          <section className='main-panel_header'>
            <h1>{this.state.tea.name}</h1>
            <div>{this.state.tea.tea_type + ', ' + this.state.tea.region}</div>
          </section>

          <section className="panel_section">
            <h2>Overview</h2>
            <div>Description: {this.state.tea.description}</div>
            <div>Steep Time: {this.state.tea.steep_time}</div>
            <div>Temperature: {this.state.tea.temperature}</div>
            <div>Leaf Quantity: {this.state.tea.leaf_quantity}</div>
            <div>Leaf Density: {this.state.tea.leaf_density}</div>
            <div>Retailer: {this.state.tea.retailer}</div>
          </section>
        </article>

      </div>
    )
  }
});

module.exports = TeaShow;
