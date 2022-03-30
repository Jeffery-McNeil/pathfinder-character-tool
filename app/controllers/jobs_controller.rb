class JobsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        job = Job.create!(job_params)
        render json: job, status: :created
    end

    def show
        job = Character.find(params[:id]).job
        render json: job, status: :ok
    end

    def destroy
        job = Character.find(params[:id]).job
        job.destroy
        head :no_content
    end

    private

    def job_params
        params.permit( :name, :key_ability, :hit_points, :character_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
