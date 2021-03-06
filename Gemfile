source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.4'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 3.5'
  gem 'guard-rspec', require: false
  gem 'rack-test', require: 'rack/test'
  gem 'factory_girl_rails'
  gem 'shoulda'
  gem 'rspec_api_documentation'
  # gem 'responders', '~> 2.2'
end

group :development do
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # Run Procfiles locally
  gem 'foreman'
  gem "letter_opener"

end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# ActiveAdmin
gem 'devise', '> 4.x'
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', git: 'https://github.com/activeadmin/inherited_resources'

# CanCanCan auth and roles
gem 'cancancan', '~> 2.0'


# Demo
gem 'faker'

# Authorization
gem 'devise_token_auth'
gem 'omniauth', '~> 1.0'
# Allow multiple domains
gem 'rack-cors', :require => 'rack/cors'

# csv upload
gem "paperclip", "~> 5.0.0"
gem 'aws-sdk'

# handle charges
gem 'stripe'

# api parameters
# gem 'active_model_serializers', '~> 0.10.0'

# wicked pdf
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary', group: :development
# gem 'wkhtmltopdf-binary-edge', '~> 0.12.4.0', group: :development
gem 'httparty'
gem 'wkhtmltopdf-heroku', group: :production #https://github.com/rposborne/wkhtmltopdf-heroku
gem 'combine_pdf'

# mechanize
gem 'mechanize'

# fix heroku
gem 'coffee-rails'
