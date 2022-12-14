class FurnituresController < ApplicationController
    wrap_parameters format: []
    def index
        render json: Furniture.all
    end

    def destroy
        furn = Furniture.find(params[:id])
        furn.destroy
        head :no_content
    end

    def create
        furniture = Furniture.create!(furniture_params)
        render json: furniture, status: :created
    end

    private 
    def furniture_params
        params.permit(:name, :image, :type_id, :brand_id)
    end


end
