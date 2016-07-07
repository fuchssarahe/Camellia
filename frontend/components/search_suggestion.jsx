import { hashHistory } from 'react-router';
const React = require('react'),
      SearchSuggestionActions = require('../actions/search_suggestion_actions'),
      TeaActions = require('../actions/tea_actions');


const SearchSuggestion = React.createClass({
  _searchAndNavToIndex: function (type, query) {
    SearchSuggestionActions.clearSuggestions();
    TeaActions.fetchTeas( { [type]: query } );
    hashHistory.push(`teas/?${type}=${query}`);
  },

  _navToShowPage: function (teaId) {
    SearchSuggestionActions.clearSuggestions();
    hashHistory.push('teas/' + this.props.suggestion.tea_id);
  },

  render: function () {
    let className = 'search-suggestion';
    const suggestionClass = 'search-suggestion';


    switch (this.props.suggestion.suggestion_type) {
      case 'tea':
        let processedDescription;
        const matchIdx = this.props.suggestion.description.toUpperCase().indexOf(this.props.query.toUpperCase());
        if (matchIdx > -1) {
          let start = matchIdx - 10;
          if (start < 0) {
            start = 0;
          }
          processedDescription = this.props.suggestion.description.slice(start, matchIdx+25).split(' ');
          if (start > 0) {
            processedDescription.pop();
            processedDescription.shift();
          }
          processedDescription = processedDescription.join(' ');
          processedDescription = '...' + processedDescription + '...'
        }
        return (

          <li onClick={() => this._navToShowPage(this.props.suggestion.tea_id)} className={suggestionClass}>
            <p>{this.props.suggestion.suggestion}</p>
            <p className='search-suggestion_subheading'>{processedDescription}</p>
          </li>
        )
      case 'region':
        className = 'icon-earth';
        return (<li onClick={() => this._searchAndNavToIndex(this.props.suggestion.suggestion_type, this.props.suggestion.suggestion)} className={suggestionClass}><span className={className} />{this.props.suggestion.suggestion}</li>)
      case 'tea_type':
        className = 'icon-leaf ';
        className += this.props.suggestion.suggestion.toLowerCase();
        return (<li onClick={() => this._searchAndNavToIndex(this.props.suggestion.suggestion_type, this.props.suggestion.suggestion)} className={suggestionClass}><span className={className} />{this.props.suggestion.suggestion}</li>)
      default:
    }

  }

});

module.exports = SearchSuggestion;
