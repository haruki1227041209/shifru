class AddIsAdminToStaffs < ActiveRecord::Migration[7.0]
  def change
    add_column :staffs, :is_admin, :boolean, default: false
  end
end
