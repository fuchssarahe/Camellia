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
      <div>
        <ul className='main-panel'>
          {
            Object.keys(this.state.teas).map( (teaId) => {
              return <TeaIndexItem key={teaId} tea={this.state.teas[teaId]}/>;
            })
          }
        </ul>
        <div className="cf right-panel">
          <section className="panel_section">
            <h2>Can't find what you're looking for? Add a new tea!</h2>
            <TeaForm/>
          </section>
        </div>
      </div>
    )
  }
});

module.exports = TeaIndex;
