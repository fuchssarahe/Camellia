class Api::TeasController < ApplicationController

  def create
    p 'printing params'
    p params
    @tea = Tea.new(tea_params)
    upload_params = Cloudinary::Uploader.upload(user_params[:image])
    @tea.image_public_id = upload_params[:url]

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
