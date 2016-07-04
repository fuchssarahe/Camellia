const SearchSuggestionApiUtil = {
  getSuggestions: function (search_params, callback, errorCallback) {
    // search_params is an object formatted as {key: value} accepting tea, region, or tea_type as key values
    // success returns an array of objects with suggestion and suggestion_type keys
    $.ajax({
      url: 'api/search_suggestions',
      data: {search_params: search_params},
      success: callback,
      error: (resp) => {
        console.log(resp);
        errorCallback('search', resp)}
    })
  },

}

module.exports = SearchSuggestionApiUtil;
