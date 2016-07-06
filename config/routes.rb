Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: { format: 'json' } do
    resources :users, only: :create do
    end
    resource :session, only: [:create, :destroy, :show]
    resources :teas, only: [:create, :show, :index] do
      resource :ownership, only: [:create, :destroy]
    end
    resources :ownerships, only: [:index]
    resources :reviews, only: [:index, :show, :create, :destroy]
    resources :search_suggestions, only: [:index]
  end
end
