Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: { format: 'json' } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy, :show]
    resources :teas, only: [:create, :show, :index]
    resources :search_suggestions, only: [:index]
  end

end
