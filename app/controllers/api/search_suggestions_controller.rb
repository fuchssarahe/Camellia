class Api::SearchSuggestionsController < ApplicationController

  def index
    if params[:search_params].keys

      if params[:search_params][:tea]
        @suggestions = Tea.select('id, name as search_name')
          .where("UPPER(name) LIKE :search_params OR description LIKE :search_params", {search_params: '%' + search_params[:tea].upcase + '%'})
        @suggestion_type = 'tea'
      else
        column = search_params.keys[0]
        selection_string = column + ' as search_name'
        @suggestions = Tea.select(selection_string).distinct
          .where("UPPER(#{column}) LIKE :search_params", {search_params: '%' + search_params[column].upcase + '%'})
        @suggestion_type = column
      end
    else
      render json: {base: ['no search parameters were found']}, status: 404
    end
  end

  private
  def search_params
    params.require(:search_params).permit(:tea, :region, :tea_type)
  end

end
