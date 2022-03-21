Rails.application.routes.draw do
  resources :actions
  resources :skills
  resources :backgrounds
  resources :attributes
  resources :spell_slots
  resources :general_feats
  resources :job_feats
  resources :skill_feats
  resources :spells
  resources :proficiencies
  resources :jobs
  resources :ancestry_feats
  resources :languages
  resources :ancestries
  resources :characters
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
