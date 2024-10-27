class ApplicationController < ActionController::API
  def index
    render json: {message: "こんにちは"}
  end
end
