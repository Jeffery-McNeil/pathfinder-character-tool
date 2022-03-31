class CharactersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        character = Character.create!(character_params)
        session[:character_id] = character.id
        render json: character, status: :created
    end
    
    def index
        characters = Character.all
        render json: characters, status: :ok
    end

    def show
        character = Character.find(params[:id])
        render json: character, status: :ok
    end

    def destroy
        character = Character.find(params[:id])
        character.destroy
        head :no_content
    end

    def update
        character = Character.find(params[:id])
        character.update(character_params)
        render json: character, status: :ok
    end

    private

    def character_params
        params.permit( :name, :level, :user_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
