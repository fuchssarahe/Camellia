const SearchSuggestionApiUtil = require('../utils/search_suggestion_api_util'),
      ErrorActions = require('./error_actions'),
      Dispatcher = require('../dispatcher/dispatcher'),
      SearchSuggestionConstants = require('../constants/search_suggestion_constants'),
      TeaConstants = require('../constants/tea_constants');

const SearchSuggestionActions = {
  fetchSuggestions: function (search_params) {
    if (search_params.tea) {
      SearchSuggestionApiUtil.getSuggestions(search_params, this.receiveSuggestions, ErrorActions.setErrors);
    } else {
      const searchType = Object.keys(search_params)[0];
      const suggestions = _getMatchingCategories(searchType, search_params[searchType])
      this.receiveSuggestions(suggestions)
    }
  },

  receiveSuggestions: function (suggestions) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: SearchSuggestionConstants.RECEIVE_SUGGESTIONS,
      suggestions: suggestions
    }
    Dispatcher.dispatch(payload)
  },
}


function _getMatchingCategories(searchType, query) {
  const matchers = [];


  // find correct constant to search
  let categories;
  switch (searchType) {
    case 'region':
      categories = TeaConstants.ALL_REGIONS
      break;
    case 'tea_type':
      categories = TeaConstants.ALL_TYPES
      break;
    default:
  }


  // find matching values
  let i = 0;

  while (matchers.length < 5 && i < categories.length) {
    if ( categories[i].toLowerCase().match(query.toLowerCase()) ) {
      const suggestion = {
        suggestion: categories[i],
        suggestion_type: searchType
      }
      matchers.push(suggestion);
    }
    i++
  }

  return matchers;
}


module.exports = SearchSuggestionActions;
