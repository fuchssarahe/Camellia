const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      TeaActions = require('../actions/tea_actions'),
      // ErrorStore = require('../stores/error_store'),
      TeaIndexItem = require('./tea_index_item');

const TeaIndex = React.createClass({
  getInitialState: function () {
    return { teas: TeaStore.all() };
  },

  componentWillMount: function () {
    TeaActions.fetchTeas();
    this.listener = TeaStore.addListener(this._onChange);
    // this.errorListener = TeaStore.addListener();
  },

  _onChange: function () {
    this.setState({ teas: TeaStore.all() })
  },

  componentWillUnmount: function () {
    this.listener.remove();
    // this.errorListener.remove();
  },

  render: function () {
    return (
      <ul>
        {
          Object.keys(this.state.teas).map( (teaId) => {
            return <TeaIndexItem key={teaId} tea={this.state.teas[teaId]}/>;
          })
        }
      </ul>
    )
  }
});

module.exports = TeaIndex;