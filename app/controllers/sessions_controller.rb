class SessionsController < ApplicationController
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
    end

    def character_create
        character = Character.find_by(name: params[:name])
        session[:character_id] = character.id
        render json: character, status: :created
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end