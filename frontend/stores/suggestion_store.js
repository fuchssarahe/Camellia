const Store = require('flux/utils').Store,
      SearchSuggestionConstants = require('../constants/search_suggestion_constants'),
      Dispatcher = require('../dispatcher/dispatcher');

const SearchSuggestionStore = new Store(Dispatcher);

_suggestions = {};


SearchSuggestionStore.all = function () {

};

SearchSuggestionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchSuggestionConstants.RECEIVE_SUGGESTIONS:
      _suggestions = payload.suggestions;
      this.__emitChange();
      break;
  }
};



module.exports = SearchSuggestionStore;
