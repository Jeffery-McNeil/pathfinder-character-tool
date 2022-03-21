class AncestriesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        ancestry = Ancestry.create!(ancestry_params)
        render json: ancestry, status: :created
    end
    
    def show
        ancestry = Character.find(session[:character_id]).ancestry
        render json: ancestry, status: :ok
    end

    def destroy
        ancestry = Ancestry.find(params[:id])
        ancestry.destroy
        head :no_content
    end

    private

    def ancestry_params
        params.permit( :name, :size, :hit_points, :speed, :ability_boost_1, :ability_boost_2, :ability_flaw, :character_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
