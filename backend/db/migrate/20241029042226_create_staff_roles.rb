class CreateStaffRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :staff_roles do |t|
      t.references :staff, null: false, foreign_key: true
      t.references :role, null: false, foreign_key: true

      t.timestamps
    end
  end
end
