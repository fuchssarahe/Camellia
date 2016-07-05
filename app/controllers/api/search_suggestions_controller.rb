class Api::SearchSuggestionsController < ApplicationController

  def index
    if params[:search_params]
      @suggestions, @suggestion_type = Tea.search(params[:search_params], 5)
    else
      render json: {base: ['no search parameters were found']}, status: 404
    end
  end
end
