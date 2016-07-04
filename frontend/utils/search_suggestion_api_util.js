const SearchSuggestionApiUtil = {
  getSuggestions: function (search_params, callback, errorCallback) {
    // search_params is an object formatted as {tea: value} accepting tea as key value
    // success returns an array of objects with suggestion, tea_id and suggestion_type keys
    $.ajax({
      url: 'api/search_suggestions',
      data: {search_params: search_params},
      success: callback,
      error: (resp) => errorCallback('search', resp)
    })
  },

}

module.exports = SearchSuggestionApiUtil;
