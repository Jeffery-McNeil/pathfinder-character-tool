class Ability_scoresController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        ability_score = Ability_score.create!(ability_score_params)
        render json: action, status: :created
    end
    
    def index
        ability_scores = Character.find(session[:character_id]).ability_scores
        render json: ability_scores, status: :ok
    end

    def update
        ability_score = Ability_score.find(params[:id])
        ability_score.update(media_params[:score, :bonus])
        render json: ability_score, status: :ok
    end

    private

    def ability_score_params
        params.permit( :name, :score, :bonus, :character_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
