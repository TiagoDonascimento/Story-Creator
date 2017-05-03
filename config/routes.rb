  Rails.application.routes.draw do
    devise_for :users

    get '/this', to: "stories#new"

    devise_scope :user do
      authenticated :user do
        root to: 'stories#index', as: :authenticated_root
        resources :categories, only: [:index]
    end

    resources :stories, only: [:index, :create, :show, :new]

    namespace :api do
      namespace :v1 do
        resources :stories, only: [:index, :update, :show]
      end
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end
end
