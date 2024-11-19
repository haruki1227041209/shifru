class Api::V1::StaffsController < ApplicationController
  before_action :authenticate_staff
  before_action :set_staff, only: [:show, :update, :destroy]
  before_action :authorize_admin_or_manager, only: [:index, :create, :update, :destroy]

  def index
    staffs = Staff.all
    render json: staffs, status: :ok
  end

  def show
    if @staff == current_staff || current_staff.is_admin || current_staff.is_manager
      render json: @staff, status: :ok
    else
      render json: { error: 'Access denied' }, status: :forbidden
    end
  end

  def create
    staff = Staff.new(staff_params)
    if staff.save
      render json: staff, status: :created
    else
      render json: { errors: staff.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @staff.update(staff_params)
      render json: @staff, status: :ok
    else
      render json: { errors: @staff.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @staff.destroy
    head :no_content
  end

  private

  def set_staff
    @staff = Staff.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'スタッフが見つかりません' }, status: :not_found
  end

  def staff_params
    params.require(:staff).permit(:name, :employee_number, :password, :is_manager, :store_id)
  end
end
