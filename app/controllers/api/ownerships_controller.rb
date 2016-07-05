class Api::OwnershipsController < ApplicationController

  before_action :ensure_logged_in

  def create
    new_params = {tea_id: params[:tea_id], user_id: current_user.id}
    ownership = Ownership.new(new_params)
    if ownership.save
      @tea = Tea.find(params[:tea_id])
      render 'api/teas/show'
    else
      render json: ownership.errors, status: 401
    end
  end

  def destroy
    ownership = Ownership.find_by(tea_id: params[:tea_id], user_id: current_user.id)
    if ownership.destroy
      @tea = Tea.find(params[:tea_id])
      render 'api/teas/show'
    else
      render json: ownership.errors, status: 401
    end
  end

end
