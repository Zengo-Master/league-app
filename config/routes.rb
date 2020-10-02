Rails.application.routes.draw do
  get 'json_p/parse'
  root to: 'results#index'
  post  'json_p/parse'
end