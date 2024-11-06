Rails.application.routes.draw do
  root "application#index"
  namespace :api do
    namespace :v1 do
      post 'login', to: 'auth#login'
      get 'validate_token', to: 'auth#validate_token'
      resources :staffs, only: [:create, :show, :update]
    end
  end
end
