import { hashHistory } from 'react-router';
const React = require('react'),
      SearchBar = require('./search_bar');


const Splash = React.createClass({
  _navToBrowse: function () {
    hashHistory.push('/teas/?tea=');
  },

  render: function () {
    return (
      <div className="splash">
        <figure className="splash splash--banner" >
          <article className='splash-search'>
            <h2>Explore New Teas and Save your Favorites</h2>
            <h3>Try searching by tea, type, or region</h3>
            <SearchBar />
            <h3>Or browse to explore</h3>
            <button onClick={this._navToBrowse} className='major-button'>Explore</button>
          </article>
        </figure>
        <article className='site-info'>
          <h2>More about Camellia</h2>
        </article>
      </div>
    )
  }


});

module.exports = Splash;
