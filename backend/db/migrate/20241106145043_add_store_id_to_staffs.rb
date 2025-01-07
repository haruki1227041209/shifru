class AddStoreIdToStaffs < ActiveRecord::Migration[7.0]
  def change
    add_reference :staffs, :store, foreign_key: true, null: false
  end
end
