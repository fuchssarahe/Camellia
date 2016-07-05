const React = require('react'),
      SessionStore = require('../stores/session_store'),
      OwnedTeaStore = require('../stores/owned_tea_store'),
      OwnershipActions = require('../actions/ownership_actions'),
      OwnedTeaItem = require('./owned_tea_item');

const Dashboard = React.createClass({
  getInitialState: function () {
    return { currentUser: SessionStore.currentUser(), ownedTeas: OwnedTeaStore.all() }
  },

  componentWillMount: function () {
    OwnershipActions.fetchOwnedTeas();
    this.listener = SessionStore.addListener(this._onChange);
    this.teaListener = OwnedTeaStore.addListener(this._onTeaChange);
  },

  _onChange: function () {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  _onTeaChange: function () {
    this.setState({ ownedTeas: OwnedTeaStore.all() });
  },

  componentWillUnmount: function () {
    this.listener.remove();
    this.teaListener.remove();
  },

  render: function () {
    return (
      <div className="cf container">
        <aside className='panel panel_left'>
          <section className='panel_section'>
            <h2 className='panel_section-header'>Your Info</h2>
            <p className='panel_section-content'>You don't have any info yet!</p>
          </section>
        </aside>

        <article className='panel panel_main'>
          <section className='panel_main-header'>
            <h1>Hello, {this.state.currentUser.username}!</h1>
            <p className="panel_main-subheading">User since: </p>
          </section>

          <section className="panel_section">
            <h2 className="panel_section-header">Tea Shelf</h2>
            <ul className="cf panel_section-content sub-index">
              {
                Object.keys(this.state.ownedTeas).map( (teaId) =>{
                  return <OwnedTeaItem key={teaId} tea={this.state.ownedTeas[teaId]} />;
                })
              }
            </ul>
          </section>
        </article>

      </div>
    )
  }
});

module.exports = Dashboard;
