Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: { format: 'json' } do
    resources :users, only: :create do
    end
    resource :session, only: [:create, :destroy, :show]
    resources :teas, only: [:create, :show, :index] do
      resource :ownership, only: [:create, :destroy]
      resources :reviews, only: [:create, :destroy, :show]
    end
    resources :ownerships, only: [:index]
    resources :reviews, only: [:index]
    resources :search_suggestions, only: [:index]
  end
end
