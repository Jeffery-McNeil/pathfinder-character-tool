class JobFeatsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        job_feat = JobFeat.create!(job_feat_params)
        render json: job_feat, status: :created
    end
    
    def index
        job_feats = Character.find(session[:character_id]).job.job_feats
        render json: job_feats, status: :ok
    end

    def destroy
        job_feat = JobFeat.find(params[:id])
        job_feat.destroy
        head :no_content
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
