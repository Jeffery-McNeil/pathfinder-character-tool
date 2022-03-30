class BackgroundsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        background = Background.create!(background_params)
        render json: action, status: :created
    end
    
    def show
        background = Character.find(session[:character_id]).background
        render json: background, status: :ok
    end

    def update 
        background = Background.find(session[:character_id]).background
        background.update(background_params)
        render json: background, status: :ok
    end

    def destroy
        background = Background.find(params[:id])
        background.destroy
        head :no_content
    end

    private

    def background_params
        params.permit( :name, :description, :skill, :bonus_feat, :ability_boost_1, :ability_boost_2, :character_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
