class ProficienciesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        proficiency = Proficiency.create!(proficiency_params)
        render json: proficiency, status: :created
    end
    
    def index
        proficiencies = Character.find(session[:character_id]).job.proficiencies
        render json: proficiencies, status: :ok
    end

    def update
        proficiency = Proficiency.find(params[:id])
        proficiency.update!(proficiency_params)
        render json: proficiency, status: :ok
    end

    def destroy
        proficiency = Proficiency.find(params[:id])
        proficiency.destroy
        head :no_content
    end

    private

    def proficiency_params
        params.permit( :name, :proficiency_level, :job_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
