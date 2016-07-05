const React = require('react'),
      SearchSuggestionActions = require('../actions/search_suggestion_actions'),
      TeaActions = require('../actions/tea_actions');


const SearchSuggestion = React.createClass({
  _searchAndNavToIndex: function (type, query) {
    SearchSuggestionActions.clearSuggestions();
    TeaActions.fetchTeas( { [type]: query } );
    window.location.hash = `teas/?${type}=${query}`;
  },

  _navToShowPage: function (teaId) {
    SearchSuggestionActions.clearSuggestions();
    window.location.hash = 'teas/' + this.props.suggestion.tea_id;
  },

  render: function () {
    let className = '';

    switch (this.props.suggestion.suggestion_type) {
      case 'tea':
        return (<li onClick={() => this._navToShowPage(this.props.suggestion.tea_id)} >{this.props.suggestion.suggestion}</li>)
      case 'region':
        className = 'icon-earth';
        return (<li onClick={() => this._searchAndNavToIndex(this.props.suggestion.suggestion_type, this.props.suggestion.suggestion)}><span className={className} />{this.props.suggestion.suggestion}</li>)
      case 'tea_type':
        className = 'icon-leaf ';
        className += this.props.suggestion.suggestion.toLowerCase();
        return (<li onClick={() => this._searchAndNavToIndex(this.props.suggestion.suggestion_type, this.props.suggestion.suggestion)}><span className={className} />{this.props.suggestion.suggestion}</li>)
      default:
    }

  }

});

module.exports = SearchSuggestion;
