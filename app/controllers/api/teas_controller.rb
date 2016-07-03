class Api::TeasController < ApplicationController

  def create
    @tea = Tea.new(tea_params)
    if @tea.save
      render :show
    else
      render json: @tea.errors, status: 401
    end
  end

  def index
    @teas = Tea.all
  end

  def show
    @tea = Tea.find(params[:id])
  end

  private
  def tea_params
    params.require(:tea).permit(:name, :description, :tea_type, :region, :steep_time, :temperature, :leaf_quantity, :leaf_density, :retailer, :image)
  end

end
