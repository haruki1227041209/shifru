class ChangeStoreIdNullInStaffs < ActiveRecord::Migration[7.0]
  def change
    change_column_null :staffs, :store_id, true
  end
end
