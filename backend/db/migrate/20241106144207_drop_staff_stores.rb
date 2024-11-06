class DropStaffStores < ActiveRecord::Migration[7.0]
  def change
    drop_table :staff_stores
  end
end
