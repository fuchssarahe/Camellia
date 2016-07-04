const SearchSuggestionApiUtil = require('../utils/tea_api_util'),
      ErrorActions = require('./error_actions'),
      Dispatcher = require('../dispatcher/dispatcher'),
      SearchSuggestionConstants = require('../constants/search_suggestion_constants');

const SearchSuggestionActions = {
  fetchSuggestions: function (params) {
    SearchSuggestionApiUtil.getSuggestions(params, this.receiveSuggestions, ErrorActions.setErrors)
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
