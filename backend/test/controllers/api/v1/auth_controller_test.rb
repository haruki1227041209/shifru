require "test_helper"

class Api::V1::AuthControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin = staffs(:admin_user) # fixtures から管理者を取得
  end

  test "フィクスチャの管理者ユーザーでログインできる" do
    post api_v1_login_url, params: {
      staff: {
        employee_number: @admin.employee_number,
        password: "admin_password" # フィクスチャに設定したパスワード
      }
    }

    assert_response :success
    json_response = JSON.parse(response.body)
    assert_not_nil json_response["token"], "トークンが返されていない"
  end
end
