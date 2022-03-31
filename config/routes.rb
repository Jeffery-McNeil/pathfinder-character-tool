Rails.application.routes.draw do
  resources :gears
  resources :armors
  resources :weapons
  resources :actions
  resources :skills, only: [:create, :index, :destroy]
  resources :backgrounds, only: [:create, :show, :destroy, :update]
  resources :ability_scores, only: [:create, :index, :update, :destroy]
  resources :spell_slots
  resources :general_feats, only: [:create, :index, :destroy]
  resources :job_feats, only: [:create, :index, :destroy]
  resources :skill_feats, only: [:create, :index, :destroy]
  resources :spells
  resources :proficiencies, only: [:create, :index, :destroy]
  resources :jobs, only: [:create, :show, :destroy]
  resources :ancestry_feats, only: [:create, :index, :destroy]
  resources :languages, only: [:create, :index, :destroy]
  resources :ancestries, only:  [:create, :show, :destroy]
  resources :characters
  resources :users, only: [:create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/character_select/:name', to: "sessions#character_show"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
