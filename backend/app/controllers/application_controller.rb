class ApplicationController < ActionController::API
  include ActionController::Cookies

  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  attr_reader :current_staff

  private

  def logged_in?
    !!current_staff
  end

  def authenticate_staff
    header = request.headers['Authorization']
    token = header.split.last if header

    begin
      decoded = JWT.decode(token, SECRET_KEY)[0]
      @current_staff = Staff.find(decoded['staff_id'])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: { message: 'スタッフが見つかりません' } }, status: :unauthorized
    rescue JWT::DecodeError
      render json: { errors: { message: 'トークンが無効です' } }, status: :unauthorized
    rescue JWT::ExpiredSignature
      render json: { errors: { message: 'トークンの有効期限が切れています' } }, status: :unauthorized
    end
  end

  def authorize_admin
    render json: { error: 'Access denied' }, status: :forbidden unless current_staff&.is_admin
  end

  def authorize_admin_or_manager
    render json: { error: 'Access denied' }, status: :forbidden unless current_staff&.is_admin || current_staff&.is_manager
  end
end
