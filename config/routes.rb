Rails.application.routes.draw do
  get '/', to: 'homepage#home', as: 'root'
  get 'download_pdf', to: "homes#download_pdf"
  get 'projects', to: 'projects#index'
  get 'experiments', to: 'experiments#index'
  get 'about', to: 'pages#about'
  resources :projects, only: [:index, :show] do
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
