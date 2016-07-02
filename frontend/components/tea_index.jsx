const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      TeaActions = require('../actions/tea_actions'),
      TeaForm = require('./tea_form'),
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

  _navToTeaForm: function () {
    window.location.hash = 'teas/new';
  },

  render: function () {
    const buttonToSave = <button onClick={this._navToTeaForm}>Create New Tea</button>;
    return (
      <div className="cf container">
        <ul className='panel panel_main'>
          <div className="panel_main-header panel_main-header--white">These are some of them search results</div>
          <div className="panel_main-divider">{Object.keys(this.state.teas).length} teas found</div>
          {
            Object.keys(this.state.teas).map( (teaId) => {
              return <TeaIndexItem key={teaId} tea={this.state.teas[teaId]}/>;
            })
          }
        </ul>
        <div className="panel panel_right">
          <section className="panel_section">
            <h2 className='panel_section-header'>Can't find what you're looking for? Add a new tea!</h2>
            <TeaForm className="panel_section-content"/>
          </section>
        </div>
      </div>
    )
  }
});

module.exports = TeaIndex;
