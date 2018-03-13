Rails.application.routes.draw do
  get '/users' => 'users#show'
  post '/user_token' => 'user_token#create'
  post '/users' => 'users#create'
  patch '/users/:id' => 'users#update'

  get '/resumes' => 'resumes#index'
  patch '/resumes/:id' => 'resumes#update'
end
