Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: { format: 'json' } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy, :show]
    resources :teas, only: [:create, :show, :index] do
      resource :ownership, only: [:create, :destroy]
    end
    resources :search_suggestions, only: [:index]
  end

end
