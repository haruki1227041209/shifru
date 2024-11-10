Rails.application.routes.draw do
  root "application#index"
  namespace :api do
    namespace :v1 do
      post 'login', to: 'auth#login'
      get 'validate_token', to: 'auth#validate_token'
      resources :areas
      resources :stores
      resources :staffs
      resources :staff_shifts, only: [:index, :destroy] do
        collection do
          post :bulk_upsert
        end
      end
    end
  end
end
