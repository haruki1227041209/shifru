class AddStoreIdToStaffs < ActiveRecord::Migration[7.0]
  def change
    # 開発環境ではスキップ
    return if Rails.env.development?

    # 本番環境では通常通り適用
    add_reference :staffs, :store, foreign_key: true, null: false unless column_exists?(:staffs, :store_id)
  end
end