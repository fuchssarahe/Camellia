class Api::SippingsController < ApplicationController

  before_action :ensure_logged_in

  def create
    new_params = {tea_id: params[:tea_id], user_id: current_user.id}
    sipping = Sipping.new(new_params)
    if sipping.save
      @tea = Tea.find(params[:tea_id])
      render 'api/teas/show'
    else
      render json: sipping.errors, status: 401
    end
  end

  # def destroy
  #   sipping = Sipping.find_by(tea_id: params[:sipping][:tea_id], user_id: current_user.id)
  #   if sipping.destroy
  #     @tea = Tea.find(params[:tea_id])
  #     render 'api/teas/show'
  #   else
  #     render json: sipping.errors, status: 401
  #   end
  # end

  # def index
  #   # returns teas tasted by a particular user_id
  #   @teas = current_user.sipped_teas
  #   render 'api/teas/index'
  # end
  # 
  # def index
  #     @count = Sipping.find_by(tea_id: params[:tea_id]).count
  # end

end
