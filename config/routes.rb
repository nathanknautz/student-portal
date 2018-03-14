Rails.application.routes.draw do
  get '/users' => 'users#show'
  post '/user_token' => 'user_token#create'

  get '/users' => 'users#show'
  # post '/users' => 'users#create'
  # patch '/users/:id' => 'users#update'
  # delete '/users/:id' => 'users#destroy'

  get '/students' => 'students#show'
  post '/students' => 'students#create'
  patch '/students/:id' => 'students#update'
  delete 'students/:id' => 'students#destroy'

  get '/experiences/:id' => 'experiences#show'
  post '/experiences' => 'experiences#create'
  patch '/experiences/:id' => 'experiences#update'
  delete 'experiences/:id' => 'experiences#destroy'

  get '/education/:id' => 'education#show'
  post '/education' => 'education#create'
  patch '/education/:id' => 'education#update'
  delete 'education/:id' => 'education#destroy'

  get '/skills/:id' => 'skills#show'
  post '/skills' => 'skills#create'
  patch '/skills/:id' => 'skills#update'
  delete '/skills/:id' => 'skills#destroy'

  get '/capstones/:id' => 'capstones#show'
  post '/capstones' => 'capstones#create'
  patch '/capstones/:id' => 'capstones#update'
  delete '/capstones/:id' => 'capstones#destroy'



end
