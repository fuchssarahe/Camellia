class Api::ReviewsController < ApplicationController

  def index
    if review_params[:tea_id]
      @reviews = Review.find_by(tea_id: review_params[:tea_id])
    elsif review_params[:user_id]
      @reviews = Review.find_by(user_id: review_params[:user_id])
    end

    unless @reviews
      render json: {base: ['no valid search parameters were found']}, status: 404
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
    if @review.save
      render :show
    else
      render json: @review.errors, status 401
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
