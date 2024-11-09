Rails.application.routes.draw do
  root "application#index"
  namespace :api do
    namespace :v1 do
      post 'login', to: 'auth#login'
      get 'validate_token', to: 'auth#validate_token'
      resources :areas
      resources :stores
      resources :staffs, only: [:create, :show, :update]
      resources :shifts, only: [:index, :create, :update, :destroy]
    end
  end
end
