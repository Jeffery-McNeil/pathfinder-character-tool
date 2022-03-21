class SkillFeatsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        action = SkillFeat.create!(skill_feat_params)
        render json: action, status: :created
    end
    
    def index
        skill_feats = Character.find(session[:character_id]).job.skill_feats
        render json: skill_feats, status: :ok
    end

    def destroy
        skill_feat = SkillFeat.find(params[:id])
        skill_feat.destroy
        head :no_content
    end

    private

    def skill_feat_params
        params.permit( :name, :description, :level, :job_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
