import { Link } from 'react-router';
const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      TeaActions = require('../actions/tea_actions'),
      TeaForm = require('./tea_form'),
      TeaIndexItem = require('./tea_index_item'),
      SessionStore = require('../stores/session_store'),
      OwnedTeaActions = require('../actions/ownership_actions'),
      OwnedTeaStore = require('../stores/owned_tea_store');

const TeaIndex = React.createClass({
  getInitialState: function () {
    return { teas: TeaStore.all() };
  },

  componentWillMount: function () {
    TeaActions.fetchTeas(this.props.location.query);

    if (SessionStore.isUserLoggedIn()) {
      OwnedTeaActions.fetchOwnedTeas();
    }

    this.listener = TeaStore.addListener(this._onChange);
    this.ownedListener = OwnedTeaStore.addListener(this._onOwnedTeaChange);
  },

  componentWillReceiveProps: function (newProps) {
    TeaActions.fetchTeas(newProps.location.query);
  },

  _onChange: function () {
    this.setState({ teas: TeaStore.all() })
  },

  _onOwnedTeaChange: function () {
    this.forceUpdate();
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.ownedListener.remove();
  },

  render: function () {

    const numOfTeas = Object.keys(this.state.teas).length;
    let teaHeader = 'Wow! Teas!';
    if (numOfTeas < 1) {
      teaHeader = 'Oh no! No Teas! Click Explore?'
    }

    const mobileTeaForm = (
      <div className='hidden-on-desktop'>
          <section className="panel_section">
            <Link to='teas/new'>
              <h2 className='panel_section-header'>Can't find what you're looking for? Click to add a new tea!</h2>
            </Link>
          </section>
      </div>
    );

    const desktopTeaForm = (
      <div className="panel panel_right hidden-on-mobile">
        <section className="panel_section">
          <h2 className='panel_section-header'>Can't find what you're looking for? Add a new tea to Camellia!</h2>
          <TeaForm className="panel_section-content"/>
        </section>
      </div>
    );

    return (
      <div className="container">
        <div className='cf container-basket'>
        <ul className='panel panel_main'>
          <div className="panel_main-header panel_main-header--white">{teaHeader}</div>
          <div className="panel_main-divider">{numOfTeas} teas found</div>
          {mobileTeaForm}
          {
            Object.keys(this.state.teas).map( (teaId) => {
              return <TeaIndexItem key={teaId} tea={this.state.teas[teaId]}/>;
            })
          }
        </ul>
        {desktopTeaForm}
        </div>
      </div>
    )
  }
});

module.exports = TeaIndex;
