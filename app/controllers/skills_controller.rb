class SkillsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        action = Skill.create!(skill_params)
        render json: action, status: :created
    end
    
    def index
        actions = Skill.find(session[:character_id]).job.skills
        render json: actions, status: :ok
    end

    private

    def skill_params
        params.permit( :name, :proficiency, :job_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
