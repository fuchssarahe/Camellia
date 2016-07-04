class Api::SearchSuggestionsController < ApplicationController

  def index
    if params[:search_params]
      @teas = Tea.select(:name).where("name LIKE :search_params OR description LIKE :search_params", {search_params: '%' + params[:search_params] + '%'})
    else
      render json: {base: ['no search parameters were found']}, status: 404
    end
  end

end
