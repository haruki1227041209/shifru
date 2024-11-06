# app/controllers/api/v1/staffs_controller.rb
class Api::V1::StaffsController < ApplicationController
  before_action :authenticate_staff, only: [:show, :update]

  def show
    render json: { staff: { staff_name: current_staff.name, employee_number: current_staff.employee_number } }
  end

  def create
    @staff = Staff.new(staff_params)

    if @staff.save
      render json: { staff: { staff_name: @staff.name, employee_number: @staff.employee_number } }, status: :created
    else
      render json: { errors: { body: @staff.errors.full_messages } }, status: :unprocessable_entity
    end
  end

  def update
    if current_staff.update(staff_params)
      render json: { staff: { staff_name: current_staff.name, employee_number: current_staff.employee_number } }
    else
      render json: { errors: { body: current_staff.errors.full_messages } }, status: :unprocessable_entity
    end
  end

  private

  def staff_params
    params.require(:staff).permit(:employee_number, :name, :password)
  end
end
