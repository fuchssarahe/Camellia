const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SearchSuggestionActions = require('../actions/search_suggestion_actions'),
      SearchSuggestionStore = require('../stores/search_suggestion_store'),
      SearchSuggestion = require('./search_suggestion'),
      TeaActions = require('../actions/tea_actions');

const SearchBar = React.createClass({
  getInitialState: function () {
    return { suggestions: SearchSuggestionStore.all(), searchType: 'tea', query: '' }
  },

  componentWillMount: function () {
    this.listener = SearchSuggestionStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState( { suggestions: SearchSuggestionStore.all() } );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _updateSuggestions: function (event) {
    this.setState(
      {query: event.target.value},
      () => SearchSuggestionActions.fetchSuggestions( { [this.state.searchType]: this.state.query } )
    )
  },

  _updateSearchType: function (event) {
    this.setState( {searchType: event.target.value} )
  },

  _searchAndNavAway: function (event) {
    event.preventDefault();
    SearchSuggestionActions.clearSuggestions();

    TeaActions.fetchTeas( { [this.state.searchType]: this.state.query } );
    window.location.hash = `teas/?${this.state.searchType}=${this.state.query}`;
  },

  render: function () {
    if (!SessionStore.isUserLoggedIn) {
      return <div></div>
    }



    // onBlur={SearchSuggestionActions.clearSuggestions}
    // onFocus={this._updateSuggestions}
    return (
      <div className="search-container">
        <form className="tea-search" onSubmit={this._searchAndNavAway}>
            <select onChange={this._updateSearchType} className="tea-search_field-selector">
              <option value="tea">Tea</option>
              <option value="region">Region</option>
              <option value="tea_type">Type</option>
            </select>

            <div className='input-container'>
              <input type='text'
                     onChange={this._updateSuggestions}
                     className="search-bar"
                     placeholder="Search for a tea!"/>

              <ul className='search-suggestions'>
                {
                  this.state.suggestions.map( (suggestion) => {
                    return <SearchSuggestion key={suggestion.suggestion} suggestion={suggestion}/>;
                  })
                }
              </ul>
            </div>

            <button type="submit" value=" " className="tea-search_submit">
              <span className="icon-leaf" />
            </button>

        </form>

      </div>
    )
  }
});

module.exports = SearchBar;
