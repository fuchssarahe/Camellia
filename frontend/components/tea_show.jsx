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
    return (
      <div>Hello from the show page</div>
    )
  }
});

module.exports = TeaShow;
