class JobFeatsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        action = JobFeat.create!(job_feat_params)
        render json: action, status: :created
    end
    
    def index
        actions = JobFeat.find(session[:character_id]).job.job_feats
        render json: actions, status: :ok
    end

    private

    def job_feat_params
        params.permit( :name, :description, :level, :job_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
