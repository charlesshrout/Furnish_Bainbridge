class FurnituresController < ApplicationController
    def index
        render json: self.all
    end

    def create
        furniture = self.create!(furniture_params)
        render json: bean, status: :created
    end

    private 
    def furniture_params
        params.require(:type, :brand).permit(:name, :image, :type_id, :brand_id)
    end


end
