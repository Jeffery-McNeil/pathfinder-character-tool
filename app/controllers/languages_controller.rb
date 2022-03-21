class LanguagesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        language = AncestryFeat.create!(language_params)
        render json: language, status: :created
    end
    
    def index
        languages = Character.find(session[:character_id]).ancestry.languages
        render json: languages, status: :ok
    end

    def destroy
        language = Language.find(params[:id])
        language.destroy
        head :no_content
    end

    private

    def language_params
        params.permit( :name, :ancestry_id :job_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end
    
end
