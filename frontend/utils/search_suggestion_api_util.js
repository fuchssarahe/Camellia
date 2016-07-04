const SearchSuggestionApiUtil = {
  getSuggestions: function (search_params, callback, errorCallback) {
    $.ajax({
      url: 'api/search_suggestions',
      data: search_params,
      success: callback,
      error: errorCallback
    })
  },

}

module.exports = SearchSuggestionApiUtil;
