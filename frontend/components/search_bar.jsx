import { Link } from 'react-router';
const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SearchSuggestionActions = require('../actions/search_suggestion_actions'),
      SearchSuggestionStore = require('../stores/search_suggestion_store');

const SearchBar = React.createClass({
  getInitialState: function () {
    return { suggestions: SearchSuggestionStore.all(), searchType: 'tea', query: '' }
  },

  componentWillMount: function () {
    SearchSuggestionStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState( { suggestions: SearchSuggestionStore.all() } );
  },

  _updateSuggestions: function (event) {
    this.setState(
      {query: event.target.value},
      () => SearchSuggestionActions.fetchSuggestions( {[this.state.searchType]: this.state.query} )
    )
  },

  _updateSearchType: function (event) {
    this.setState({searchType: event.target.value})
  },

  render: function () {
    if (!SessionStore.isUserLoggedIn) {
      return <div></div>
    }

    return (
      <form className="site-search">
        <label>Search By:
          <select onChange={this._updateSearchType}>
            <option value="tea">Tea</option>
            <option value="region">Region</option>
            <option value="tea_type">Type</option>
          </select>
        </label>

        <label>Search:
          <input type='text' onChange={this._updateSuggestions} className="search-bar"/>
        </label>

        <ul className='search-suggestions'>
          {
            this.state.suggestions.map( (suggestion) => {
              return <li key={suggestion.suggestion}><Link to={'teas/' + suggestion.tea_id}> {suggestion.suggestion + ` (${suggestion.suggestion_type})`}</Link></li>
            })
          }
        </ul>
      </form>
    )
  }
});

module.exports = SearchBar;
