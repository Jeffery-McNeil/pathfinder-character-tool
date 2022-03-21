class AncestryFeatsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        ancestry_feat = AncestryFeat.create!(ancestry_feat_params)
        render json: ancestry_feat, status: :created
    end
    
    def index
        ancestry_feats = Character.find(session[:character_id]).ancestry.ancestry_feats
        render json: ancestry_feats, status: :ok
    end

    def destroy
        ancestry_feat = AncestryFeat.find(params[:id])
        ancestry_feat.destroy
        head :no_content
    end

    private

    def ancestry_feat_params
        params.permit( :name, :description, :length, :job_id)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
