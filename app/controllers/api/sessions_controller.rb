class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: {base: ['invalid credentials']}, status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: {base: ['no one was logged in!']}, status: 404
    end
  end

  def show
    if current_user
      @user = current_user
      render '/api/users/show'
    else
      render json: {base: ['no one was logged in!']}, status: 404
    end
  end

end
