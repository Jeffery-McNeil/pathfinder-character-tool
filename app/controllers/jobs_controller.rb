class JobsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        job = Job.create!(job_params)
        render json: job, status: :created
    end

    def show
        job = job.find(params[:id])
        render json: job, status: :ok
    end

    def destroy
        job = Job.find(params[:id])
        job.destroy
        head :no_content
    end

    private

    def job_params
        params.permit( :name, :level, :user_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
