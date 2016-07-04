const React = require('react'),
      TeaStore = require('../stores/tea_store'),
      SearchSuggestionStore = require('../stores/search_suggestion_store');

const SearchBar = React.createClass({
  getInitialState: function () {
    return { suggestions: SearchSuggestionStore.all() }
  },

  componentWillMount: function () {
    SuggestionStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState( { suggestions: SearchSuggestionStore.all() } );
  },

  _navToTeasIndex: function () {
    if (!window.location.hash.includes('teas') || window.location.hash.lastIndexOf('?') >= 6) {
      window.location.hash = '/teas';
    }
  },

  render: function () {
    return (
      <label for='search-bar'>Search:
        <input type='text' onChange={this._navToTeasIndex} id='search-bar'/>
      </label>
    )
  }
});

module.exports = SearchBar;
