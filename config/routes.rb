  Rails.application.routes.draw do
    devise_for :users

    get '/this', to: "stories#new"

    get '/that', to: "scenes#new"

    devise_scope :user do
      authenticated :user do
        root to: 'stories#index', as: :authenticated_root
        resources :categories, only: [:index]
    end
  end


    namespace :api do
      namespace :v1 do
        resources :stories, only: [:index, :update, :show]
          resources :scenes, only: [:index, :update, :show]
      end
    end

    resources :stories, only: [:index, :create, :show, :new] do
      resources :scenes, only: [:index, :create, :show, :new]
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end
