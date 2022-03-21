class AttributesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        attribute = Attribute.create!(attribute_params)
        render json: action, status: :created
    end
    
    def index
        attributes = Character.find(session[:character_id]).attributes
        render json: attributes, status: :ok
    end

    def update
        attribute = Attribute.find(params[:id])
        attribute.update(media_params[:score, :bonus])
        render json: attribute, status: :ok
    end

    private

    def attribute_params
        params.permit( :name, :score, :bonus, :character_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
