const SearchSuggestionApiUtil ={
  getSuggestions: function (params, callback, errorCallback) {
    $.ajax({
      url: 'api/search_suggestions',
      data: params,
      success: callback,
      error: errorCallback
    })
  },

}

module.exports = SearchSuggestionApiUtil;
