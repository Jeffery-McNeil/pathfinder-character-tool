class ActionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        action = Action.create!(action_params)
        render json: action, status: :created
    end
    
    def index
        actions = Character.find(session[:character_id]).job.actions
        render json: actions, status: :ok
    end

    def show
        action = Action.find(params[:id])
        render json: action, status: :ok
    end

    def destroy
        action = Action.find(params[:id])
        action.destroy
        head :no_content
    end

    def update
        action = Action.find(params[:id])
        action.update!(action_params)
        render json: action, status: :ok
    end

    private

    def action_params
        params.permit( :name, :description, :length, :job_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
