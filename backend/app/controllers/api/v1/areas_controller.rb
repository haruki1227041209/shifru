class Api::V1::AreasController < ApplicationController
  before_action :set_area, only: [:show, :update, :destroy]

  def index
    areas = Area.all
    render json: areas, status: :ok
  end

  def show
    render json: @area, status: :ok
  end

  def create
    area = Area.new(area_params)
    if area.save
      render json: area, status: :created
    else
      render json: { errors: area.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @area.update(area_params)
      render json: @area, status: :ok
    else
      render json: { errors: @area.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @area.destroy
    head :no_content
  end

  private

  def set_area
    @area = Area.find(params[:id])
  end

  def area_params
    params.require(:area).permit(:name)
  end
end

