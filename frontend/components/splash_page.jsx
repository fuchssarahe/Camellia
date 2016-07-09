import { hashHistory } from 'react-router';
const React = require('react'),
      SearchBar = require('./search_bar'),
      SessionStore = require('../stores/session_store');


const Splash = React.createClass({
  componentWillMount: function () {
    this.listener = SessionStore.addListener(this._onBeingLoggedIn)
  },

  componentWillUnmount: function () {
    this.listener.remove()
  },

  _onBeingLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push('/dashboard')
    }
  },

  _navToBrowse: function () {
    hashHistory.push('/teas/?tea=');
  },

  render: function () {
    return (
      <div className="splash">
        <figure className="splash splash--banner" >
          <article className='splash-search'>
            <h2>Explore New Teas and Save your Favorites</h2>
            <h3 className='hidden-on-mobile'>Try searching by tea, type, or region</h3>
            <SearchBar />
            <h3 className='hidden-on-mobile'>Or browse to explore</h3>
            <button onClick={this._navToBrowse} className='major-button'>Explore</button>
          </article>
        </figure>
        <article className='site-info'>
          <h2 className='site-info_header'>More about Camellia</h2>
          <p className='site-info_content'>Camellia is designed to be a place where tea-lovers all over can come together to bond over teas, share their preferences, and keep tabs on the teas they currently know and love.</p>
        </article>
      </div>
    )
  }


});

module.exports = Splash;
