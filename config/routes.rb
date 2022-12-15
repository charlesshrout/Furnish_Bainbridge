Rails.application.routes.draw do
  resources :furnitures, only:[:index, :show, :create, :destroy]
  resources :users, only: [:show, :index]
  resources :brands, only: [:index, :show]
  resources :types, only: [:index, :show]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"


end
