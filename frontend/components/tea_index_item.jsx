const React = require('react'),
      TeaStore = require('../stores/tea_store');
      // ErrorStore = require('../stores/error_store');

const TeaIndexItem = React.createClass({
  componentWillMount: function () {
    this.listener = TeaStore.addListener();
    this.errorListener = TeaStore.addListener();
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.errorListener.remove();
  },

  render: function () {
    return (
      <li>Tea: {this.props.tea.name}</li>
    )
  }
});

module.exports = TeaIndexItem;
