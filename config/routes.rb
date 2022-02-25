Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    resources :messages, only: %i[index show]
  end
end
