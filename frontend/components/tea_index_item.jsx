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
    return (
      <li className='panel_section'>
        <section className='panel_section-content'>
        <Link to={'/teas/' + this.props.tea.id} >Tea: {this.props.tea.name}</Link>
        </section>
      </li>
    )
  }
});

module.exports = TeaIndexItem;
