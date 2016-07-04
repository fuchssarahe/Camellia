const SearchSuggestionApiUtil = require('../utils/search_suggestion_api_util'),
      ErrorActions = require('./error_actions'),
      Dispatcher = require('../dispatcher/dispatcher'),
      SearchSuggestionConstants = require('../constants/search_suggestion_constants');

const SearchSuggestionActions = {
  fetchSuggestions: function (search_params) {
    SearchSuggestionApiUtil.getSuggestions(search_params, this.receiveSuggestions, ErrorActions.setErrors);
  },

  receiveSuggestions: function (suggestions) {
    ErrorActions.clearErrors();
    const payload = {
      actionType: SearchSuggestionConstants.RECEIVE_SUGGESTIONS,
      suggestions: suggestions
    }
    Dispatcher.dispatch(payload)
  }
}

module.exports = SearchSuggestionActions;
