class Api::V1::AuthController < ApplicationController
  require 'jwt'

  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def login
    staff = Staff.find_by(employee_number: params[:staff][:employee_number])

    if staff&.authenticate(params[:staff][:password])
      token = generate_token(staff.id)
      render json: { staff: { employee_number: staff.employee_number, token: token } }, status: :ok
    else
      render json: { errors: { message: '認証に失敗しました' } }, status: :unauthorized
    end
  end

  def validate_token
    render json: { message: 'トークンは有効です' }, status: :ok
  end

  private

  def generate_token(staff_id)
    payload = { staff_id: staff_id, exp: 1.hour.from_now.to_i }
    JWT.encode(payload, SECRET_KEY)
  end
end
