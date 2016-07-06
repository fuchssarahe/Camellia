class Api::ReviewsController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :destroy]

  def index
    unless params[:review]
      render json: {base: ['no valid search parameters were found']}, status: 404
      return
    end

    if review_params[:tea_id]
      @reviews = Tea.find(review_params[:tea_id]).reviews
    elsif review_params[:user_id]
      @reviews = User.find(review_params[:user_id]).reviews
    end
  end

  def show
    @review = Review.find(params[:id])

    unless @review
      render json: {base: ['review not found']}, status: 404
    end
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors, status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
      render :show
    else
      render json: {base: ['review not found']}, status: 404
    end
  end

  private
  def review_params
    params.require(:review).permit(
      :user_id,
      :tea_id,
      :rating,
      :body,
      :steep_time,
      :leaf_quantity,
      :temperature,
      :leaf_density
    )
  end

end
